import {
    Check,
    MessageSquare,
    ShieldCheck,
    Sparkles,
    Users,
    Video,
} from 'lucide-react';

import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const firstJobberFeatures = [
    { icon: Video, label: '4 Modules (Modul 1, 2, 3, 4)' },
    { icon: Video, label: 'Akses Seumur Hidup Video Modul & Rekaman Live Session' },
    { icon: MessageSquare, label: 'Sesi Tanya Jawab via Komunitas Discord Privat' },
];

const managerFeatures = [
    { icon: Video, label: '5 Modules (Modul 1, 2, 3, 4, 5)' },
    { icon: Video, label: 'Akses Seumur Hidup Video Modul & Rekaman Live Session' },
    { icon: MessageSquare, label: 'Sesi Tanya Jawab via Komunitas Discord Privat' },
    { icon: Users, label: 'Review PR Personal Langsung oleh Shaun Dju' },
];

export default function Pricing() {
    const { trackCTA, trackConversion } = useAnalytics();

    return (
        <section
            id="harga"
            className="relative overflow-hidden bg-gradient-to-b from-[#0C1F13] via-[#0A1A0F] to-[#0C1F13] py-20 sm:py-28"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#4ADE80]/6 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                        <Sparkles className="h-3.5 w-3.5" />
                        Select Your Package
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Pilih Paket yang Sesuai dengan{' '}
                        <span className="text-[#4ADE80]">
                            Target Karier Lo Saat Ini
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-white/65 sm:text-lg">
                        Investasi terbaik yang bisa lo lakukan untuk karier lo.
                    </p>
                </div>

                {/* Two pricing cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16">

                    {/* First Jobbers */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] shadow-xl shadow-black/30 flex flex-col">
                        <div className="border-b border-white/10 p-7 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                                First Jobbers
                            </p>
                            <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                                2x Salary in 3 Years
                            </h3>
                            <p className="mt-2 text-sm text-white/55">
                                Untuk fresh graduate &amp; early professional yang mau akselerasi karier dari awal.
                            </p>

                            <ul className="mt-6 space-y-3.5">
                                {firstJobberFeatures.map((item) => (
                                    <li
                                        key={item.label}
                                        className="flex items-start gap-3"
                                    >
                                        <Check className="h-4 w-4 shrink-0 text-[#4ADE80] mt-0.5" />
                                        <span className="text-sm text-white/80">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price */}
                        <div className="p-7 sm:p-8 mt-auto">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-base font-medium text-white/40 line-through">
                                    Rp 2.500.000
                                </span>
                                <span className="rounded-full bg-[#4ADE80]/15 border border-[#4ADE80]/30 px-2.5 py-0.5 text-[11px] font-bold text-[#4ADE80]">
                                    Hemat 22%
                                </span>
                            </div>
                            <p className="text-4xl font-extrabold tracking-tight text-white">
                                Rp 1.950.000
                            </p>
                            <p className="mt-2 text-sm text-white/50">
                                Sekali bayar · Akses selamanya
                            </p>
                            <div className="mt-6">
                                <button
                                    type="button"
                                    id="pricing-cta-first-jobber"
                                    onClick={() => {
                                        const eventId = generateEventId();

                                        if (typeof window.fbq === 'function') {
                                            window.fbq(
                                                'track',
                                                'AddToCart',
                                                {
                                                    content_name: 'Shaundju Academy - First Jobbers',
                                                    content_type: 'product',
                                                    value: 1950000,
                                                    currency: 'IDR',
                                                },
                                                { eventID: eventId },
                                            );
                                        }

                                        trackCTA(
                                            'pricing_first_jobber',
                                            'Join Now',
                                            'https://damanhuri.com/pembayaran',
                                            'AddToCart',
                                            eventId,
                                        );

                                        trackConversion('cta_lead', {
                                            source: 'pricing_first_jobber',
                                        });

                                        window.location.href = 'https://damanhuri.com/pembayaran';
                                    }}
                                    className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 text-white font-bold px-7 py-4 text-base transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Managers - Featured */}
                    <div className="relative overflow-hidden rounded-3xl flex flex-col">
                        {/* Glow */}
                        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#4ADE80]/60 via-[#22C55E]/40 to-[#4ADE80]/60 opacity-70 blur-sm" />

                        <div className="relative overflow-hidden rounded-3xl border border-[#4ADE80]/40 bg-[#0C1F13] shadow-2xl shadow-black/50 flex flex-col h-full">
                            {/* Featured ribbon */}
                            <div className="absolute right-0 top-0">
                                <div className="rounded-bl-2xl bg-[#4ADE80] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0C1F13]">
                                    Most Popular
                                </div>
                            </div>

                            <div className="border-b border-[#4ADE80]/15 p-7 sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                                    Managers
                                </p>
                                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                                    Penetrate Executive Status &amp; Triple Digit Salary
                                </h3>
                                <p className="mt-2 text-sm text-white/55">
                                    Untuk profesional yang siap jadi strategic leader dan tembus gaji 3 digit.
                                </p>

                                <ul className="mt-6 space-y-3.5">
                                    {managerFeatures.map((item) => (
                                        <li
                                            key={item.label}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="h-4 w-4 shrink-0 text-[#4ADE80] mt-0.5" />
                                            <span className="text-sm text-white/80">
                                                {item.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price */}
                            <div className="relative bg-gradient-to-br from-[#4ADE80] via-[#22C55E] to-[#16A34A] p-7 text-center sm:p-8 mt-auto">
                                <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                                <div className="relative">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0C1F13]/60">
                                        Investasi lo
                                    </p>
                                    <div className="mt-2 flex items-baseline justify-center gap-3">
                                        <span className="text-lg font-medium text-[#0C1F13]/50 line-through">
                                            Rp 3.500.000
                                        </span>
                                        <span className="rounded-full bg-[#0C1F13] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#4ADE80]">
                                            Hemat 16%
                                        </span>
                                    </div>
                                    <p className="mt-1 text-5xl font-extrabold tracking-tight text-[#0C1F13] sm:text-6xl">
                                        Rp 2.950.000
                                    </p>
                                    <p className="mt-2 text-sm font-bold text-[#0C1F13]/75">
                                        Sekali bayar · Akses selamanya
                                    </p>

                                    <div className="mt-6">
                                        <CtaButton
                                            id="pricing-cta"
                                            variant="dark"
                                            context="light"
                                            size="large"
                                            text="Join Now"
                                            href="https://damanhuri.com/pembayaran"
                                            onClick={() => {
                                                const eventId = generateEventId();

                                                if (typeof window.fbq === 'function') {
                                                    window.fbq(
                                                        'track',
                                                        'AddToCart',
                                                        {
                                                            content_name: 'Shaundju Academy - Managers',
                                                            content_type: 'product',
                                                            value: 2950000,
                                                            currency: 'IDR',
                                                        },
                                                        { eventID: eventId },
                                                    );
                                                }

                                                trackCTA(
                                                    'pricing_managers',
                                                    'Join Now',
                                                    'https://damanhuri.com/pembayaran',
                                                    'AddToCart',
                                                    eventId,
                                                );

                                                trackConversion('cta_lead', {
                                                    source: 'pricing_managers',
                                                });
                                            }}
                                        />
                                    </div>

                                    <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#0C1F13]/65">
                                        <ShieldCheck className="h-4 w-4" />
                                        Akses sesuai kebijakan saat pembelian
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
