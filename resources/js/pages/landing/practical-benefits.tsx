import { Check } from 'lucide-react';
import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';
import { useEffect, useRef } from 'react';

export default function PracticalBenefits() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();
    const videoRef = useRef<HTMLVideoElement>(null);

    // FIX: Force the video to mute and play on the raw DOM node 
    // This bypasses React's rendering quirks that sometimes cause iOS Safari to ignore autoplay
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch((error) => {
                console.log("Video autoplay was prevented by mobile browser", error);
            });
        }
    }, []);

    const handleCtaClick = () => {
        const eventId = generateEventId();
        trackCTA(
            'bukti_nyata',
            'Saya Mau Kayak Gini',
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
            id="benefits"
            className="bg-[#7F9968] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT: Video */}
                    <div className="flex w-full items-center justify-center">
                        <video 
                            ref={videoRef}
                            src="/images/shaundju/solution_gif.mp4" 
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="max-h-[450px] w-auto rounded-2xl shadow-lg sm:max-h-[500px] lg:max-h-[550px]" 
                        />
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex flex-col justify-center">
                        {/* Badge */}
                        <div className="mb-4 inline-flex self-start rounded-full border border-[#1A3A22]/30 px-3 py-1 text-xs font-semibold text-[#1A3A22]">
                            Bukti Nyata
                        </div>

                        {/* Heading */}
                        <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-white lg:text-[34px]">
                            Diperebutkan Perusahaan-Perusahaan Besar
                        </h2>

                        {/* Paragraph */}
                        <p className="mb-6 text-sm leading-relaxed text-white/95">
                            Umur 30, gue udah ngerasain <strong>gaji triple digit</strong> dan rekruter perusahaan-perusahaan gede incer gua. Karena gue tahu:
                        </p>

                        {/* Checkmark Boxes */}
                        <div className="mb-6 space-y-3">
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-4 py-3 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="text-[13px] font-medium sm:text-sm">Cara positioning diri yang bikin dipercaya pegang tanggung jawab besar</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-4 py-3 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="text-[13px] font-medium sm:text-sm">Cara negosiasi gaji tanpa rasa canggung</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-4 py-3 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                                <span className="text-[13px] font-medium sm:text-sm">Cara dapetin proyek yang bikin gue nggak tergantikan</span>
                            </div>
                        </div>

                        {/* Bold Footer Paragraph */}
                        <p className="mb-6 text-[13px] font-bold leading-relaxed text-white sm:text-sm">
                            Shaun Dju Academy bukan tentang motivasi, ini soal strategi karier terstruktur
                        </p>

                        {/* Button and Features */}
                        <div>
                            <CtaButton
                                id="bukti-nyata-cta"
                                text="Saya Mau Kayak Gini"
                                variant="dark"
                                size="large"
                                align="left"
                                showArrow={false}
                                onClick={handleCtaClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}