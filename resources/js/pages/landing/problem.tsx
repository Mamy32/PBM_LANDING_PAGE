import { Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Problem() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="problem"
            className="bg-[#F5F5F0] pb-16 pt-8 lg:pb-24 lg:pt-12"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* HEADLINE */}
                <div className="mb-10 text-center sm:mb-16">
                    <div className="mb-5 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-bold text-gray-600 sm:text-sm">
                        Cerita Gua
                    </div>
                    {/* The title can now stretch wider on one line on desktop */}
                    <h2 className="mx-auto max-w-4xl font-serif text-3xl font-bold leading-tight text-[#1A3A22] sm:text-4xl lg:text-5xl">
                        Dulu Disuruh-suruh, Sekarang Bisa Bebas Dengan Gaji 2+ Miliar / Tahun
                    </h2>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT CARD (Image Placeholder) */}
                    <div className="flex h-full min-h-[300px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gray-200 shadow-sm sm:min-h-[400px]">
                        <img
                            // CHANGE THIS TO YOUR IMAGE PATH
                            src="/images/shaundju/promote.webp" 
                            alt="Cerita Gua"
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* RIGHT SIDE (Dulu, Titik Balik, Sekarang) */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* Box 1: Dulu */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                            <h3 className="mb-2 font-bold text-[#1A3A22]">Dulu</h3>
                            <p className="text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                                Gua cuma disuruh-suruh. Semua kerjaan based on perintah.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 2: Titik Balik */}
                        <div className="rounded-2xl border border-[#B08945] bg-white p-6 shadow-sm sm:p-7">
                            <h3 className="mb-2 font-bold text-[#B08945]">Titik Balik</h3>
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                                Tapi pelan-pelan gua sadar kalau harus kelihatan punya value, bukan cuma rajin, tapi strategis.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 3: Sekarang */}
                        <div className="rounded-2xl bg-[#0F291E] p-6 shadow-md sm:p-7">
                            <h3 className="mb-2 font-bold text-[#4ADE80]">Sekarang</h3>
                            <p className="text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                                Dari kerja buat bayar tagihan, sekarang gue punya kebebasan milih proyek, atur waktu, dan hidup dengan gaya yang gue mau
                            </p>
                        </div>

                        {/* Footer Text */}
                        <p className="mt-4 text-sm font-bold leading-relaxed text-[#1A3A22] sm:text-base">
                            Semua itu bukan sulap. Ada caranya yang bisa lu terapin dan itu Jurus Maut yang gue ajarin di Shaun Dju Academy.
                        </p>
                    </div>
                </div>

                {/* BOTTOM CTA BUTTON */}
                <div className="mt-14 flex flex-col items-center justify-center sm:mt-16">
                    <CtaButton
                        id="cerita-gua-cta"
                        text="Pelajari Sekarang"
                        variant="dark" // Uses your dark green styling
                        size="large"
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