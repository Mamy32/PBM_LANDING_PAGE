import { CheckCircle } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            highlight: "Kerja keras setiap hari",
            text: ", tapi yang dipromosi malah orang lain",
        },
        {
            highlight: "Ngarep gaji naik",
            text: " cuma bermodalkan loyalitas bertahun-tahun di perusahaan.",
        },
        {
            highlight: "Sering ambil kerjaan di luar jobdesc",
            text: ", tapi kompensasinya tetap sama",
        },
    ];

    return (
        <section className="bg-[#DDE7D5] py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        <div className="mb-10 inline-flex items-center rounded-full border border-[#173F33] px-4 py-2 text-sm text-[#173F33]">
                            The Reality Check
                        </div>

                        <h2 className="font-serif text-5xl leading-tight text-[#173F33]">
                            Kalo lo
                            <br />
                            <span className="text-[#8EEA6D]">
                                Relate sama ini..
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="rounded-[28px] border border-[#8EEA6D] bg-[#062B22] p-10">
                        <div className="space-y-8">
                            {problems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex gap-4">
                                        <CheckCircle
                                            size={20}
                                            className="mt-1 shrink-0 text-[#8EEA6D]"
                                        />

                                        <p className="text-lg leading-relaxed text-white">
                                            <span className="italic font-semibold text-[#8EEA6D]">
                                                {item.highlight}
                                            </span>
                                            {item.text}
                                        </p>
                                    </div>

                                    {index < problems.length - 1 && (
                                        <div className="mt-8 border-b border-[#1D5C4C]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}