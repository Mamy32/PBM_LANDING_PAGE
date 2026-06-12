import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Solution() {
    const { trackCTA } = useAnalytics();

    return (
    <section
    id="solusi"
   className="bg-[#8FB278] py-24 lg:py-32"
>
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:gap-28 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="flex justify-center">
    <div className="rounded-[28px] border border-[#A8FF7E] p-3">
        <div className="overflow-hidden rounded-[24px] bg-[#052E26]">
            <img
                src="/images/shaundju/mentor.png"
                alt="Shaun"
                className="h-[320px] sm:h-[420px] lg:h-[520px] w-auto object-cover"
            />
        </div>
    </div>
</div>

            {/* CONTENT */}
        <div className="max-w-[520px] text-center lg:text-left">

                <div className="mb-4 inline-flex items-center rounded-full border border-[#16352A] px-4 py-2 text-xs sm:text-sm text-[#16352A]">
                    Solution
                </div>

                <h2 className="max-w-[500px] font-serif text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] text-white">
                    Disini Gua bakal
                    <br />
                    bongkar hacks
                    <br />
                    karyawan top 1%
                </h2>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-white sm:text-2xl lg:text-3xl">
                    biar lo naik jadi strategic leader dan tembus gaji
                    <span className="font-semibold italic text-[#B8FF8B]">
                        {' '}100 juta pertama.
                    </span>
                </p>

                <div className="mt-8">
                    <CtaButton
                        id="solution-cta"
                        text="Bongkar Hacks-nya Sekarang"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'solution_section',
                                'Bongkar Hacks-nya Sekarang',
                                '#harga',
                            )
                        }
                        className="
rounded-full
bg-gradient-to-r
from-[#234538]
to-[#102D24]
text-[#A8FF7E]
font-bold
border border-white/10
shadow-lg
"
                    />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                    <div className="rounded-full border border-white/80 bg-transparent px-3 py-1 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ 75+ Materi Strategi Naik Gaji
                    </div>

                    <div className="rounded-full border border-white/80 bg-transparent px-3 py-1 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ Lifetime Access
                    </div>

                    <div className="rounded-full border border-white/80 bg-transparent px-3 py-1 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ Join Top Performer Community
                    </div>

                </div>

            </div>

        </div>
    </div>
</section>
    );
}
