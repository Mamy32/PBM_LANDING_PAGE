import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Solution() {
    const { trackCTA } = useAnalytics();

    return (
    <section
    id="solusi"
    className="bg-[#A6C98D] py-24"
>
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="flex justify-center">
                <div className="overflow-hidden rounded-2xl lg:rounded-[28px] border border-[#C7F2A5] bg-[#052E26]">
                    <img
                        src="/images/shaundju/mentor.png"
                        alt="Shaun"
                        className="h-[320px] sm:h-[420px] lg:h-[520px] w-auto object-cover"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">

                <div className="mb-4 inline-flex items-center rounded-full border border-[#16352A] px-4 py-2 text-xs sm:text-sm text-[#16352A]">
                    Solution
                </div>

                <h2 className="max-w-md font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
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
                    />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                    <div className="rounded-full bg-white/40 px-4 py-2 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ 75+ Materi Strategi Naik Gaji
                    </div>

                    <div className="rounded-full bg-white/40 px-4 py-2 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ Lifetime Access
                    </div>

                    <div className="rounded-full bg-white/40 px-4 py-2 text-center text-xs sm:text-sm text-[#16352A]">
                        ✓ Join Top Performer Community
                    </div>

                </div>

            </div>

        </div>
    </div>
</section>
    );
}
