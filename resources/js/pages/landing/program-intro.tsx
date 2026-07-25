import { Check } from 'lucide-react';
import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function ProgramIntro() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    const items = [
        'Gua tunjukin cara membangun positioning dan kredibilitas di tempat kerja',
        'Gua ajarin cara membangun kepercayaan diri lo dan ciptakan executive presence',
        'Gua bantu lo kuasai strategi komunikasi buat fast-track promote',
    ];

    return (
        <section
            id="program-intro"
            // Using a deep dark green background to match the aesthetic
            className="py-16 lg:py-24"
            style={{background: 'radial-gradient(at 50% 0%, rgb(30, 74, 60) 0%, rgb(15, 42, 32) 55%, rgb(8, 23, 18) 100%)'}}
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white/20 px-5 py-1.5 text-xs font-medium text-gray-300 sm:text-sm">
                        Program
                    </div>
                    
                    <h2 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:mt-8 lg:text-5xl">
                        Makanya Gue Bikin Program Ini
                    </h2>
                </div>

                {/* List Items */}
                <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
                    {items.map((item, idx) => (
                        <div 
                            key={idx}
                            className="flex items-center gap-4 rounded-xl border border-white/15 px-5 py-4 transition-colors hover:bg-white/5 sm:rounded-2xl sm:px-6 sm:py-5"
                        >
                            <Check 
                                className="h-5 w-5 shrink-0 text-[#4ADE80]" 
                                strokeWidth={2.5} 
                            />
                            <span className="text-sm text-gray-200 sm:text-base">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center sm:mt-14">
                    <CtaButton
                        id="program-intro-cta"
                        text="Belajar Sekarang"
                        variant="primary"
                        showArrow={false}
                        onClick={() => {
                            const eventId = generateEventId();
                            trackCTA(
                                'program_intro',
                                'Belajar Sekarang',
                                '/checkout?course=first-jobbers',
                                'AddToCart',
                                eventId
                            );
                            trackInitiateCheckout('first-jobbers');
                            // Delay slightly to ensure tracking fires before navigation
                            setTimeout(() => {
                                router.visit('/checkout?course=first-jobbers');
                            }, 300);
                        }}
                    />
                </div>

            </div>
        </section>
    );
}