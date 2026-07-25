import { Head } from '@inertiajs/react';
import Navbar from './landing/navbar';
import Hero from './landing/hero';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import { useDwellTime } from '@/hooks/use-dwell-time';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';
import { useSectionTracking } from '@/hooks/use-section-tracking';


const SuccessStory = lazy(() => import('./landing/success-story'));
const Solution = lazy(() => import('./landing/solution'));
const Problem = lazy(() => import('./landing/problem'));
const PracticalBenefits = lazy(() => import('./landing/practical-benefits'));
const Testimonials = lazy(() => import('./landing/testimonials'));
const Instructor = lazy(() => import('./landing/instructor'));
const MediaFeatures = lazy(() => import('./landing/media-features'));
const Curriculum = lazy(() => import('./landing/curriculum'));
const Pricing = lazy(() => import('./landing/pricing'));
const VideoTeaser = lazy(() => import('./landing/video-teaser'));
const Faq = lazy(() => import('./landing/faq'));
const CompanyLogos = lazy(() => import('./landing/company-logo'));
const Footer = lazy(() => import('./landing/footer'));
export default function Landing() {
    const { trackVisit } = useAnalytics();

    // Force light mode on mount, restore on unmount
    useEffect(() => {
        const htmlEl = document.documentElement;
        const wasDark = htmlEl.classList.contains('dark');

        htmlEl.classList.remove('dark');

        return () => {
            if (wasDark) {
                htmlEl.classList.add('dark');
            }
        };
    }, []);

    // Initialize tracking hooks
    useScrollTracking();
    useDwellTime();

    useSectionTracking();

    // Track page visit on mount
    useEffect(() => {
        trackVisit();
    }, [trackVisit]);

    return (
        <>
            <Head>
                <title>
                    Cara Dapet Gaji Ratusan Juta/Bulan Sebelum Umur 30 —
                    Shaundju Academy
                </title>
                <meta
                    name="description"
                    content="Pelajari strategi yang digunakan para top performer untuk mempercepat kenaikan penghasilan. 75+ materi, lifetime access, komunitas privat. Dipercaya 1.000+ professionals."
                />
            </Head>

            <div className="min-h-screen bg-[#0C1F13] text-white antialiased selection:bg-[#4ADE80] selection:text-[#0C1F13]">
            <Navbar />
            <Hero />

            <Suspense fallback={null}>
                <CompanyLogos />
                <Problem />
                <PracticalBenefits />
                <SuccessStory />
                <Solution />
                <Testimonials />
                <MediaFeatures />
                <Pricing />
                <VideoTeaser />
                <Faq />
                <Footer />
            </Suspense>
            </div>
        </>
    );
}
