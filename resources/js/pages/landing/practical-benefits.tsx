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
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT: Video */}
                    <div className="flex w-full items-center justify-center">
                        <video 
                            src="/images/shaundju/solution_gif.mp4" 
                            controls
                            playsInline
                            className="max-h-[450px] w-auto rounded-2xl shadow-lg sm:max-h-[500px] lg:max-h-[550px]" 
                        />
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex flex-col justify-center">
                        {/* Badge (Made slightly larger) */}
                        <div className="mb-6 inline-flex self-start rounded-full border border-[#1A3A22]/30 px-5 py-1.5 text-sm font-semibold text-[#1A3A22] sm:text-base">
                            Bukti Nyata
                        </div>

                        {/* Heading (Made massive to match the model) */}
                        <h2 className="mb-8 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Diperebutkan Perusahaan-Perusahaan Besar
                        </h2>

                        {/* Paragraph (Increased font size) */}
                        <p className="mb-8 text-base leading-relaxed text-white/95 sm:text-lg lg:text-xl">
                            Umur 30, gue udah ngerasain <strong>gaji triple digit</strong> dan rekruter perusahaan-perusahaan gede incer gua. Karena gue tahu:
                        </p>

                        {/* Checkmark Boxes (Increased padding and font size) */}
                        <div className="mb-10 space-y-4">
                            <div className="flex items-center gap-4 rounded-xl bg-[#FFFFFF59] px-6 py-5 text-[#14312A]">
                                <Check className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                                <span className="text-base font-medium sm:text-lg">Cara positioning diri yang bikin dipercaya pegang tanggung jawab besar</span>
                            </div>
                            <div className="flex items-center gap-4 rounded-xl bg-[#FFFFFF59] px-6 py-5 text-[#14312A]">
                                <Check className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                                <span className="text-base font-medium sm:text-lg">Cara negosiasi gaji tanpa rasa canggung</span>
                            </div>
                            <div className="flex items-center gap-4 rounded-xl bg-[#FFFFFF59] px-6 py-5 text-[#14312A]">
                                <Check className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                                <span className="text-base font-medium sm:text-lg">Cara dapetin proyek yang bikin gue nggak tergantikan</span>
                            </div>
                        </div>

                        {/* Bold Footer Paragraph (Increased font size) */}
                        <p className="mb-10 text-base font-bold leading-relaxed text-white sm:text-lg lg:text-xl">
                            Shaun Dju Academy bukan tentang motivasi, ini soal strategi karier terstruktur
                        </p>

                        {/* Button and Features */}
                        <div>
                            {/* Wrapped in a scale utility to make the CTA button slightly larger to match the new massive text */}
                            <div className="inline-block origin-left scale-105 sm:scale-110">
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