import { Star } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
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

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                  <div className="grid min-h-screen items-center gap-10 pt-10 lg:grid-cols-2 lg:pt-25">

                    {/* LEFT SIDE */}
                    <div className="pb-12 pt-10 text-center lg:pb-0 lg:pt-0 lg:text-left">

                        {/* LOGO */}
                        <img
                            src="/images/shaundju/logo_header.png"
                            alt="Shaundju Academy"
                            className="mx-auto h-16 w-auto sm:h-20 lg:mx-0 lg:h-16"
                        />

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

                            <span className="text-xs sm:text-sm font-medium text-white">
                                JOIN 1.000 MEMBERS
                            </span>

                            <img
                                src="/images/shaundju/testi08.png"
                                alt="Members"
                                className="h-6 sm:h-8 w-auto"
                            />
                            <img
                                src="/images/shaundju/testi02.png"
                                alt="Members"
                                className="h-6 sm:h-8 w-auto"
                            />
                            <img
                                src="/images/shaundju/testi04.png"
                                alt="Members"
                                className="h-6 sm:h-8 w-auto"
                            />
                        </div>

                        {/* HEADLINE */}
                        <h1 className="mt-8 font-serif text-[42px] leading-[1.05] text-white sm:text-[56px] lg:text-[78px]">
                            Cara Dapet Gaji
                            <br />
                            <span className="text-[#A8FF7E]">
                                Ratusan Juta/Bulan
                            </span>
                            <br />
                            Sebelum <span className="text-[#A8FF7E]">Umur 30</span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                            Capek <strong>networking & kerja keras</strong> setiap hari
                            tapi gaji gak naik-naik? Pelajari strategi yang digunakan
                            para top performer untuk mempercepat kenaikan penghasilan.
                        </p>

                        {/* CTA */}
                        <div className="mt-10">
                            <button
                                onClick={handleCtaClick}
                                className="
w-full
sm:w-auto
rounded-full
px-6
sm:px-10
py-3
sm:py-4
text-lg
sm:text-2xl
lg:text-3xl
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
                        <div className="mt-8 flex flex-col gap-3 text-sm text-white sm:flex-row sm:flex-wrap sm:gap-6">
                            <div>✓ 75+ Materi Strategi Naik Gaji</div>
                            <div>✓ Lifetime Access</div>
                            <div>✓ Join Top Performer Community</div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center lg:order-last lg:justify-end">

                        <img
                            src="/images/shaundju/photo_header.png"
                            alt="Shaun Djuhari"
                            className="
w-full
max-w-[320px]
sm:max-w-[450px]
lg:max-w-[700px]
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