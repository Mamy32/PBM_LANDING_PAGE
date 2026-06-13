import { ChevronDown } from "lucide-react";

export default function Instructor() {
    return (
        <section
            id="pengajar"
            className="bg-[#9BC486] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white px-4 py-2 text-xs sm:text-sm text-white">
                        Meet The Expert
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="mb-10 lg:mb-16 text-center font-serif text-4xl sm:text-5xl font-semibold text-white">
                    Kenalan sama Mentor Lo:
                </h2>

                {/* Content */}
                <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">

                    {/* Left */}
                    <div className="flex flex-col items-center">

                        <img
                            src="/images/shaundju/oners.webp"
                            alt="Shaun Djuhari"
                            className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] rounded-full object-cover"
                            loading="lazy" decoding="async"
                        />

                        <div className="mt-6 rounded-full bg-[#9DFF70] px-6 py-2 sm:px-8 sm:py-3">
                            <span className="text-base sm:text-lg font-semibold text-[#123C2D]">
                                Shaun Djuhari
                            </span>
                        </div>

                    </div>

                    {/* Right */}
                    <div className="rounded-3xl lg:rounded-[36px] bg-[#143D31] p-6 sm:p-8 lg:p-10 text-white">

                        <p className="mb-8 text-base sm:text-lg italic leading-relaxed">
                            “Pas pertama kali kerja, pendapatan gue cuma di kisaran Rp50 juta per tahun.
                            Sekarang, angkanya sudah berkembang jadi lebih dari Rp2 miliar per tahun.”
                        </p>

                        <p className="mb-8 text-base sm:text-lg italic font-semibold text-[#9DFF70]">
                            Perjalanan ini sama sekali bukan karena faktor hoki.
                        </p>

                        <p className="mb-8 text-base sm:text-lg leading-relaxed">
                            Semua karena gue paham skill apa yang sebisa mungkin bikin kita dipercaya
                            pegang tanggung jawab besar, memimpin tim, sekaligus terus naik kelas
                            di dunia kerja.
                        </p>

                        <p className="mb-8 text-base sm:text-lg leading-relaxed">
                            Lewat Shaundju Academy, gue ngerangkum semua pelajaran,
                            kesalahan, plus strategi selama bertahun-tahun ini.
                        </p>

                        <p className="text-base sm:text-lg italic font-semibold text-[#9DFF70]">
                            Tujuannya satu,
                        </p>

                        <p className="mt-2 text-base sm:text-lg italic leading-relaxed">
                            biar lo gak perlu ngulang proses trial & error yang sama.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}