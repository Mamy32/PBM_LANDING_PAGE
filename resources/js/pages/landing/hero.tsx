import { Star } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
export default function Hero() {
    const { trackCTA } = useAnalytics();

    const handleCtaClick = () => {
        trackCTA('hero_primary', 'Saya Mau Naik Gaji', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#4A645A] via-[#06261A] to-[#000000]"
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-full w-[45%] bg-[#7AFF8A]/10 blur-[180px]" />
                <div className="absolute top-0 right-0 h-full w-[25%] bg-[#00FF66]/5 blur-[220px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                <div className="grid min-h-screen items-center gap-5 pt-10 md:gap-10 lg:grid-cols-2 lg:pt-10">
                    {/* LEFT SIDE */}
                    <div className="pt-10 pb-12 text-center lg:pt-0 lg:pb-0 lg:text-left">
                        {/* MEMBERS BADGE */}
                        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/40 px-4 py-2 text-center sm:mt-10">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-3.5 w-3.5 fill-[#FFD54A] text-[#FFD54A]"
                                    />
                                ))}
                            </div>

                            <span className="text-xs font-medium text-white sm:text-sm">
                                JOIN 1.000 MEMBERS
                            </span>

                            <img
                                src="/images/shaundju/testi08.webp"
                                alt="Members"
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src="/images/shaundju/testi02.webp"
                                alt="Members"
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src="/images/shaundju/testi04.webp"
                                alt="Members"
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* HEADLINE */}
                        <h1 className="mt-8 font-serif text-4xl leading-[1.05] text-white sm:text-5xl xl:text-6xl">
                            Cara Dapet Gaji
                            <br />
                            <span className="text-[#A8FF7E]">
                                Ratusan Juta/Bulan
                            </span>
                            <br />
                            Sebelum{' '}
                            <span className="text-[#A8FF7E]">Umur 30</span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-lg lg:text-base">
                            Capek <strong>networking & kerja keras</strong>{' '}
                            setiap hari tapi gaji gak naik-naik? Pelajari
                            strategi yang digunakan para top performer untuk
                            mempercepat kenaikan penghasilan.
                        </p>

                        {/* CTA */}
                        <div className="mt-10">
                            <button
                                onClick={handleCtaClick}
                                className="w-full cursor-pointer rounded-full border border-[#9FFF9F]/20 bg-gradient-to-b from-[#3E6652] to-[#244437] px-6 py-3 text-lg font-bold text-[#B8FF8D] shadow-[0_0_40px_rgba(120,255,120,0.15)] transition-all hover:scale-[1.02] sm:w-auto sm:px-10 sm:py-4 sm:text-2xl"
                            >
                                Saya Mau Naik Gaji
                            </button>
                        </div>

                        {/* BENEFITS */}
                        <div className="mt-6 flex flex-row flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white sm:mt-8 lg:flex-nowrap lg:gap-x-5 lg:text-xs">
                            <div className="flex items-center gap-1 whitespace-nowrap">
                                <svg
                                    className="h-3 w-3 shrink-0"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M2.5 7l3 3 6-6"
                                        stroke="#9DFF70"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                75+ Materi Strategi Naik Gaji
                            </div>
                            <div className="flex items-center gap-1 whitespace-nowrap">
                                <svg
                                    className="h-3 w-3 shrink-0"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M2.5 7l3 3 6-6"
                                        stroke="#9DFF70"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Lifetime Access
                            </div>
                            <div className="flex items-center gap-1 whitespace-nowrap">
                                <svg
                                    className="h-3 w-3 shrink-0"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                >
                                    <path
                                        d="M2.5 7l3 3 6-6"
                                        stroke="#9DFF70"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Join Top Performer Community
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center lg:order-last lg:justify-end">
                        <img
                            src="/images/shaundju/photo_header.webp"
                            alt="Shaun Djuhari"
                            loading="eager"
                            decoding="async"
                            className="w-full max-w-[320px] object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.5)] sm:max-w-[450px] lg:max-w-[700px]"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-white/70" />
        </section>
    );
}
