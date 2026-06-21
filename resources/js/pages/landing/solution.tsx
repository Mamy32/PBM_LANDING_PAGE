import { ArrowRight } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';

export default function Solution() {
    const { trackCTA } = useAnalytics();

    const handleClick = () => {
        trackCTA('solution_section', 'Bongkar Hacks-nya Sekarang', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="solusi" className="bg-[#8FB278] py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-28">
                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="rounded-[28px] border border-[#A8FF7E] p-3">
                            <div className="overflow-hidden rounded-[24px] bg-[#052E26]">
                                <img
                                    src="/images/shaundju/mentor.webp"
                                    alt="Shaun"
                                    className="h-[320px] w-auto object-cover sm:h-[420px] lg:h-[520px]"
                                    width={381}
                                    height={520}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="max-w-[520px] text-center lg:text-left">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#16352A] px-4 py-2 text-xs text-[#16352A] sm:text-sm">
                            Di ShaunDju Academy
                        </div>

                        <h2 className="max-w-[500px] font-serif text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
                            Gua bakal
                            <br />
                            bongkar hacks
                            <br />
                            karyawan top 1%
                        </h2>

                        <p className="mt-6 max-w-md text-lg leading-relaxed text-white sm:text-2xl">
                            biar lo naik jadi strategic leader dan tembus gaji
                            <span className="font-semibold text-[#B8FF8B] italic">
                                {' '}
                                100 juta pertama.
                            </span>
                        </p>

                        {/* Button — dark pill, left-aligned, no outer container */}
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <button
                                id="solution-cta"
                                type="button"
                                onClick={handleClick}
                                className="group inline-flex items-center gap-2 rounded-full bg-[#1A3A22] px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C2016] sm:text-lg"
                            >
                                <span>Bongkar Hacks-nya Sekarang</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                            </button>
                        </div>

                        {/* Feature tags — inline, small, no border */}
                        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:flex-nowrap lg:justify-start">
                            {[
                                '75+ Materi Strategi Naik Gaji',
                                'Lifetime Access',
                                '1000+ Members',
                            ].map((f) => (
                                <span
                                    key={f}
                                    className="inline-flex items-center gap-1.5 text-xs text-[#16352A] sm:text-sm"
                                >
                                    <svg
                                        className="h-3.5 w-3.5 shrink-0"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="7"
                                            cy="7"
                                            r="7"
                                            fill="#16352A"
                                            fillOpacity="0.25"
                                        />
                                        <path
                                            d="M4 7l2 2 4-4"
                                            stroke="#16352A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
