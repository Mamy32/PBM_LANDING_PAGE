import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
    return (
        <section
            id="garansi"
            className="relative overflow-hidden bg-lp-blue-900 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-lp-yellow-400/30 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-8 text-center sm:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-lp-yellow-400/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-lp-blue-500/30 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-lp-yellow-400 text-lp-blue-900 shadow-2xl shadow-lp-yellow-400/30 ring-4 ring-lp-yellow-400/20">
                            <ShieldCheck className="h-12 w-12" strokeWidth={2.2} />
                        </div>

                        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-lp-yellow-400/40 bg-lp-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-300">
                            Risk-Free Promise
                        </span>

                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            100% Garansi Uang Kembali
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Saya yakin sama kualitas panduan ini. Kalau setelah
                            kamu pelajari ternyata nggak sesuai ekspektasi, saya
                            kembalikan uangmu{' '}
                            <span className="font-semibold text-lp-yellow-400">
                                tanpa ribet, tanpa pertanyaan.
                            </span>
                        </p>

                        <div className="mt-8 inline-grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-lp-blue-900/40 p-4 backdrop-blur-sm sm:gap-8 sm:p-6">
                            {[
                                'Tanpa ribet',
                                'Tanpa pertanyaan',
                                'Proses cepat',
                            ].map((t) => (
                                <p
                                    key={t}
                                    className="text-xs font-semibold text-white/80 sm:text-sm"
                                >
                                    ✓ {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
