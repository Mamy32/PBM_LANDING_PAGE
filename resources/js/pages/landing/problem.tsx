export default function Problem() {
    const timeline = [
        { role: 'Product Management Intern', salary: '50+jt/thn' },
        { role: 'CEO Office', company: 'GoTo', salary: '300+jt/thn' },
        { role: 'Game Operations Associate', company: 'Garena, Singapore', salary: '400+jt/thn' },
        { role: 'Business Analyst', salary: '500+jt/thn' },
        { role: 'Senior Business Analyst', salary: '700+jt/thn' },
        { role: 'Associate', salary: '1,3+ M/thn' },
        { role: 'Project Manager', company: 'Kearney', salary: '2+ M/thn' },
    ];

    return (
        <section
            id="problem"
            className="bg-[#F7F3E9] pb-16 pt-8 lg:pb-24 lg:pt-12"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* HEADLINE */}
                <div className="mb-10 text-center sm:mb-16">
                    <div className="mb-5 inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-bold text-gray-600 sm:text-sm">
                        Cerita Gua
                    </div>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-[#14312A] sm:text-4xl lg:text-5xl">
                        Dulu Disuruh-suruh, Sekarang Bisa Bebas Dengan Gaji 2+ Miliar / Tahun
                    </h2>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* LEFT CARD (Timeline) */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="space-y-6">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1A3A22]" />
                                        <div>
                                            <p className="font-bold text-[#1A3A22] sm:text-[17px]">{item.role}</p>
                                            {item.company && (
                                                <p className="mt-0.5 text-[13px] text-gray-500">{item.company}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="whitespace-nowrap rounded-full border border-gray-200 px-4 py-1.5 text-xs font-bold text-[#1A3A22] sm:text-sm">
                                        {item.salary}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (Dulu, Titik Balik, Sekarang) */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* Box 1: Dulu */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                            <h3 className="mb-2 font-bold text-[#17241E]">Dulu</h3>
                            <p className="text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                                Gua cuma disuruh-suruh. Semua kerjaan based on perintah.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 2: Titik Balik */}
                        <div className="rounded-2xl border border-[#B08945] bg-white p-6 shadow-sm sm:p-7">
                            <h3 className="mb-2 font-bold text-[#B08945]">Titik Balik</h3>
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                                Tapi pelan-pelan gua sadar kalau harus kelihatan punya value, bukan cuma rajin, tapi strategis.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center text-[#B08945]">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>

                        {/* Box 3: Sekarang */}
                        <div className="rounded-2xl bg-[#14312A] p-6 shadow-md sm:p-7">
                            <h3 className="mb-2 font-bold text-[#4ADE94]">Sekarang</h3>
                            <p className="text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                                Dari kerja buat bayar tagihan, sekarang gue punya kebebasan milih proyek, atur waktu, dan hidup dengan gaya yang gue mau
                            </p>
                        </div>

                        {/* Footer Text */}
                        <p className="mt-4 text-sm font-bold leading-relaxed text-[#17241E] sm:text-base">
                            Semua itu bukan sulap. Ada caranya yang bisa lu terapin dan itu Jurus Maut yang gue ajarin di Shaun Dju Academy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}