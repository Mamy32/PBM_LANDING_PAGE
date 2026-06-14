import { useAnalytics } from '@/hooks/use-analytics';

export default function SuccessStory() {
    const { trackCTA } = useAnalytics();

    const handleClick = () => {
        trackCTA('success_story_cta', 'Mulai Belajar Sekarang', '#harga');
        document
            .getElementById('harga')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="success-story" className="bg-[#EEF5EA] py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Trusted Companies */}
                <div className="flex flex-col items-center">
                    <div className="mb-10 rounded-full border border-[#274A3B] px-5 py-2 text-sm text-[#274A3B]">
                        Dipercaya oleh professional dari
                    </div>

                    <img
                        src="/images/shaundju/logo_company.webp"
                        alt="Companies"
                        className="w-full max-w-6xl"
                        loading="lazy"
                        decoding="async"
                    />
                </div>

                {/* Headline */}
                <h2 className="mt-16 text-center font-serif text-3xl leading-tight text-[#1F3B32] sm:text-4xl lg:mt-24 lg:text-5xl">
                    Gue Dapetin 100 Juta/Bulan di Usia 29
                </h2>

                {/* Main Content */}
                <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-[1.4fr_0.9fr]">
                    {/* LEFT CARD */}
                    <div className="relative overflow-hidden bg-[#B7D99E] p-5 sm:p-8 lg:p-10">
                        <div className="absolute top-0 left-0 h-full w-4 bg-[#1F3B32]" />

                        <h3 className="max-w-xl text-2xl leading-snug text-[#1F3B32] italic sm:text-3xl lg:text-4xl">
                            "Gue mulai dari
                            <strong> IPK 3,0 </strong>
                            dan sulit dapat kerja"
                        </h3>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <img
                                src="/images/shaundju/oners.webp"
                                alt="Shaun"
                                className="h-16 w-16 rounded-full sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                            />

                            <div className="rounded-full bg-[#1F3B32] px-3 py-2 text-sm text-white sm:px-4">
                                How??
                            </div>
                        </div>

                        <div className="mt-8">
                            <img
                                src="/images/shaundju/gaji200jt.webp"
                                alt="Salary Proof"
                                className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="mt-6 inline-block border-2 border-[#1F3B32] bg-white px-4 py-2 text-xl font-bold text-[#1F3B32] sm:px-6 sm:py-3 sm:text-2xl lg:text-3xl">
                            2,272,764,418
                        </div>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1F3B32] sm:text-xl lg:text-2xl">
                            Sampai akhirnya gua berhasil dapetin
                            <strong> Gaji 100 Juta/bulan </strong>
                            hanya dalam 5 tahun setelah diterima kerja
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white p-4 shadow-lg">
                        <img
                            src="/images/shaundju/promote.webp"
                            alt="Career Timeline"
                            className="w-full"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 flex justify-center">
                    <button
                        id="success-story-cta"
                        type="button"
                        onClick={handleClick}
                        className="w-full cursor-pointer rounded-full bg-gradient-to-b from-[#3E6652] to-[#234437] px-6 py-3 text-lg font-bold text-[#B8FF8D] shadow-[0_0_30px_rgba(0,0,0,0.15)] sm:w-auto sm:px-10 sm:py-4"
                    >
                        Mulai Belajar Sekarang
                    </button>
                </div>

                {/* Benefits */}
                <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-[#1F3B32] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                    <span>✓ 75+ Materi Strategi Naik Gaji</span>
                    <span>✓ Lifetime Access</span>
                    <span>✓ 1000+ Members</span>
                </div>
            </div>
        </section>
    );
}
