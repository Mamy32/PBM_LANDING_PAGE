import {
    BookOpen,
    Check,
    Gift,
    PlayCircle,
    ShieldCheck,
    Sparkles,
    Table,
} from 'lucide-react';

import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const valueItems = [
    { icon: PlayCircle, label: '40+ Video Tutorial', value: 'Rp 500.000' },
    {
        icon: Table,
        label: '80+ Sheet Spreadsheet Template',
        value: 'Rp 300.000',
    },
    { icon: BookOpen, label: '70+ Halaman E-book PDF', value: 'Rp 200.000' },
    { icon: Gift, label: 'BONUS: 13 Strategi Penjualan', value: 'Rp 150.000' },
];

const includedFeatures = [
    'Akses seumur hidup ke semua materi',
    'Update materi gratis selamanya',
    'Bisa diakses kapan saja, di mana saja',
    'Diskusi langsung via DM Instagram & Email',
    'Garansi uang kembali 100%',
];

export default function Pricing() {
    const { trackCTA, trackConversion } = useAnalytics();

    return (
        <section
            id="harga"
            className="relative overflow-hidden bg-gradient-to-b from-lp-blue-900 via-[#0b1840] to-lp-blue-900 py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-lp-yellow-400/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-lp-yellow-400/30 bg-lp-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-300">
                        <Sparkles className="h-3.5 w-3.5" />
                        Select Your Package
                    </span>
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Pilih paket yang sesuai{' '}
                        <span className="text-lp-yellow-400">
                            target bisnis kamu
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-white/65 sm:text-lg">
                        Investasi sekali, manfaat selamanya.
                    </p>
                </div>

                {/* Premium pricing card */}
                <div className="relative mt-14 sm:mt-16">
                    {/* Glow */}
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-lp-yellow-400/50 via-lp-yellow-300/30 to-lp-yellow-400/50 opacity-60 blur-xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-lp-yellow-400/40 bg-lp-blue-900 shadow-2xl shadow-black/40">
                        {/* Featured ribbon */}
                        <div className="absolute right-0 top-0">
                            <div className="rounded-bl-2xl bg-lp-yellow-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-lp-blue-900">
                                Most Popular
                            </div>
                        </div>

                        <div className="border-b border-white/10 p-7 sm:p-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-400">
                                Paket Starter Bisnis
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                Panduan 23 Langkah Bangun Bisnis Lokal
                            </h3>
                            <p className="mt-2 text-sm text-white/60">
                                Untuk first-timers yang serius mulai bisnis dari
                                nol.
                            </p>

                            <ul className="mt-7 space-y-3.5">
                                {valueItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className="flex items-center justify-between gap-4"
                                    >
                                        <span className="flex min-w-0 items-center gap-3">
                                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-lp-yellow-400/15 ring-1 ring-lp-yellow-400/30">
                                                <item.icon className="h-3.5 w-3.5 text-lp-yellow-400" />
                                            </span>
                                            <span className="truncate text-sm text-white/85 sm:text-base">
                                                {item.label}
                                            </span>
                                        </span>
                                        <span className="shrink-0 text-sm text-white/40 line-through">
                                            {item.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 space-y-2.5 border-t border-dashed border-white/10 pt-6">
                                {includedFeatures.map((f) => (
                                    <p
                                        key={f}
                                        className="flex items-center gap-2.5 text-sm text-white/70"
                                    >
                                        <Check className="h-4 w-4 shrink-0 text-lp-yellow-400" />
                                        {f}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-7 flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                                <span className="text-sm font-medium text-white/60">
                                    Total Nilai
                                </span>
                                <span className="text-base font-semibold text-white/40 line-through">
                                    Rp 1.150.000
                                </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="relative bg-gradient-to-br from-lp-yellow-400 via-lp-yellow-300 to-lp-yellow-400 p-7 text-center sm:p-10">
                            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                            <div className="relative">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lp-blue-900/70">
                                    Kamu cukup investasi
                                </p>
                                <div className="mt-3 flex items-baseline justify-center gap-3">
                                    <span className="text-lg font-medium text-lp-blue-900/50 line-through sm:text-xl">
                                        Rp 299.000
                                    </span>
                                    <span className="rounded-full bg-lp-blue-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-lp-yellow-400">
                                        Hemat 67%
                                    </span>
                                </div>
                                <p className="mt-2 text-5xl font-bold tracking-tight text-lp-blue-900 sm:text-6xl">
                                    Rp 97.000
                                </p>
                                <p className="mt-3 text-sm font-medium text-lp-blue-900/80">
                                    Sekali bayar · Akses selamanya
                                </p>
                                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-lp-blue-900/15 px-3 py-1 text-xs font-semibold text-lp-blue-900">
                                    ⏳ Harga khusus bulan ini
                                </p>

                                <div className="mt-8">
                                    <CtaButton
                                        id="pricing-cta"
                                        variant="dark"
                                        context="light"
                                        size="large"
                                        text="Ya, Saya Mau Panduannya!"
                                        href="https://damanhuri.com/pembayaran"
                                        onClick={() => {
                                            const eventId = generateEventId();

                                            if (typeof window.fbq === 'function') {
                                                window.fbq(
                                                    'track',
                                                    'AddToCart',
                                                    {
                                                        content_name: 'Panduan 23 Langkah Bangun Bisnis Lokal',
                                                        content_type: 'product',
                                                        value: 97000,
                                                        currency: 'IDR',
                                                    },
                                                    { eventID: eventId },
                                                );
                                            }

                                            trackCTA(
                                                'pricing_starter',
                                                'Ya, Saya Mau Panduannya!',
                                                'https://damanhuri.com/pembayaran',
                                                'AddToCart',
                                                eventId,
                                            );

                                            trackConversion('cta_lead', {
                                                source: 'pricing_starter',
                                            });
                                        }}
                                    />
                                </div>

                                <p className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-lp-blue-900/70">
                                    <ShieldCheck className="h-4 w-4" />
                                    Dilindungi garansi uang kembali 100%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
