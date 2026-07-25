import { Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function SuccessStory() {
    const { trackCTA } = useAnalytics();

    const handleClick = () => {
        trackCTA('pengakuan_cta', 'Saya Mau Belajar Mindset Ini', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="success-story"
            className="bg-[radial-gradient(at_50%_0%,rgb(30,74,60)_0%,rgb(15,42,32)_55%,rgb(8,23,18)_100%)] py-20 lg:py-32"
        >
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                
                {/* Badge */}
                <div className="inline-flex items-center justify-center rounded-full border border-gray-500/50 px-5 py-1.5 text-sm font-medium text-gray-300">
                    Pengakuan
                </div>

                {/* Headline */}
                <h2 className="mt-8 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[44px]">
                    Gue Bisa Capai Ini Karena Diajarin Mindset dari Executive Coaching Seharga Ratusan Juta
                </h2>

                {/* Subtitle */}
                <p className="mt-6 text-sm font-medium text-[#4ADE94] sm:text-base lg:text-lg">
                    Dan sekarang, gue mau sharing semuanya buat lo supaya lo bisa terapin juga.
                </p>

                {/* Quote Block */}
                <div className="mx-auto mt-12 max-w-3xl text-left">
                    <div className="border-l-[3px] border-[#4ADE80] pl-6 sm:pl-8">
                        <p className="text-xl font-bold leading-relaxed text-white sm:text-2xl lg:text-3xl">
                            Pas gue pertama kali ikutin ini, gue langsung sadar, <span className="text-[#4ADE94]">dan nyesel kenapa gak dari dulu.</span>
                        </p>
                        <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                            Kalau dari awal karier, gue dapetin ini dan langsung nerapin mindset-nya, mungkin perjalanan gue bisa <strong className="text-white">jauh lebih cepat.</strong>
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-14 flex flex-col items-center justify-center lg:mt-16">
                    <div className="inline-block scale-105 sm:scale-110">
                        <CtaButton
                            id="pengakuan-cta"
                            text="Saya Mau Belajar Mindset Ini"
                            variant="primary"
                            size="large"
                            showArrow={false}
                            onClick={handleClick}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}