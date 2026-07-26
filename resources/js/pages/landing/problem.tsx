import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Problem() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    return (
        <section
            id="problem"
            className="bg-[#F7F3E9] pb-16 pt-8 lg:pb-24 lg:pt-12"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6"> 
                
                {/* HEADLINE */}
                <div className="mb-10 text-center sm:mb-14">
                    <div className="mb-6 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-semibold text-gray-600">
                        Cerita Gua
                    </div>
                    <h2 className="mx-auto max-w-[900px] font-serif text-2xl font-bold leading-tight text-[#1A3A22] sm:text-3xl lg:text-4xl">
                        Dulu Disuruh-suruh, Sekarang Bisa Bebas Dengan Gaji 2+ Miliar / Tahun
                    </h2>
                </div>

                <div className="mx-auto grid max-w-lg items-start gap-10 lg:max-w-none lg:grid-cols-2 lg:gap-14">
                    
                    {/* LEFT CARD (Image) */}
                    <div className="flex w-full items-center justify-center lg:justify-end">
                        <img
                            src="/images/shaundju/promote.webp" 
                            alt="Cerita Gua"
                            className="h-auto w-full max-w-[400px] rounded-3xl bg-white object-contain shadow-sm"
                            loading="lazy"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex w-full flex-col justify-center space-y-4 lg:max-w-[460px]">
                        
                        {/* Box 1: Dulu */}
                        <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-[0_4px_0_0_#CBD5E1] sm:px-6 sm:py-5">
                            <h3 className="mb-1 text-sm font-bold text-[#1A3A22] sm:text-[15px]">Dulu</h3>
                            <p className="text-[13px] leading-relaxed text-gray-500 sm:text-sm">
                                Gua cuma disuruh-suruh. Semua kerjaan based on perintah.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-4 w-4 stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </div>

                        {/* Box 2: Titik Balik */}
                        <div className="rounded-2xl border border-[#B08945] bg-white p-5 shadow-[0_4px_0_0_#B08945] sm:px-6 sm:py-5">
                            <h3 className="mb-1 text-sm font-bold text-[#1A3A22] sm:text-[15px]">Titik Balik</h3>
                            <p className="text-[13px] leading-relaxed text-gray-500 sm:text-sm">
                                Tapi pelan-pelan gua sadar kalau harus kelihatan punya value, bukan cuma rajin, tapi strategis.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-4 w-4 stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </div>

                        {/* Box 3: Sekarang */}
                        <div className="rounded-2xl bg-[#112E21] p-5 shadow-[0_-4px_0_0_#4ADE80] sm:px-6 sm:py-5">
                            <h3 className="mb-1 text-sm font-bold text-[#4ADE80] sm:text-[15px]">Sekarang</h3>
                            <p className="text-[13px] leading-relaxed text-gray-300 sm:text-sm">
                                Dari kerja buat bayar tagihan, sekarang gue punya kebebasan milih proyek, atur waktu, dan hidup dengan gaya yang gue mau
                            </p>
                        </div>

                        {/* Footer Text */}
                        <p className="mt-3 text-[13px] font-bold leading-relaxed text-[#1A3A22] sm:text-[15px]">
                            Semua itu bukan sulap. Ada caranya yang bisa lu terapin dan itu Jurus Maut yang gue ajarin di Shaun Dju Academy.
                        </p>
                    </div>
                </div>

                {/* BOTTOM CTA BUTTON */}
                <div className="mt-12 flex flex-col items-center justify-center sm:mt-16">
                    <CtaButton
                        id="cerita-gua-cta"
                        text="Pelajari Sekarang"
                        variant="dark" 
                        context="light" // Ensures checkmarks render correctly on white
                        showArrow={false}
                        onClick={() => {
                            const eventId = generateEventId();
                            trackCTA(
                                'cerita_gua',
                                'Pelajari Sekarang',
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