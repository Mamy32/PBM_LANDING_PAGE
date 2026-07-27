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
                    
                    {/* CHANGED: Shrunk the text size down (to 40px on desktop) so it fits on one line */}
                    <h2 className="mt-6 font-serif text-2xl font-bold text-[#14312A] sm:text-3xl lg:mt-8 lg:text-[40px]">
                        Dari IT Biasa, Dipromosi ke <span className="text-[#225230]">Senior Asst. Vice President</span>
                    </h2>
                </div>

                {/* Testimonial Image */}
                <div className="mt-10 flex justify-center sm:mt-14">
                    {/* CHANGED: Brought the max width down to 380px so the tall image doesn't stretch too high */}
                    <img
                        src="/images/shaundju/Screenshot1.webp"
                        alt="Testimoni Niek Astrini"
                        className="w-full max-w-[380px] rounded-2xl object-contain shadow-md"
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
                        context="light" 
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