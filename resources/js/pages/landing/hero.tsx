import { Sparkles, Star } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

import CtaButton from './cta-button';

const trustedLogos = [
    'Tokopedia',
    'Gojek',
    'Shopee',
    'Bukalapak',
    'Traveloka',
    'Blibli',
];

export default function Hero() {
    const { trackCTA } = useAnalytics();

    const handleCtaClick = () => {
        trackCTA(
            'hero_primary',
            'Dapatkan Panduannya Sekarang',
            '#harga',
        );
    };

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-gradient-to-b from-lp-blue-900 via-lp-blue-900 to-[#0b1840] pt-28 pb-20 sm:pt-36 sm:pb-28"
        >
            {/* Premium ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-lp-yellow-400/10 blur-[120px]" />
                <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-lp-blue-500/20 blur-[100px]" />
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)',
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Left: Copy */}
                    <div className="text-center lg:col-span-7 lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-lp-yellow-400/30 bg-lp-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-300">
                            <Sparkles className="h-3.5 w-3.5" />
                            Join 7.000+ Members
                        </span>

                        <h1 className="mt-6 text-[2.25rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
                            Cara Paling Masuk Akal Bangun{' '}
                            <span className="relative inline-block text-lp-yellow-400">
                                Bisnis Pertama
                                <span className="absolute inset-x-0 -bottom-1.5 h-1 rounded-full bg-lp-yellow-400/40" />
                            </span>{' '}
                            Tanpa Takut Salah Langkah
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
                            Bukan kelas motivasi. Ini panduan step-by-step bangun
                            bisnis yang bisa kamu praktekkan langsung dari nol
                            sampai punya ratusan pembeli.
                        </p>

                        <div className="mt-9 flex justify-center lg:justify-start">
                            <CtaButton
                                id="hero-cta"
                                onClick={handleCtaClick}
                                text="Saya Mau Mulai Bisnis"
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
                                        className="h-9 w-9 rounded-full border-2 border-lp-blue-900 bg-gradient-to-br from-lp-yellow-300 to-lp-blue-500"
                                    />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-lp-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-xs text-white/60">
                                    Rating 4.9 dari ribuan alumni
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Instructor portrait card */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-sm lg:max-w-none">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-lp-yellow-400/30 via-lp-blue-500/20 to-transparent blur-3xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-2 shadow-2xl shadow-black/40 backdrop-blur-sm">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-lp-blue-800 to-lp-blue-900">
                                    <img
                                        src="/storage/mentor/mentor.jpeg"
                                        alt="Mohammad Rashid Damanhuri"
                                        className="h-full w-full object-cover"
                                        loading="eager"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-lp-blue-900 via-lp-blue-900/70 to-transparent" />

                                    {/* Caption */}
                                    <div className="absolute inset-x-4 bottom-4">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lp-yellow-400">
                                            Mentor
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-white">
                                            Mohammad Rashid D.
                                        </p>
                                        <p className="text-xs text-white/70">
                                            12+ tahun bangun bisnis lokal
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating stat badges */}
                            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-lp-blue-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                    Materi
                                </p>
                                <p className="text-xl font-bold text-white">
                                    75<span className="text-lp-yellow-400">+</span>
                                </p>
                            </div>
                            <div className="absolute -right-4 bottom-12 hidden rounded-2xl border border-white/10 bg-lp-blue-900/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
                                    Alumni
                                </p>
                                <p className="text-xl font-bold text-white">
                                    7K<span className="text-lp-yellow-400">+</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted by row */}
                <div className="mt-20 sm:mt-24">
                    <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                        Dipercaya oleh profesional dari
                    </p>
                    <div className="mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-5 sm:grid-cols-6">
                        {trustedLogos.map((name) => (
                            <div
                                key={name}
                                className="flex items-center justify-center text-center text-sm font-semibold tracking-wide text-white/40 transition-colors duration-200 hover:text-white/70 sm:text-base"
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
