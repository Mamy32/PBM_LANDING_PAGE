import CtaButton from './cta-button';

export default function SuccessStory() {
    return (
        <section className="bg-[#EEF5EA] py-24">
    <div className="mx-auto max-w-7xl px-6">

        {/* Trusted Companies */}
        <div className="flex flex-col items-center">
            <div className="mb-10 rounded-full border border-[#274A3B] px-5 py-2 text-sm text-[#274A3B]">
                Dipercaya oleh professional dari
            </div>

            <img
                src="/images/shaundju/logo_company.png"
                alt="Companies"
                className="w-full max-w-6xl"
            />
        </div>

        {/* Headline */}
        <h2 className="mt-24 text-center font-serif text-5xl lg:text-6xl text-[#1F3B32]">
            Gue Dapetin 100 Juta/Bulan di Usia 25
        </h2>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">

            {/* LEFT CARD */}
            <div className="relative overflow-hidden bg-[#B7D99E] p-10">

                <div className="absolute left-0 top-0 h-full w-4 bg-[#1F3B32]" />

                <h3 className="max-w-xl text-4xl italic text-[#1F3B32]">
                    "Gue mulai dari
                    <strong> IPK 3,0 </strong>
                    dan sulit dapat kerja"
                </h3>

                <div className="mt-8 flex items-center gap-4">

                    <img
                        src="/images/shaundju/oners.png"
                        alt="Shaun"
                        className="h-24 w-24 rounded-full"
                    />

                    <div className="rounded-full bg-[#1F3B32] px-4 py-2 text-white">
                        How??
                    </div>
                </div>

                <div className="mt-8">
                    <img
                        src="/images/shaundju/gaji200jt.png"
                        alt="Salary Proof"
                        className="w-full max-w-lg"
                    />
                </div>

                <div className="mt-8 inline-block border-2 border-[#1F3B32] bg-white px-6 py-3 text-3xl font-bold text-[#1F3B32]">
                    2,272,764,418
                </div>

                <p className="mt-8 max-w-xl text-2xl text-[#1F3B32]">
                    Sampai akhirnya gua berhasil dapetin
                    <strong> Gaji 100 Juta/bulan </strong>
                    hanya dalam 5 tahun setelah diterima kerja
                </p>
            </div>

            {/* RIGHT CARD */}
            <div className="p-4 shadow-lg">
                <img
                    src="/images/shaundju/promote.jpg"
                    alt="Career Timeline"
                    className="w-full"
                />
            </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
            <button
                className="
                rounded-full
                bg-gradient-to-b
                from-[#3E6652]
                to-[#234437]
                px-12
                py-4
                text-3xl
                font-bold
                text-[#B8FF8D]
                shadow-[0_0_30px_rgba(0,0,0,0.15)]
            "
            >
                Mulai Belajar Sekarang
            </button>
        </div>

        {/* Benefits */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-[#1F3B32]">
            <span>✓ 75+ Materi Strategi Naik Gaji</span>
            <span>✓ Lifetime Access</span>
            <span>✓ Join Top Performer Community</span>
        </div>

    </div>
</section>
    );
}