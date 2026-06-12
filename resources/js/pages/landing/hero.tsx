import { Sparkles, Star, TrendingUp } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

import CtaButton from './cta-button';

const trustedLogos = [
    'A.T. Kearney',
    'Bain & Company',
    'Shopee',
    'alfamart',
    'BANK BRI',
    'Grab',
];

export default function Hero() {
    const { trackCTA } = useAnalytics();

    const handleCtaClick = () => {
        trackCTA(
            'hero_primary',
            'Saya Mau Naik Gaji',
            '#harga',
        );
    };

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-gradient-to-b from-[#0C1F13] via-[#0F2618] to-[#0A1A0F] pt-28 pb-20 sm:pt-36 sm:pb-28"
        >
            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#4ADE80]/8 blur-[140px]" />
                <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-[#16A34A]/15 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, rgba(74,222,128,0.8) 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Left: Copy */}
                    <div className="text-center lg:col-span-7 lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                            <Sparkles className="h-3.5 w-3.5" />
                            Join 1.000 Members
                        </span>

                        <h1 className="mt-6 text-[2.25rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
                            Cara Dapet Gaji{' '}
                            <span className="relative inline-block text-[#4ADE80]">
                                Ratusan Juta/Bulan
                                <span className="absolute inset-x-0 -bottom-1.5 h-1 rounded-full bg-[#4ADE80]/40" />
                            </span>{' '}
                            Sebelum Umur 30
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
                            Capek networking &amp; kerja keras setiap hari tapi gaji gak naik-naik? Pelajari strategi yang digunakan para top performer untuk mempercepat kenaikan penghasilan.
                        </p>

                        <div className="mt-9 flex justify-center lg:justify-start">
                            <CtaButton
                                id="hero-cta"
                                onClick={handleCtaClick}
                                text="Saya Mau Naik Gaji"
                                size="large"
                                context="dark"
                            />
                        </div>

                        {/* Social proof rating */}
                        <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-9 w-9 rounded-full border-2 border-[#0C1F13] bg-gradient-to-br from-[#4ADE80] to-[#16A34A]"
                                    />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-[#4ADE80]">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-xs text-white/60">
                                    Dipercaya 1.000+ professionals
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Instructor portrait card */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-sm lg:max-w-none">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#4ADE80]/25 via-[#16A34A]/15 to-transparent blur-3xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-[#4ADE80]/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 shadow-2xl shadow-black/50 backdrop-blur-sm">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1A3A22] to-[#0C1F13]">
                                    <img
                                        src="/images/shaundju/shaundju-02.png"
                                        alt="Shaun Djuhari"
                                        className="h-full w-full object-cover"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0C1F13] via-[#0C1F13]/70 to-transparent" />

                                    {/* Caption */}
                                    <div className="absolute inset-x-4 bottom-4">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                                            Mentor
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-white">
                                            Shaun Djuhari
                                        </p>
                                        <p className="text-xs text-white/70">
                                            Gaji 100 Juta/bulan di usia 25
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stat badges */}
                            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-[#0C1F13]/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                    Materi
                                </p>
                                <p className="text-xl font-bold text-white">
                                    75<span className="text-[#4ADE80]">+</span>
                                </p>
                            </div>
                            <div className="absolute -right-4 bottom-12 hidden rounded-2xl border border-[#4ADE80]/20 bg-[#0C1F13]/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                                <div className="flex items-center gap-1.5">
                                    <TrendingUp className="h-4 w-4 text-[#4ADE80]" />
                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                        Gaji
                                    </p>
                                </div>
                                <p className="text-xl font-bold text-white">
                                    2x<span className="text-[#4ADE80]"> in 3Y</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted by row */}
                <div className="mt-20 sm:mt-24">
                    <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                        Dipercaya oleh professional dari
                    </p>
                    <div className="mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-5 sm:grid-cols-6">
                        {trustedLogos.map((name) => (
                            <div
                                key={name}
                                className="flex items-center justify-center text-center text-sm font-semibold tracking-wide text-white/35 transition-colors duration-200 hover:text-white/65 sm:text-base"
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
