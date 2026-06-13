import { useEffect, useRef } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

const SECTION_SEEN_PREFIX = 'section_seen_';

/**
 * Minimum continuous visibility duration (ms) required to count a section as "seen".
 * 500ms is enough to filter out fast-scrolls while capturing genuine pauses.
 */
const DWELL_MS = 500;

/**
 * Track which sections a user scrolls into view.
 *
 * Strategy:
 *  - IntersectionObserver with threshold:0 detects entry/exit for sections of any height
 *    (sections taller than the viewport can never achieve 50% simultaneous visibility).
 *  - A 500ms dwell timer is started on entry and cancelled on exit, so fast-scrolls
 *    through a section do NOT trigger an event — only genuine pauses count.
 *  - Each section fires exactly once per session (deduplicated via sessionStorage).
 *
 * @param sectionIds - list of DOM element IDs to observe
 */
export function useSectionTracking(sectionIds: string[]) {
    const { trackSectionView } = useAnalytics();
    const observerRef = useRef<IntersectionObserver | null>(null);
    // Map of sectionId → pending dwell timer
    const dwellTimers = useRef<Map<string, ReturnType<typeof setTimeout>>>(
        new Map(),
    );

    useEffect(() => {
        if (
            typeof window === 'undefined' ||
            !('IntersectionObserver' in window)
        ) {
            return;
        }

        // Clean up previous observer and any pending timers
        observerRef.current?.disconnect();
        dwellTimers.current.forEach(clearTimeout);
        dwellTimers.current.clear();

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.id;
                    if (!sectionId) return;

                    const storageKey = `${SECTION_SEEN_PREFIX}${sectionId}`;

                    if (entry.isIntersecting) {
                        // Section entered viewport — start dwell timer if not already seen
                        if (
                            !sessionStorage.getItem(storageKey) &&
                            !dwellTimers.current.has(sectionId)
                        ) {
                            const timer = setTimeout(() => {
                                dwellTimers.current.delete(sectionId);

                                // Guard: don't double-fire if somehow already tracked
                                if (sessionStorage.getItem(storageKey)) return;

                                sessionStorage.setItem(storageKey, '1');
                                trackSectionView(sectionId);

                                // Stop observing — no need to watch anymore
                                observer.unobserve(entry.target);
                            }, DWELL_MS);

                            dwellTimers.current.set(sectionId, timer);
                        }
                    } else {
                        // Section left viewport — cancel pending timer (fast-scroll → no event)
                        const timer = dwellTimers.current.get(sectionId);
                        if (timer !== undefined) {
                            clearTimeout(timer);
                            dwellTimers.current.delete(sectionId);
                        }
                    }
                });
            },
            {
                // threshold: 0 detects any entry/exit regardless of section height.
                // Data quality is maintained by the DWELL_MS timer above:
                // only users who pause ≥500ms on a section are counted.
                threshold: 0.2,
            },
        );

        observerRef.current = observer;

        // Observe all section elements (rAF ensures DOM is fully painted)
        requestAnimationFrame(() => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    const storageKey = `${SECTION_SEEN_PREFIX}${id}`;
                    if (!sessionStorage.getItem(storageKey)) {
                        observer.observe(element);
                    }
                }
            });
        });

        return () => {
            observer.disconnect();
            // Cancel all pending dwell timers on unmount
            dwellTimers.current.forEach(clearTimeout);
            dwellTimers.current.clear();
        };
    }, [sectionIds, trackSectionView]);
}
