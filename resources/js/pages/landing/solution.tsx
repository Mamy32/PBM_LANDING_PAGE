import { CheckCircle, Eye, Target, TrendingUp } from 'lucide-react';

import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const features = [
    {
        icon: Eye,
        title: 'Ubah Cara Atasan Ngeliat Lo',
        description:
            'Dari staff rajin jadi calon manajer. Jadi nama yang selalu muncul di pikiran atasan saat ada posisi strategis.',
    },
    {
        icon: Target,
        title: 'Jadi Kandidat Rebutan, Bukan Penunggu Giliran',
        description:
            'Belajar positioning yang bikin lo dicari, bukan nunggu giliran promosi yang gak jelas kapan datangnya.',
    },
    {
        icon: TrendingUp,
        title: 'Langsung Bisa Dipraktikkan',
        description:
            'Gak cuma teori. Setiap selesai satu BAB, ada tugas yang bisa langsung lo coba di kantor besok.',
    },
];

export default function Solution() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="solusi"
            className="relative overflow-hidden bg-gradient-to-b from-[#0A1A0F] via-[#0C1F13] to-[#0C1F13] py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-[#4ADE80]/8 blur-3xl" />
                <div className="absolute left-0 bottom-20 h-60 w-60 rounded-full bg-[#16A34A]/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                        Solution
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Disini Gua bakal{' '}
                        <span className="text-[#4ADE80]">
                            bongkar hacks karyawan top 1%
                        </span>{' '}
                        biar lo naik jadi strategic leader
                    </h2>
                    <p className="mt-5 text-base text-white/65 sm:text-lg">
                        Dan tembus gaji 100 juta pertama lo. Ini saatnya ubah arah karier lo.
                    </p>
                </div>

                {/* Transformation showcase */}
                <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-[#4ADE80]/20 bg-white/[0.03] p-6 sm:mt-16 sm:p-10">
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                        Apa yang Berubah
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                            <p className="text-xs font-bold uppercase tracking-wider text-red-400/80 mb-3">
                                Sebelum
                            </p>
                            {[
                                'Kerja keras tapi gak keliatan',
                                'Nunggu giliran promosi',
                                'Gaji stagnan bertahun-tahun',
                                'Gak tahu cara negotiate salary',
                            ].map((t) => (
                                <p key={t} className="flex items-start gap-2 text-sm text-white/55 py-1.5 border-b border-white/5 last:border-0">
                                    <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                                    {t}
                                </p>
                            ))}
                        </div>
                        <div className="rounded-2xl border border-[#4ADE80]/25 bg-[#4ADE80]/5 p-5">
                            <p className="text-xs font-bold uppercase tracking-wider text-[#4ADE80] mb-3">
                                Sesudah
                            </p>
                            {[
                                'Atasan langsung notice potensi lo',
                                'Jadi top-of-mind untuk promosi',
                                '2x salary dalam 3 tahun',
                                'Confident negotiate di atas meja',
                            ].map((t) => (
                                <p key={t} className="flex items-start gap-2 text-sm text-white/80 py-1.5 border-b border-white/5 last:border-0">
                                    <CheckCircle className="h-4 w-4 text-[#4ADE80] shrink-0 mt-0.5" />
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#4ADE80]/25 bg-[#4ADE80]/[0.07] p-4">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#4ADE80]" />
                        <p className="text-sm font-medium text-white/80">
                            Setiap modul punya tugas praktik yang bisa langsung lo coba di kantor setelah selesai belajar.
                        </p>
                    </div>
                </div>

                {/* 3 Features */}
                <div className="mt-16 grid gap-5 sm:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-[#4ADE80]/10"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4ADE80]/15 text-[#4ADE80] ring-1 ring-[#4ADE80]/30 transition-colors duration-300 group-hover:bg-[#4ADE80] group-hover:text-[#0C1F13]">
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
                                'Bongkar Hacks-nya Sekarang',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
