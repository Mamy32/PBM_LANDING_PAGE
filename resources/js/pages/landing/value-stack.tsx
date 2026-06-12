import { BookOpen, Gift, PlayCircle, Sparkles, Table } from 'lucide-react';

import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const deliverables = [
    {
        icon: PlayCircle,
        title: '40+ Video Tutorial',
        description:
            'Video langkah demi langkah yang menjelaskan setiap tahap. Bahasa sederhana, langsung praktik.',
        value: 'Rp 500.000',
        image: '/storage/thumb/video.webp',
    },
    {
        icon: Table,
        title: '80+ Sheet Template',
        description:
            'Template Google Spreadsheet siap isi: riset pasar, strategi komunikasi, sampai cara jualan.',
        value: 'Rp 300.000',
        image: '/storage/thumb/spreadsheet.webp',
    },
    {
        icon: BookOpen,
        title: '70+ Halaman E-book',
        description:
            'Rangkuman lengkap semua materi dalam PDF yang bisa kamu baca dimana saja, kapan saja.',
        value: 'Rp 200.000',
        image: '/storage/thumb/ebook.webp',
    },
];

export default function ValueStack() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="materi"
            className="relative bg-lp-blue-900 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <Sparkles className="h-3.5 w-3.5 text-lp-yellow-400" />
                        Yang Kamu Dapatkan
                    </span>
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Premium offer untuk{' '}
                        <span className="text-lp-yellow-400">
                            bangun bisnis pertama kamu
                        </span>
                    </h2>
                    <p className="mt-5 text-base text-white/65 sm:text-lg">
                        Bukan cuma materi — kamu dapat seluruh sistem,
                        template, dan bonus yang dibutuhkan untuk eksekusi.
                    </p>
                </div>

                {/* Deliverables */}
                <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3">
                    {deliverables.map((item) => (
                        <div
                            key={item.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-lp-yellow-400/40 hover:shadow-2xl hover:shadow-black/30"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-lp-blue-900 via-lp-blue-900/30 to-transparent" />
                                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-lp-yellow-400 text-lp-blue-900 shadow-lg shadow-black/30 ring-1 ring-lp-yellow-300/50">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-lp-blue-900/80 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                                    Nilai {item.value}
                                </span>
                            </div>
                            <div className="flex grow flex-col p-6">
                                <h3 className="text-lg font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bonus card */}
                <div className="mt-6">
                    <div className="relative overflow-hidden rounded-2xl border border-lp-yellow-400/40 bg-gradient-to-r from-lp-yellow-400/15 via-lp-yellow-400/10 to-transparent p-6 sm:p-8">
                        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-lp-yellow-400/20 blur-3xl" />
                        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-lp-yellow-400 text-lp-blue-900 shadow-xl shadow-lp-yellow-400/30">
                                <Gift className="h-8 w-8" />
                            </div>
                            <div className="grow text-center sm:text-left">
                                <span className="inline-block rounded-full bg-lp-yellow-400 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-lp-blue-900">
                                    Bonus Eksklusif
                                </span>
                                <h3 className="mt-2 text-xl font-bold text-white">
                                    13 Strategi Penjualan (Video & Spreadsheet)
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-white/70">
                                    Kumpulan strategi penjualan yang terbukti
                                    efektif untuk bisnis pemula, lengkap dengan
                                    template implementasinya.
                                </p>
                            </div>
                            <div className="text-center sm:text-right">
                                <p className="text-xs uppercase tracking-wider text-white/50">
                                    Senilai
                                </p>
                                <p className="text-2xl font-bold text-lp-yellow-400">
                                    Rp 150.000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 sm:mt-16">
                    <CtaButton
                        id="value-cta"
                        text="Klaim Semuanya Sekarang"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'value_stack_section',
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
