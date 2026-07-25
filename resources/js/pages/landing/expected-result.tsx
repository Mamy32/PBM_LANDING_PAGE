import { CheckCircle } from 'lucide-react';
import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function ExpectedResults() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    const items = [
        'Promosi yang lo tunggu-tunggu akhirnya dateng kadang cuma hitungan bulan, bukan tahun karena lo dinotice atasan',
        'Gaji naik signifikan, karena lo yang mulai nego duluan, bukan nunggu ditawarin HR.',
        'Lo dipercaya pegang proyek besar dan tim sendiri, bukan lagi cuma jalanin arahan orang.',
    ];

    return (
        <section
            id="hasil-program"
            // Keeping the consistent deep dark green background
            className="py-16 lg:py-24"
            style={{background: 'radial-gradient(at 50% 0%, rgb(30, 74, 60) 0%, rgb(15, 42, 32) 55%, rgb(8, 23, 18) 100%)'}}
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white/20 px-5 py-1.5 text-xs font-medium text-gray-300 sm:text-sm">
                        Hasil yang Bisa Lo Rasain
                    </div>
                    
                    <h2 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl lg:mt-8 lg:text-5xl">
                        Sama Kayak Niek, Begitu Lo Paham Caranya
                    </h2>
                </div>

                {/* List Items */}
                <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5">
                    {items.map((item, idx) => (
                        <div 
                            key={idx}
                            // Using items-center so the checkmark sits perfectly in the middle of wrapped text
                            className="flex items-center gap-4 rounded-xl border border-white/15 px-5 py-5 transition-colors hover:bg-white/5 sm:rounded-2xl sm:px-6 sm:py-6"
                        >
                            <CheckCircle 
                                className="h-5 w-5 shrink-0 text-[#4ADE94]" 
                                strokeWidth={2} 
                            />
                            <span className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Summary Text (Styled exactly like the image) */}
                <div className="mt-12 text-center sm:mt-16">
                    <p className="mx-auto max-w-[600px] font-serif text-xl leading-relaxed text-gray-400 sm:text-2xl">
                        <strong className="text-white">Dari gaji</strong> yang stuck bertahun-tahun,{' '}
                        <strong className="text-white">
                            jadi punya <span className="text-[#4ADE94]">posisi, gaji, dan kebebasan milih jalan karier lo sendiri</span>
                        </strong>.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center sm:mt-12">
                    <CtaButton
                        id="hasil-program-cta"
                        text="Saya Mau Ngerasain Ini"
                        variant="primary"
                        showArrow={false}
                        onClick={() => {
                            const eventId = generateEventId();
                            trackCTA(
                                'hasil_program',
                                'Saya Mau Ngerasain Ini',
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