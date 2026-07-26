import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function TestimonialIT() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    return (
        <section
            id="testimoni-niek"
            className="bg-[#F7F3E9] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
                        Bukti dari Program Ini
                    </div>
                    
                    <h2 className="mt-6 font-serif text-3xl font-bold text-[#14312A] sm:text-4xl lg:mt-8 lg:text-5xl">
                        Dari IT Biasa, Dipromosi ke <span className="text-[#81D99B]">Senior AVP</span>
                    </h2>
                </div>

                {/* Testimonial Image (Replace src with your actual screenshot) */}
                <div className="mt-10 flex justify-center sm:mt-14">
                    <img
                        src="/images/shaundju/Screenshot1.webp"
                        alt="Testimoni Niek Astrini"
                        className="w-full max-w-[600px] rounded-2xl object-cover shadow-sm"
                        // Optional fallback styling while image is missing
                        style={{ minHeight: '300px', backgroundColor: '#EFEBE0' }} 
                    />
                </div>

                {/* Description */}
                <div className="mt-10 text-center sm:mt-12">
                    <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-700 sm:text-base">
                        <strong>Niek udah kerja keras bertahun-tahun</strong>, tapi ngerasa mentok, sampai dia mulai <strong>pakai cara positioning dan komunikasi yang diajarin di Shaun Dju Academy</strong>. Nggak nunggu lama, promosinya datang.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center sm:mt-12">
                    <CtaButton
                        id="testimoni-niek-cta"
                        text="Saya Mau Dipromosi Juga"
                        variant="dark"
                        context="light" // Automatically makes the features list text dark!
                        showArrow={false}
                        onClick={() => {
                            const eventId = generateEventId();
                            trackCTA(
                                'testimoni_niek',
                                'Saya Mau Dipromosi Juga',
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