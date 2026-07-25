import { Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Solution() {
    const { trackCTA } = useAnalytics();

    const handleClick = () => {
        trackCTA('solution_section', 'Saya Mau Belajar Mindset Ini', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
            id="solusi" 
            className="py-20 lg:py-32"
            style={{ background: 'radial-gradient(at 50% 0%, rgb(30, 74, 60) 0%, rgb(15, 42, 32) 55%, rgb(8, 23, 18) 100%)' }}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                {/* TOP SECTION: Grid */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    
                    {/* LEFT CONTENT */}
                    <div>
                        <div className="mb-6 inline-flex items-center rounded-full border border-gray-500/40 px-4 py-1.5 text-xs font-semibold text-gray-300">
                            Pernah di posisi lo
                        </div>
                        <h2 className="font-serif text-4xl font-bold leading-tight text-white lg:text-[44px]">
                            Gua Rasain Apa yang Lo<br className="hidden lg:block" /> Rasain
                        </h2>
                        <h3 className="mt-4 font-serif text-2xl font-bold text-[#4ADE94] sm:text-3xl lg:text-[32px]">
                            Pas Masih Awal Karier
                        </h3>
                    </div>

                    {/* RIGHT CONTENT (Box) */}
                    <div className="rounded-[32px] border border-[#4ADE9459] p-6 shadow-sm sm:p-8 lg:p-10">
                        <div className="flex flex-col space-y-6">
                            {/* Item 1 */}
                            <div className="flex items-start gap-4">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-[#4ADE94]" strokeWidth={2.5} />
                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    <strong className="font-semibold italic text-[#4ADE94]">Udah kerja keras & rajin banget, </strong>
                                    tapi kerjaan lo tetap nggak pernah bener-bener di-notice atasan
                                </p>
                            </div>

                            <hr className="border-[#4ADE9459]" />

                            {/* Item 2 */}
                            <div className="flex items-start gap-4">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-[#4ADE94]" strokeWidth={2.5} />
                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    <strong className="font-semibold italic text-[#4ADE94]">Udah rajin networking, </strong>
                                    ikut banyak acara & kenal banyak orang penting, tapi gak ngaruh karena belum ada kenaikan gaji nyata
                                </p>
                            </div>

                            <hr className="border-[#4ADE9459]" />

                            {/* Item 3 */}
                            <div className="flex items-start gap-4">
                                <Check className="mt-1 h-5 w-5 shrink-0 text-[#4ADE94]" strokeWidth={2.5} />
                                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                    <strong className="font-semibold italic text-[#4ADE94]">Lo liat orang kayak gua </strong>
                                    tembus ratusan juta per bulan sebelum umur 30, dan mikir "kayaknya emang ada yang mereka tau yang gue nggak tau"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM CTA SECTION */}
                <div className="mt-20 text-center lg:mt-28">
                    <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
                        Bedanya bukan kerja keras, bedanya mindset yang biasanya cuma diajarin lewat <strong className="text-white">executive coaching harga ratusan juta.</strong>
                    </p>

                    <div className="flex flex-col items-center justify-center">
                        <div className="inline-block scale-105 sm:scale-110">
                            <CtaButton
                                id="solution-cta"
                                text="Saya Mau Belajar Mindset Ini"
                                variant="primary"
                                showArrow={false}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}