import { Check } from 'lucide-react';
import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CountdownTimer from './countdown-timer';

export default function Pricing() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    return (
        <section
            id="harga"
            className="bg-[#F7F3E9] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
                        Select Your Package
                    </div>

                    <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl font-bold leading-tight text-[#1A3A22] sm:text-4xl md:text-5xl lg:mt-8">
                        Pilih Paket yang Sesuai dengan Target Karier Lo Saat Ini
                    </h2>
                </div>
                
                <div className="mt-8">
                    <CountdownTimer />
                </div>

                {/* Pricing Cards (items-stretch makes them equal height) */}
                <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:gap-8">
                    
                    {/* FIRST JOBBERS CARD */}
                    <div className="flex w-full flex-col rounded-[32px] bg-white p-8 shadow-sm lg:p-10">
                        <h3 className="font-serif text-xl font-bold text-[#1A3A22] lg:text-2xl">
                            2x Salary in 3 Years PLUS 5x Salary in 10 years
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            First Jobbers
                        </p>
                        
                        <div className="mt-6">
                            <p className="text-sm font-medium text-gray-400 line-through">
                                Rp2.500.000
                            </p>
                            <p className="mt-1 font-serif text-4xl font-bold text-[#1A3A22] lg:text-5xl">
                                Rp1.950.000
                            </p>
                            <p className="mt-2 text-xs font-medium text-gray-500">
                                4 Modules
                            </p>
                        </div>

                        {/* flex-1 pushes the button to the bottom so both buttons align */}
                        <div className="mb-10 mt-8 flex-1 space-y-4 text-sm text-[#1A3A22]">
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="font-medium">Akses ke Modul 1, 2, 3, 4</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Akses Seumur Hidup untuk Video Modul &
                                    Rekaman Live Session Batch Sebelumnya
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Sesi Tanya Jawab Terbuka Kapan Saja via
                                    Komunitas Discord Privat
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Review PR Personal Langsung oleh Shaun Dju
                                </span>
                            </div>
                        </div>

                        <button
                            className="w-full cursor-pointer rounded-full bg-[#16352A] py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] md:text-lg"
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
                                    router.visit('/checkout?course=first-jobbers');
                                }, 300);
                            }}
                        >
                            Join Now
                        </button>
                    </div>

                    {/* MANAGERS CARD */}
                    <div className="flex w-full flex-col rounded-[32px] bg-[#16352A] p-8 shadow-md lg:p-10">
                        <h3 className="font-serif text-xl font-bold text-white lg:text-2xl">
                            Penetrate Executive Status
                            <br className="hidden lg:block" /> & Triple Digit Salary
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Managers
                        </p>
                        
                        <div className="mt-6">
                            <p className="text-sm font-medium text-gray-400 line-through">
                                Rp3.500.000
                            </p>
                            <p className="mt-1 font-serif text-4xl font-bold text-white lg:text-5xl">
                                Rp2.950.000
                            </p>
                            <p className="mt-2 text-xs font-medium text-gray-400">
                                5 Modules
                            </p>
                        </div>

                        <div className="mb-10 mt-8 flex-1 space-y-4 text-sm text-gray-200">
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Akses ke Modul 1, 2, 3, 4, 5
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Akses Seumur Hidup untuk Video Modul &
                                    Rekaman Live Session Batch Sebelumnya
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Sesi Tanya Jawab Terbuka Kapan Saja via
                                    Komunitas Discord Privat
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                                <span className="font-medium leading-relaxed">
                                    Review PR Personal Langsung oleh Shaun Dju
                                </span>
                            </div>
                        </div>

                        <button
                            className="w-full cursor-pointer rounded-full bg-[#4ADE80] py-3.5 text-base font-semibold text-[#16352A] transition-all duration-300 hover:scale-[1.02] md:text-lg"
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