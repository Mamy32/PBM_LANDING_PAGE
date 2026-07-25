import { Check, ArrowDown } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function FinalCta() {
    const { trackCTA } = useAnalytics();

    return (
        <section className="py-20 lg:py-32" style={{background: 'radial-gradient(at 50% 0%, rgb(30, 74, 60) 0%, rgb(15, 42, 32) 55%, rgb(8, 23, 18) 100%)'}}>
            <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center sm:px-6">
                
                {/* Heading */}
                <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
                    Kalau Lo Sampai Baca Sejauh Ini, Lo<br className="hidden sm:block" /> Emang Serius Mau Berubah.
                </h2>
                
                {/* Downward Arrow */}
                <div className="mb-8 flex justify-center text-[#4ADE80]">
                    <ArrowDown className="h-6 w-6" strokeWidth={2.5} />
                </div>

                {/* CTA Button */}
                <div className="inline-block scale-105 sm:scale-110">
                    <CtaButton
                        id="final-cta"
                        text="Join Now"
                        variant="primary"
                        size="large"
                        showArrow={false}
                        onClick={() => {
                            // Track the click first
                            trackCTA(
                                'final_cta', 
                                'Join Now', 
                                '/checkout?course=first-jobbers'
                            );
                            
                            // Navigate directly to the checkout page
                            window.location.href = '/checkout?course=first-jobbers';
                        }}
                    />
                </div>
            </div>
        </section>
    );
}