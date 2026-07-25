import { Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function PracticalBenefits() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="benefits"
            className="bg-[#7F9968] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    
                    {/* LEFT: Video Placeholder */}
                    {/* You can remove the border and bg colors once you put a real video here */}
                    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-[#1A3A22]/20 bg-[#1A3A22]/5 text-center shadow-sm">
                        <video 
                            // CHANGE THIS TO YOUR ACTUAL VIDEO PATH
                            src="/images/shaundju/solution_gif.mp4" 
                            controls
                            className="h-full w-full object-cover" 
                        />
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex flex-col justify-center">
                        {/* Badge */}
                        <div className="mb-6 inline-flex self-start rounded-full border border-[#1A3A22]/30 px-4 py-1 text-xs font-semibold text-[#1A3A22] sm:text-sm">
                            Bukti Nyata
                        </div>

                        {/* Heading */}
                        <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Diperebutkan Perusahaan-Perusahaan Besar
                        </h2>

                        {/* Paragraph */}
                        <p className="mb-8 text-sm leading-relaxed text-white/95 sm:text-base">
                            Umur 30, gue udah ngerasain <strong>gaji triple digit</strong> dan rekruter perusahaan-perusahaan gede incer gua. Karena gue tahu:
                        </p>

                        {/* Checkmark Boxes */}
                        <div className="mb-8 space-y-3">
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-5 py-4 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2} />
                                <span className="text-sm font-medium sm:text-[15px]">Cara positioning diri yang bikin dipercaya pegang tanggung jawab besar</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-5 py-4 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2} />
                                <span className="text-sm font-medium sm:text-[15px]">Cara negosiasi gaji tanpa rasa canggung</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl bg-[#FFFFFF59] px-5 py-4 text-[#14312A]">
                                <Check className="h-4 w-4 shrink-0" strokeWidth={2} />
                                <span className="text-sm font-medium sm:text-[15px]">Cara dapetin proyek yang bikin gue nggak tergantikan</span>
                            </div>
                        </div>

                        {/* Bold Footer Paragraph */}
                        <p className="mb-8 text-sm font-bold leading-relaxed text-white sm:text-[15px]">
                            Shaun Dju Academy bukan tentang motivasi, ini soal strategi karier terstruktur
                        </p>

                        {/* Button and Features */}
                        <div>
                            <div className="inline-block">
                                <CtaButton
                                    id="bukti-nyata-cta"
                                    text="Saya Mau Kayak Gini"
                                    variant="dark"
                                    size="large"
                                    showArrow={false}
                                    onClick={() =>
                                        trackCTA(
                                            'bukti_nyata',
                                            'Saya Mau Kayak Gini',
                                            '/checkout?course=first-jobbers'
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}