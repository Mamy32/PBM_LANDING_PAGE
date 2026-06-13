import { Check } from 'lucide-react';

import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
export default function Pricing() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    return (
        <section
            id="harga"
            className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white px-4 py-2 text-xs text-white sm:text-sm">
                        Select Your Package
                    </div>

                    <h2 className="mt-6 font-serif text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl lg:mt-8">
                        Pilih Paket yang Sesuai dengan
                        <br />
                        Target Karier Lo Saat Ini
                    </h2>
                </div>

                {/* Pricing Cards */}
                <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-8">
                    {/* First Jobbers */}
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-[#E4EBE2] p-6 md:max-w-none md:p-10 lg:rounded-[24px]">
                        <h3 className="text-center font-serif text-2xl font-semibold text-[#123C2D] md:text-4xl">
                            2x Salary in 3 Years PLUS 5x Salary in 10 years
                        </h3>

                        <p className="mt-6 text-center text-lg font-semibold text-[#123C2D]">
                            First Jobbers
                        </p>

                        <p className="mt-4 text-center text-red-500 line-through">
                            Rp2.500.000
                        </p>

                        <p className="text-center text-3xl text-[#123C2D] md:text-5xl">
                            Rp1.950.000
                        </p>

                        <div className="mt-4 flex justify-center">
                            <span className="rounded-full border border-[#123C2D] px-4 py-1 text-sm text-[#000000]">
                                4 Modules
                            </span>
                        </div>

                        <div className="mt-6 space-y-3 text-[#123C2D] md:mt-10 md:space-y-5">
                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                <span>Akses ke Modul 1, 2, 3, 4</span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                <span className="text-sm sm:text-base">
                                    Akses Seumur Hidup untuk Video Modul &
                                    Rekaman Live Session Batch Sebelumnya
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                <span className="text-sm sm:text-base">
                                    Sesi Tanya Jawab Terbuka Kapan Saja via
                                    Komunitas Discord Privat
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                                <span className="text-sm sm:text-base">
                                    Review PR Personal Langsung oleh Shaun Dju
                                </span>
                            </div>
                        </div>

                        <button
                            className="mt-12 w-full cursor-pointer rounded-full bg-[#B8C8C0] py-3 text-base font-semibold text-[#123C2D] transition-all duration-300 hover:scale-[1.02] md:py-4 md:text-lg"
                            onClick={() => {
                                const eventId = generateEventId();

                                trackCTA(
                                    'pricing_first_jobber',
                                    'Join Now',
                                    '/checkout?course=first-jobbers',
                                    'AddToCart',
                                    eventId,
                                );

                                trackInitiateCheckout('first-jobbers');

                                setTimeout(() => {
                                    router.visit(
                                        '/checkout?course=first-jobbers',
                                    );
                                }, 300);
                            }}
                        >
                            Join Now
                        </button>
                    </div>

                    {/* Managers */}
                    <div className="mx-auto w-full max-w-md rounded-2xl border border-[#9DFF70] bg-[#123C2D] p-6 md:max-w-none md:p-10 lg:rounded-[24px]">
                        <h3 className="text-center font-serif text-2xl font-semibold text-[#9DFF70] md:text-4xl">
                            Penetrate Executive Status
                            <br />& Triple Digit Salary
                        </h3>

                        <p className="mt-6 text-center text-lg font-semibold text-white">
                            Managers
                        </p>

                        <p className="mt-4 text-center text-red-400 line-through">
                            Rp3.500.000
                        </p>

                        <p className="text-center text-3xl text-white md:text-5xl">
                            Rp2.950.000
                        </p>

                        <div className="mt-4 flex justify-center">
                            <span className="rounded-full border border-white px-4 py-1 text-sm text-white">
                                5 Modules
                            </span>
                        </div>

                        <div className="mt-6 space-y-3 text-white md:mt-10 md:space-y-5">
                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9DFF70]" />
                                <span className="text-sm sm:text-base">
                                    Akses ke Modul 1, 2, 3, 4, 5
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9DFF70]" />
                                <span className="text-sm sm:text-base">
                                    Akses Seumur Hidup untuk Video Modul &
                                    Rekaman Live Session Batch Sebelumnya
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9DFF70]" />
                                <span className="text-sm sm:text-base">
                                    Sesi Tanya Jawab Terbuka Kapan Saja via
                                    Komunitas Discord Privat
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9DFF70]" />
                                <span className="text-sm sm:text-base">
                                    Review PR Personal Langsung oleh Shaun Dju
                                </span>
                            </div>
                        </div>

                        <button
                            className="mt-12 w-full cursor-pointer rounded-full bg-[#9DFF70] py-3 text-base font-semibold text-[#123C2D] transition-all duration-300 hover:scale-[1.02] md:py-4 md:text-lg"
                            onClick={() => {
                                const eventId = generateEventId();

                                trackCTA(
                                    'pricing_manager',
                                    'Join Now',
                                    '/checkout?course=managers',
                                    'AddToCart',
                                    eventId,
                                );

                                trackInitiateCheckout('managers');

                                setTimeout(() => {
                                    router.visit('/checkout?course=managers');
                                }, 300);
                            }}
                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
