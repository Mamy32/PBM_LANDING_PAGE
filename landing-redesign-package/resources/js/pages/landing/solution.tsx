import { CheckCircle, MessageCircle, Table, TrendingUp } from 'lucide-react';

import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const steps = [
    { number: '01', label: 'Tentukan Produk' },
    { number: '02', label: 'Research & Development' },
    { number: '03', label: 'Buat SOP' },
    { number: '...', label: 'Eksekusi setiap langkah' },
    { number: '23', label: 'Kelola Loyal Customer' },
];

const features = [
    {
        icon: Table,
        title: 'Langsung Praktek',
        description:
            'Setiap langkah punya spreadsheet template siap pakai. Kamu tinggal isi, rencana bisnismu langsung jadi.',
    },
    {
        icon: MessageCircle,
        title: 'Bahasa Manusia',
        description:
            'Nggak pakai istilah ribet. Semua dijelaskan pakai bahasa sehari-hari, kayak ngobrol sama temen.',
    },
    {
        icon: TrendingUp,
        title: 'Sampai Punya Pembeli',
        description:
            'Fokusnya bukan teori. Dirancang supaya kamu benar-benar jalankan bisnis dan dapat pembeli pertama.',
    },
];

export default function Solution() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="solusi"
            className="relative overflow-hidden bg-gradient-to-b from-[#0b1840] via-lp-blue-900 to-lp-blue-900 py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-lp-yellow-400/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-lp-yellow-400/30 bg-lp-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-300">
                        Solusinya
                    </span>
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Saatnya ubah arah bisnis kamu dengan{' '}
                        <span className="text-lp-yellow-400">
                            Blueprint 23 Langkah
                        </span>
                    </h2>
                    <p className="mt-5 text-base text-white/65 sm:text-lg">
                        23 panduan bisnis lengkap yang membimbingmu step-by-step
                        dari &quot;bingung mulai dari mana&quot; sampai punya
                        bisnis yang menghasilkan jutaan per bulan.
                    </p>
                </div>

                {/* Step path */}
                <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:mt-16 sm:p-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-400">
                        The Roadmap
                    </p>
                    <div className="flex flex-col gap-0">
                        {steps.map((step, index) => {
                            const isLast = step.number === '23';
                            const isDots = step.number === '...';
                            return (
                                <div
                                    key={step.number}
                                    className="flex items-stretch gap-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-1 ${
                                                isLast
                                                    ? 'bg-lp-yellow-400 text-lp-blue-900 ring-lp-yellow-300/50 shadow-lg shadow-lp-yellow-400/30'
                                                    : isDots
                                                      ? 'border border-dashed border-white/30 bg-transparent text-white/40 ring-0'
                                                      : 'bg-white/10 text-white ring-white/15'
                                            }`}
                                        >
                                            {isDots ? '···' : step.number}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="my-1 w-px grow bg-gradient-to-b from-white/20 to-white/5" />
                                        )}
                                    </div>
                                    <div className="pb-6">
                                        <p
                                            className={`pt-2.5 text-sm font-semibold sm:text-base ${
                                                isLast
                                                    ? 'text-lp-yellow-400'
                                                    : 'text-white'
                                            }`}
                                        >
                                            {step.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-2 flex items-start gap-3 rounded-2xl border border-lp-yellow-400/30 bg-lp-yellow-400/[0.08] p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-lp-yellow-400" />
                        <p className="text-sm font-medium text-white/80">
                            Setiap langkah punya video tutorial + spreadsheet
                            template yang siap kamu isi.
                        </p>
                    </div>
                </div>

                {/* 3 Features */}
                <div className="mt-16 grid gap-5 sm:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lp-yellow-400/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-lp-yellow-400/10"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lp-yellow-400/15 text-lp-yellow-400 ring-1 ring-lp-yellow-400/30 transition-colors duration-300 group-hover:bg-lp-yellow-400 group-hover:text-lp-blue-900">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/60">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 sm:mt-16">
                    <CtaButton
                        id="solution-cta"
                        text="Bongkar Hacks-nya Sekarang"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'solution_section',
                                'Dapatkan Panduannya Sekarang',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
