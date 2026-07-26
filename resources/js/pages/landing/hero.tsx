import { Star } from 'lucide-react';
import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Hero() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    const handleCtaClick = () => {
        const eventId = generateEventId();
        trackCTA(
            'hero_primary', 
            'Saya Mau Naik Gaji', 
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
            id="hero"
            // REMOVED min-h-screen so the section wraps exactly to the content height
            className="relative overflow-hidden"
            style={{background: 'radial-gradient(at 50% 0%, rgb(30, 74, 60) 0%, rgb(15, 42, 32) 55%, rgb(8, 23, 18) 100%)'}}
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 h-full w-[45%] bg-[#7AFF8A]/10 blur-[180px]" />
                <div className="absolute top-0 right-0 h-full w-[25%] bg-[#00FF66]/5 blur-[220px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
                {/* 
                    CHANGED: items-end instead of items-center to push everything to bottom.
                    ADDED: pt-24 lg:pt-36 to give spacing at the top since min-h-screen is gone.
                */}
                <div className="grid items-end gap-5 pt-24 md:gap-8 lg:grid-cols-2 lg:pt-36">
                    
                    {/* LEFT SIDE */}
                    {/* CHANGED: Added lg:pb-32 to move the text up from the bottom edge */}
                    <div className="max-w-[620px] pb-12 pt-0 text-left lg:pb-32">
                        
                        {/* MEMBERS BADGE */}
                        <div className="mx-auto inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/40 px-4 py-2 text-center lg:mx-0">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="h-3.5 w-3.5 fill-[#FFD54A] text-[#FFD54A]"
                                    />
                                ))}
                            </div>

                            <span className="text-xs font-medium text-white sm:text-sm">
                                JOIN 1.000 MEMBERS
                            </span>

                            <img
                                src="/images/shaundju/testi08.webp"
                                alt="Members"
                                width={32}
                                height={32}
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src="/images/shaundju/testi02.webp"
                                alt="Members"
                                width={32}
                                height={32}
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                            <img
                                src="/images/shaundju/testi04.webp"
                                alt="Members"
                                width={32}
                                height={32}
                                className="h-6 w-auto sm:h-8"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        {/* HEADLINE */}
                        {/* CHANGED: Made font sizes smaller */}
                        <h1 className="mt-8 text-left font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[52px] xl:text-[58px]">
                            Naikkan Gajimu 
                            <br />
                            <span className="text-[#4ADE94]">
                                Hingga 3X Lipat
                            </span>
                            <br />
                            Tanpa Harus Kerja Lebih Keras{' '}
                        </h1>

                        {/* DESCRIPTION */}
                        {/* CHANGED: Made font sizes smaller */}
                        <p className="mt-6 max-w-[500px] text-left text-[15px] leading-relaxed text-white/85 sm:text-base lg:text-lg">
                            <strong>Kalau kerja keras saja cukup, semua orang sudah bergaji tinggi.</strong>{' '}
                            Pelajari strategi yang dipakai banyak atasan capai<strong> gaji 3 digit per bulan.</strong>
                        </p>
                        
                        {/* Desktop CTA */}
                        <div className="mt-8 hidden items-start lg:flex lg:justify-start">
                            <CtaButton
                                id="hero-cta-desktop"
                                text="Saya Mau Naik Gaji"
                                variant="hero"
                                compact
                                showArrow={false}
                                align="left"
                                onClick={handleCtaClick}
                            />
                        </div>

                       {/* MOBILE CTA + IMAGE */}
                       {/* CHANGED: Reduced margin from mt-8 to mt-4 to pull the row up */}
                       <div className="mt-4 lg:hidden">
                            <div className="flex items-start justify-between gap-2">
                                {/* LEFT */}
                                {/* CHANGED: Removed the mt-4 margin entirely so the button sits right against the text */}
                                <div className="flex w-[40%] flex-col items-start">
                                    <CtaButton
                                        id="hero-cta"
                                        text="Saya Mau Naik Gaji"
                                        align="left"
                                        vertical
                                        variant="hero"
                                        showArrow={false}
                                        compact
                                        onClick={handleCtaClick}
                                        className="w-[130px] sm:w-auto"
                                    />
                                </div>

                                {/* RIGHT */}
                                <div className="flex w-[58%] items-end justify-end">
                                    <img
                                        src="/images/shaundju/photo_header.webp"
                                        alt="Shaun Djuhari"
                                        width={280}
                                        height={420}
                                        loading="eager"
                                        decoding="async"
                                        className="
                                            w-full
                                            max-w-[270px]
                                            translate-y-10
                                            scale-[1.22]
                                            object-contain
                                            object-bottom
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    {/* CHANGED: Added items-end to ensure the image sits perfectly on the bottom line */}
                    <div className="relative hidden items-end justify-center lg:order-last lg:flex lg:justify-end">
                        <img
                            src="/images/shaundju/photo_header.webp"
                            alt="Shaun Djuhari"
                            fetchPriority="high"
                            loading="eager"
                            decoding="async"
                            width="700"
                            height="800"
                            className="block w-full max-w-[650px] object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/70" />
        </section>
    );
}