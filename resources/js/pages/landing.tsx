import { Head } from '@inertiajs/react';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import { useDwellTime } from '@/hooks/use-dwell-time';
import { useScrollTracking } from '@/hooks/use-scroll-tracking';
import Faq from './landing/faq';
import Footer from './landing/footer';
import Guarantee from './landing/guarantee';
import Hero from './landing/hero';
import Instructor from './landing/instructor';
import Navbar from './landing/navbar';
import Pricing from './landing/pricing';
import Problem from './landing/problem';
import Solution from './landing/solution';
import Testimonials from './landing/testimonials';
import ValueStack from './landing/value-stack';
import SuccessStory from './landing/success-story';

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

    // Track page visit on mount
    useEffect(() => {
        trackVisit();
    }, [trackVisit]);

    return (
        <>
            <Head>
                <title>
                    Cara Dapet Gaji Ratusan Juta/Bulan Sebelum Umur 30 — Shaundju Academy
                </title>
                <meta
                    name="description"
                    content="Pelajari strategi yang digunakan para top performer untuk mempercepat kenaikan penghasilan. 75+ materi, lifetime access, komunitas privat. Dipercaya 1.000+ professionals."
                />
            </Head>

            <div className="min-h-screen bg-[#0C1F13] text-white antialiased selection:bg-[#4ADE80] selection:text-[#0C1F13]">
                <Navbar />
                <Hero />
                <SuccessStory />
                <Problem />
                <Solution />
                <ValueStack />
                <Testimonials />
                <Instructor />
                <Pricing />
                <Guarantee />
                <Faq />
                <Footer />
            </div>
        </>
    );
}
