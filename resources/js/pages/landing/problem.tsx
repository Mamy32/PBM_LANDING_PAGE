import { Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Problem() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="problem"
            className="bg-[#F7F3E9] pb-16 pt-8 lg:pb-24 lg:pt-12"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6"> {/* Changed to max-w-5xl to bring everything closer */}
                
                {/* HEADLINE */}
                <div className="mb-10 text-center sm:mb-14">
                    <div className="mb-6 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-semibold text-gray-600">
                        Cerita Gua
                    </div>
                    {/* The title can now stretch wider on one line on desktop */}
                    <h2 className="mx-auto max-w-[900px] font-serif text-3xl font-bold leading-tight text-[#1A3A22] sm:text-4xl lg:text-[42px]">
                        Dulu Disuruh-suruh, Sekarang Bisa Bebas Dengan Gaji 2+ Miliar / Tahun
                    </h2>
                </div>

                <div className="mx-auto grid max-w-lg items-start gap-10 lg:max-w-none lg:grid-cols-2 lg:gap-14">
                    
                    {/* LEFT CARD (Image) */}
                    <div className="flex w-full items-center justify-center lg:justify-end">
                        <img
                            src="/images/shaundju/promote.webp" 
                            alt="Cerita Gua"
                            // CRITICAL FIX: Set a max-width so it doesn't stretch ridiculously wide!
                            className="h-auto w-full max-w-[400px] rounded-3xl bg-white object-contain shadow-sm"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center space-y-3 lg:max-w-[460px]">
                        {/* Box 1: Dulu */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                            <h3 className="mb-1.5 text-sm font-bold text-[#1A3A22] sm:text-[15px]">Dulu</h3>
                            <p className="text-[13px] leading-relaxed text-gray-500 sm:text-sm">
                                Gua cuma disuruh-suruh. Semua kerjaan based on perintah.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 2: Titik Balik */}
                        <div className="rounded-2xl border border-[#B08945] bg-white p-5 shadow-sm sm:p-6">
                            <h3 className="mb-1.5 text-sm font-bold text-[#B08945] sm:text-[15px]">Titik Balik</h3>
                            <p className="text-[13px] leading-relaxed text-gray-600 sm:text-sm">
                                Tapi pelan-pelan gua sadar kalau harus kelihatan punya value, bukan cuma rajin, tapi strategis.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 3: Sekarang */}
                        <div className="rounded-2xl bg-[#0F291E] p-5 shadow-md sm:p-6">
                            <h3 className="mb-1.5 text-sm font-bold text-[#4ADE80] sm:text-[15px]">Sekarang</h3>
                            <p className="text-[13px] leading-relaxed text-gray-300 sm:text-sm">
                                Dari kerja buat bayar tagihan, sekarang gue punya kebebasan milih proyek, atur waktu, dan hidup dengan gaya yang gue mau
                            </p>
                        </div>

                        {/* Footer Text */}
                        <p className="mt-4 text-[13px] font-bold leading-relaxed text-[#1A3A22] sm:text-sm">
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
                        context="light"
                        showArrow={false}
                        onClick={() =>
                            trackCTA(
                                'cerita_gua',
                                'Pelajari Sekarang',
                                '/checkout?course=first-jobbers'
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}