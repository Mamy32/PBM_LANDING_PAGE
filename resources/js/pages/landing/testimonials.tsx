import { ChevronLeft, ChevronRight, Quote, Users, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const gridImages = Array.from({ length: 4 }, (_, i) => ({
    id: `grid-${i + 1}`,
    src: `/storage/testimoni/testi${i + 1}.webp`,
    alt: `Testimoni pelanggan ${i + 1}`,
}));

const carouselImages = Array.from({ length: 8 }, (_, i) => ({
    id: `carousel-${i + 1}`,
    src: `/storage/testimoni/testi${i + 5}.webp`,
    alt: `Testimoni pelanggan ${i + 5}`,
}));

const allImages = [...gridImages, ...carouselImages];

const quoteTestimonials = [
    {
        name: 'Harriet',
        role: 'ex-Singapore Management Consultant',
        quote: 'I learned a lot from Shaun\'s training — especially cara berpikir kritis + framework buat solve issues. Kepake pas gue handle salah satu project B2B terbesar Grab di GrabFood.',
    },
    {
        name: 'Thomas',
        role: 'INSEAD MBA Candidate',
        quote: "Shaun's introduction to framework really helped me because I was never taught that in non-business major, especially at a non-target Indo school.",
    },
    {
        name: 'Vanessa',
        role: 'Graduating Senior, Oxford University',
        quote: 'Having a clear starting point of the types of approach I was able to use was most helpful — jadi kebayang the different options we have to best present ourselves.',
    },
];

function Lightbox({
    images,
    currentIndex,
    onClose,
    onNavigate,
}: {
    images: typeof allImages;
    currentIndex: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}) {
    const touchStartX = useRef(0);
    const touchDeltaX = useRef(0);
    const [dragOffset, setDragOffset] = useState(0);
    const isDragging = useRef(false);

    const goNext = useCallback(() => {
        onNavigate((currentIndex + 1) % images.length);
    }, [currentIndex, images.length, onNavigate]);

    const goPrev = useCallback(() => {
        onNavigate((currentIndex - 1 + images.length) % images.length);
    }, [currentIndex, images.length, onNavigate]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }

            if (e.key === 'ArrowRight') {
                goNext();
            }

            if (e.key === 'ArrowLeft') {
                goPrev();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, goNext, goPrev]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        isDragging.current = true;
        setDragOffset(0);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) {
            return;
        }

        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
        setDragOffset(touchDeltaX.current);
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        const threshold = 60;

        if (touchDeltaX.current < -threshold) {
            goNext();
        } else if (touchDeltaX.current > threshold) {
            goPrev();
        }

        touchDeltaX.current = 0;
        setDragOffset(0);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                aria-label="Tutup"
            >
                <X className="h-6 w-6" />
            </button>

            <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80">
                {currentIndex + 1} / {images.length}
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                }}
                className="absolute left-2 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4 sm:p-3"
                aria-label="Sebelumnya"
            >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                }}
                className="absolute right-2 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4 sm:p-3"
                aria-label="Berikutnya"
            >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div
                className="flex max-h-[85vh] w-full max-w-lg items-center justify-center px-14 sm:px-20"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-h-[85vh] w-full rounded-2xl object-contain shadow-2xl transition-transform duration-200"
                    style={{
                        transform: `translateX(${dragOffset}px)`,
                    }}
                    draggable={false}
                />
            </div>
        </div>
    );
}

export default function Testimonials() {
    const { trackCTA } = useAnalytics();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (globalIndex: number) => {
        setLightboxIndex(globalIndex);
    };

    return (
        <section
            id="testimoni"
            className="relative overflow-hidden bg-gradient-to-b from-[#0C1F13] via-[#0A1A0F] to-[#0C1F13] py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#4ADE80]/8 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                        <Users className="h-3.5 w-3.5" />
                        Apa Kata Alumni?
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Mereka udah paham aturan mainnya.{' '}
                        <span className="text-[#4ADE80]">
                            Sekarang giliran lo.
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-white/65 sm:text-lg">
                        Para alumni Shaundju Academy sudah membuktikannya di perusahaan top dunia.
                    </p>
                </div>

                {/* Quote testimonials */}
                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                    {quoteTestimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#4ADE80]/25"
                        >
                            <Quote className="h-6 w-6 text-[#4ADE80]/60 mb-4" />
                            <p className="text-sm leading-relaxed text-white/75 italic">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="mt-5 pt-4 border-t border-white/10">
                                <p className="text-sm font-bold text-white">{t.name}</p>
                                <p className="text-xs text-white/50 mt-0.5">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats strip */}
                <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:gap-8">
                    {[
                        { v: '1.000+', l: 'Members' },
                        { v: '4.9/5', l: 'Rating' },
                        { v: 'Top 1%', l: 'Karier alumni' },
                    ].map((s) => (
                        <div key={s.l} className="text-center">
                            <p className="text-2xl font-extrabold text-[#4ADE80] sm:text-3xl">
                                {s.v}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-wider text-white/50 sm:text-sm">
                                {s.l}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 2x2 Image Grid */}
                <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4">
                    {gridImages.map((img, i) => (
                        <button
                            key={img.id}
                            type="button"
                            onClick={() => openLightbox(i)}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.02] hover:border-[#4ADE80]/35"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F13]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <Quote className="absolute right-3 top-3 h-5 w-5 text-[#4ADE80]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="mt-6 overflow-hidden sm:mt-8">
                    <div className="animate-carousel flex gap-3 sm:gap-4">
                        {[...carouselImages, ...carouselImages].map(
                            (img, index) => {
                                const globalIndex =
                                    gridImages.length +
                                    (index % carouselImages.length);

                                return (
                                    <button
                                        key={`${img.id}-${index}`}
                                        type="button"
                                        onClick={() =>
                                            openLightbox(globalIndex)
                                        }
                                        className="aspect-square w-32 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-md shadow-black/30 transition-transform duration-300 hover:scale-[1.03] hover:border-[#4ADE80]/35 sm:w-40 md:w-48 lg:w-52"
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                );
                            },
                        )}
                    </div>
                </div>

                <div className="mt-14 sm:mt-16">
                    <CtaButton
                        id="testimonial-cta"
                        text="Saya Juga Mau Hasil Seperti Mereka"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'testimonials_section',
                                'Saya Juga Mau Hasil Seperti Mereka',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={allImages}
                    currentIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                    onNavigate={setLightboxIndex}
                />
            )}
        </section>
    );
}
