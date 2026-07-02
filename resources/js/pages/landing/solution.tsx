import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

export default function Solution() {
    const { trackCTA } = useAnalytics();

    const handleClick = () => {
        trackCTA('solution_section', 'Bongkar Hacks-nya Sekarang', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="solusi" className="bg-[#8FB278] py-21 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-28">
                    {/* CONTENT */}
                    <div className="max-w-[520px] text-center lg:text-left">
                        <div className="mb-4 inline-flex items-center rounded-full border border-[#16352A] px-4 py-2 text-xs text-[#16352A] sm:text-sm">
                            Di ShaunDju Academy
                        </div>

                        <h2 className="max-w-[500px] font-serif text-4xl leading-[1.1] font-semibold text-white sm:text-5xl">
                            Diperebutkan
                            <br />
                            Perusahaan-
                            <br />
                            Perusahaan Besar
                        </h2>

                        <p className="mt-6 max-w-md text-lg leading-relaxed text-white sm:text-2xl">
                            Dulu gue yang kirim-kirim CV, sekarang rekruiter yang DM duluan. berkat branding dan reputasi yang bener, banyak alumni Shaun Academy dapet tawaran
                            <span className="font-semibold text-[#B8FF8B] italic">
                                {' '}
                                startup bank, hingga perusahaan multinasional.
                            </span>
                        </p>

                    {/* CTA */}
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <CtaButton
                            id="solution-cta"
                            text="Bongkar Hacks-nya Sekarang"
                            variant="dark"
                            size="large"
                            context="light"
                            onClick={handleClick}
                        />
                    </div>
                    </div>
                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="rounded-[32px] border-2 border-[#A8FF7E] p-4 shadow-[0_0_30px_rgba(168,255,126,0.18)]">
                            <div className="overflow-hidden rounded-[28px] bg-[#052E26]">
                                <video
                                    className="h-[420px] w-auto object-cover sm:h-[520px] lg:h-[700px]"
                                    width={512}
                                    height={700}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                >
                                    {/* Safari / iPhone */}
                                    <source
                                        src="/images/shaundju/solution_gif.mp4"
                                        type="video/mp4"
                                    />

                                    {/* Chrome / Firefox / Edge */}
                                    <source
                                        src="/images/shaundju/solution_gif.webm"
                                        type="video/webm"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
