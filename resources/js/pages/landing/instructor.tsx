import { ChevronDown } from "lucide-react";

export default function Instructor() {
    return (
        <section
            id="pengajar"
            className="bg-[#9BC486] py-24"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white px-5 py-2 text-sm text-white">
                        Meet The Expert
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="mb-16 text-center font-serif text-5xl font-semibold text-white">
                    Kenalan sama Mentor Lo:
                </h2>

                {/* Content */}
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}
                    <div className="flex flex-col items-center">

                        <img
                            src="/images/shaundju/oners.png"
                            alt="Shaun Djuhari"
                            className="h-[320px] w-[320px] rounded-full object-cover"
                            loading="lazy"
                        />

                        <div className="mt-8 rounded-full bg-[#9DFF70] px-8 py-3">
                            <span className="text-lg font-semibold text-[#123C2D]">
                                Shaun Djuhari
                            </span>
                        </div>

                    </div>

                    {/* Right */}
                    <div className="rounded-[36px] bg-[#143D31] p-10 text-white">

                        <p className="mb-8 text-lg italic leading-relaxed">
                            “Pas pertama kali kerja, pendapatan gue cuma di kisaran Rp50 juta per tahun.
                            Sekarang, angkanya sudah berkembang jadi lebih dari Rp2 miliar per tahun.”
                        </p>

                        <p className="mb-8 text-lg italic font-semibold text-[#9DFF70]">
                            Perjalanan ini sama sekali bukan karena faktor hoki.
                        </p>

                        <p className="mb-8 text-lg leading-relaxed">
                            Semua karena gue paham skill apa yang sebisa mungkin bikin kita dipercaya
                            pegang tanggung jawab besar, memimpin tim, sekaligus terus naik kelas
                            di dunia kerja.
                        </p>

                        <p className="mb-8 text-lg leading-relaxed">
                            Lewat Shaundju Academy, gue ngerangkum semua pelajaran,
                            kesalahan, plus strategi selama bertahun-tahun ini.
                        </p>

                        <p className="text-lg italic font-semibold text-[#9DFF70]">
                            Tujuannya satu,
                        </p>

                        <p className="mt-2 text-lg italic leading-relaxed">
                            biar lo gak perlu ngulang proses trial & error yang sama.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}