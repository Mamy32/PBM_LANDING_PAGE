import { ChevronDown, Check } from 'lucide-react';
import CtaButton from './cta-button';

const benefits = [
    {
        title: 'Jadi Kandidat Rebutan,\nBukan Penunggu Giliran',
        description: 'Jadi nama yang selalu muncul di pikiran atasan',
        icon: '/images/shaundju/benefit1.png',
    },
    {
        title: 'Komunikasi yang Bikin Lo\nKelihatan Lebih Senior\ndari Jabatan Lo',
        description:
            'Belajar cara presentasi & ngomong yang bikin orang dengerin lo',
        icon: '/images/shaundju/benefit2.png',
    },
    {
        title: 'Ubah Cara\nAtasan Ngeliat Lo',
        description: 'Dari staff rajin jadi calon manajer',
        icon: '/images/shaundju/benefit3.png',
    },
];

export default function PracticalBenefits() {
    return (
        <section
    className="relative overflow-hidden py-28"
    style={{
        background:
            'linear-gradient(90deg,#123C2D 0%,#1E4D3A 50%,#123C2D 100%)',
    }}
>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Main Heading */}
                <div className="text-center">
                    <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                        <span className="text-[#9DFF70]">
                            Ini saatnya
                        </span>
                        <br />
                        <span className="text-white">
                            ubah arah karier lo
                        </span>
                    </h2>
                </div>

                {/* Badge */}
                <div className="mt-10 sm:mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm text-white">
                        Cuma di Shaundju Academy
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>

                {/* Secondary Heading */}
                <div className="mx-auto mt-14 max-w-4xl text-center">
                    <h3 className="font-serif text-3xl leading-tight sm:text-5xl md:text-6xl">
                        <span className="text-[#9DFF70]">
                            Gak cuma teori,
                        </span>
                        <br />
                        <span className="text-white">
                            tapi bisa langsung dipraktikkan
                        </span>
                    </h3>

                   <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                        Setiap selesai satu BAB,
                        <br />
                        ada tugas yang bisa langsung lo coba di kantor.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-20">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex min-h-[260px] sm:min-h-[300px] flex-col items-center rounded-2xl lg:rounded-[28px] bg-[#04261B] px-5 sm:px-6 lg:px-8 py-8 sm:py-10 text-center"
                        >
                            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#9DFF70]">
                                <img
                                    src={benefit.icon}
                                    alt=""
                                    className="h-12 w-12 object-contain"
                                />
                            </div>

                            <h4 className="whitespace-pre-line text-xl font-semibold leading-snug text-[#9DFF70]">
                                {benefit.title}
                            </h4>

                            <p className="mt-5 text-sm leading-relaxed text-white/80">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 lg:mt-20 flex justify-center">
                    <CtaButton text="Mulai Belajar Sekarang" />
                </div>

                {/* Features */}
                <div className="mt-8 flex flex-col items-center gap-3 text-center text-sm text-white/80 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>75+ Materi Strategi Naik Gaji</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>Lifetime Access</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>Join Top Performer Community</span>
                    </div>
                </div>
            </div>
        </section>
    );
}