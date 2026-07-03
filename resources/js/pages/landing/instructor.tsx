import { ChevronDown } from 'lucide-react';

export default function Instructor() {
    return (
        <section id="pengajar" className="bg-[#9BC486] py-16 lg:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Badge */}
                <div className="mb-8 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full border border-white px-4 py-2 text-xs text-white sm:text-sm">
                        Meet The Expert
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="mb-10 text-center font-serif text-3xl font-semibold text-white sm:text-5xl lg:mb-16">
                    Kenalan sama Mentor Lo:
                </h2>

                {/* Content */}
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left */}
                    <div className="flex flex-col items-center">
                       <img
    src="/images/shaundju/oners.webp"
    alt="Shaun Djuhari"
    width={320}
    height={320}
    loading="lazy"
    decoding="async"
    className="
        h-[220px]
        w-[220px]
        rounded-full
        object-cover
        object-center
        sm:h-[280px]
        sm:w-[280px]
        lg:h-[320px]
        lg:w-[320px]
    "
/>

                        <div className="mt-6 rounded-full bg-[#9DFF70] px-6 py-2 sm:px-8 sm:py-3">
                            <span className="text-base font-semibold text-[#123C2D] sm:text-lg">
                                Shaun Djuhari
                            </span>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="rounded-3xl bg-[#143D31] p-6 text-white sm:p-8 lg:rounded-[36px] lg:p-10">
                        <p className="mb-8 text-base leading-relaxed italic sm:text-lg">
                            “Pas pertama kali kerja, pendapatan gue cuma di
                            kisaran Rp50 juta per tahun. Sekarang, angkanya
                            sudah berkembang jadi lebih dari Rp2 miliar per
                            tahun.”
                        </p>

                        <p className="mb-8 text-base font-semibold text-[#9DFF70] italic sm:text-lg">
                            Perjalanan ini sama sekali bukan karena faktor hoki.
                        </p>

                        <p className="mb-8 text-base leading-relaxed sm:text-lg">
                            Semua karena gue paham skill apa yang sebisa mungkin
                            bikin kita dipercaya pegang tanggung jawab besar,
                            memimpin tim, sekaligus terus naik kelas di dunia
                            kerja.
                        </p>

                        <p className="mb-8 text-base leading-relaxed sm:text-lg">
                            Lewat Shaundju Academy, gue ngerangkum semua
                            pelajaran, kesalahan, plus strategi selama
                            bertahun-tahun ini.
                        </p>

                        <p className="text-base font-semibold text-[#9DFF70] italic sm:text-lg">
                            Tujuannya satu,
                        </p>

                        <p className="mt-2 text-base leading-relaxed italic sm:text-lg">
                            biar lo gak perlu ngulang proses trial & error yang
                            sama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
