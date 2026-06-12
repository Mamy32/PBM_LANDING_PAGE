import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';
import { Star } from 'lucide-react';
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
            className="relative overflow-hidden bg-gradient-to-r from-[#4A645A] via-[#06261A] to-[#000000] min-h-screen"
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-full w-[45%] bg-[#7AFF8A]/10 blur-[180px]" />
                <div className="absolute right-0 top-0 h-full w-[25%] bg-[#00FF66]/5 blur-[220px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                <div className="grid min-h-screen items-center lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="pt-20 lg:pt-0">

                        {/* LOGO */}
                        <img
                            src="/images/shaundju/logo_header.png"
                            alt="Shaundju Academy"
                            className="h-16 w-auto"
                        />

                        {/* MEMBERS BADGE */}
                        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/40 px-5 py-2">
                            <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="h-3.5 w-3.5 fill-[#FFD54A] text-[#FFD54A]"
                                />
                            ))}
                        </div>

                            <span className="text-sm font-medium text-white">
                                JOIN 1.000 MEMBERS
                            </span>

                            <img
                                src="/images/shaundju/testi08.png"
                                alt="Members"
                                className="h-8 w-auto"
                            />
                            <img
                                src="/images/shaundju/testi02.png"
                                alt="Members"
                                className="h-8 w-auto"
                            />
                            <img
                                src="/images/shaundju/testi04.png"
                                alt="Members"
                                className="h-8 w-auto"
                            />
                        </div>

                        {/* HEADLINE */}
                        <h1 className="mt-10 font-serif text-[50px] leading-[1.05] text-white lg:text-[78px]">
                            Cara Dapet Gaji
                            <br />
                            <span className="text-[#A8FF7E]">
                                Ratusan Juta/Bulan
                            </span>
                            <br />
                            Sebelum <span className="text-[#A8FF7E]">Umur 30</span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85">
                            Capek <strong>networking & kerja keras</strong> setiap hari
                            tapi gaji gak naik-naik? Pelajari strategi yang digunakan
                            para top performer untuk mempercepat kenaikan penghasilan.
                        </p>

                        {/* CTA */}
                        <div className="mt-10">
                            <button
                                onClick={handleCtaClick}
                                className="
                                rounded-full
                                px-10
                                py-4
                                text-3xl
                                font-bold
                                text-[#B8FF8D]
                                bg-gradient-to-b
                                from-[#3E6652]
                                to-[#244437]
                                border
                                border-[#9FFF9F]/20
                                shadow-[0_0_40px_rgba(120,255,120,0.15)]
                                transition-all
                                hover:scale-[1.02]
                            "
                            >
                                Saya Mau Naik Gaji
                            </button>
                        </div>

                        {/* BENEFITS */}
                        <div className="mt-10 flex flex-wrap gap-6 text-sm text-white">
                            <div>✓ 75+ Materi Strategi Naik Gaji</div>
                            <div>✓ Lifetime Access</div>
                            <div>✓ Join Top Performer Community</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <img
                            src="/images/shaundju/photo_header.png"
                            alt="Shaun Djuhari"
                            className="
                                w-full
                                max-w-[700px]
                                object-contain
                                drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]
                            "
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/70" />
        </section>
    );
}