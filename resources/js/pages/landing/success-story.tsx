import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function SuccessStory() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    const handleClick = () => {
        const eventId = generateEventId();
        trackCTA(
            'pengakuan_cta', 
            'Saya Mau Belajar Mindset Ini', 
            '/checkout?course=first-jobbers',
            'AddToCart',
            eventId
        );
        trackInitiateCheckout('first-jobbers');
        // Delay slightly to ensure tracking fires before navigation
        setTimeout(() => {
            router.visit('/checkout?course=first-jobbers');
        }, 300);
    };

    return (
        <section
            id="success-story"
            className="bg-[radial-gradient(at_50%_0%,rgb(30,74,60)_0%,rgb(15,42,32)_55%,rgb(8,23,18)_100%)] py-20 lg:py-32"
        >
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                
                {/* Badge */}
                <div className="inline-flex items-center justify-center rounded-full border border-gray-500/50 px-5 py-1.5 text-xs font-medium text-gray-300 sm:text-sm">
                    Pengakuan
                </div>

                {/* Headline */}
                <h2 className="mt-8 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    Gue Bisa Capai Ini Karena Diajarin Mindset dari Executive Coaching Seharga Ratusan Juta
                </h2>

                {/* Subtitle */}
                <p className="mt-5 text-sm font-medium text-[#4ADE94] sm:mt-6 sm:text-base">
                    Dan sekarang, gue mau sharing semuanya buat lo supaya lo bisa terapin juga.
                </p>

                {/* Quote Block */}
                <div className="mx-auto mt-12 max-w-2xl text-left">
                    <div className="border-l-[3px] border-[#4ADE80] pl-6 sm:pl-8">
                        <p className="text-lg font-bold leading-relaxed text-white sm:text-xl lg:text-2xl">
                            Pas gue pertama kali ikutin ini, gue langsung sadar, <span className="text-[#4ADE94]">dan nyesel kenapa gak dari dulu.</span>
                        </p>
                        <p className="mt-4 text-xs leading-relaxed text-gray-400 sm:mt-5 sm:text-sm">
                            Kalau dari awal karier, gue dapetin ini dan langsung nerapin mindset-nya, mungkin perjalanan gue bisa <strong className="text-white">jauh lebih cepat.</strong>
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center sm:mt-14">
                    <CtaButton
                        id="pengakuan-cta"
                        text="Saya Mau Belajar Mindset Ini"
                        variant="primary"
                        showArrow={false}
                        onClick={handleClick}
                    />
                </div>

            </div>
        </section>
    );
}