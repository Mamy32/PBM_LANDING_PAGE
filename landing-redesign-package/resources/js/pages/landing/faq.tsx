import { HelpCircle, Plus } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
    {
        question: 'Apakah saya bisa diskusi setelah pembelian?',
        answer:
            'Tentu saja bisa! Setelah kamu membeli panduan, kamu bisa berdiskusi dengan saya terkait materi melalui DM Instagram atau Email.',
    },
    {
        question: 'Apakah cocok untuk yang benar-benar pemula?',
        answer:
            'Sangat cocok! Panduan ini memang dirancang khusus untuk pemula yang baru mau mulai bisnis. Semua materi dijelaskan dari dasar, tanpa asumsi kamu sudah tahu apapun sebelumnya. Bahasa yang dipakai juga sederhana dan mudah dimengerti.',
    },
    {
        question: 'Saya tidak paham teknologi, apakah bisa mengikuti?',
        answer:
            'Bisa! Kamu hanya perlu tahu cara menggunakan Google Spreadsheet dan menonton video. Jika kamu bisa membuka YouTube dan mengetik di komputer atau HP, kamu sudah cukup siap. Setiap langkah dijelaskan secara detail di video tutorial.',
    },
    {
        question: 'Berapa lama akses materinya?',
        answer:
            'Kamu mendapatkan akses selamanya. Sekali bayar, semua materi — video, spreadsheet, dan e-book — bisa kamu akses kapan saja tanpa batas waktu. Termasuk semua update materi di masa depan.',
    },
    {
        question: 'Apakah ada garansi uang kembali?',
        answer:
            'Ya, ada 100% garansi uang kembali. Kalau kamu merasa panduan ini tidak sesuai dengan ekspektasimu, saya kembalikan uangmu tanpa pertanyaan dan tanpa ribet.',
    },
    {
        question: 'Bagaimana cara aksesnya setelah bayar?',
        answer:
            'Setelah pembayaran berhasil, kamu akan langsung mendapatkan akses ke semua materi. Video tutorial, template spreadsheet, dan e-book bisa langsung kamu akses dan mulai pelajari.',
    },
    {
        question: 'Apakah ini semacam skema cepat kaya?',
        answer:
            'Bukan, sama sekali bukan. Panduan ini adalah buku panduan praktis yang mengajarkan langkah-langkah fundamental membangun bisnis lokal. Hasilnya bergantung pada usaha dan konsistensi kamu.',
    },
    {
        question:
            'Apakah panduan ini cocok untuk membangun bisnis skala besar atau korporat?',
        answer:
            'Tidak. Panduan ini berfokus untuk bangun Bisnis Lokal dan Small Business dari nol. Saya sengaja menghindari teori korporat yang rumit agar kamu bisa langsung fokus pada langkah praktis dan bisa segera mendapatkan pembeli pertama.',
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="relative bg-lp-blue-900 py-20 sm:py-28"
        >
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <HelpCircle className="h-3.5 w-3.5 text-lp-yellow-400" />
                        FAQ
                    </span>
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Pertanyaan yang{' '}
                        <span className="text-lp-yellow-400">
                            sering ditanyakan
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-white/60 sm:text-lg">
                        Belum nemu jawabannya? Hubungi kami langsung.
                    </p>
                </div>

                <div className="mt-12 space-y-3 sm:mt-14">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? 'border-lp-yellow-400/40 bg-white/[0.06]'
                                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                                }`}
                            >
                                <button
                                    id={`faq-item-${index}`}
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                                >
                                    <span
                                        className={`text-sm font-semibold sm:text-base ${
                                            isOpen
                                                ? 'text-lp-yellow-400'
                                                : 'text-white'
                                        }`}
                                    >
                                        {item.question}
                                    </span>
                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                            isOpen
                                                ? 'rotate-45 bg-lp-yellow-400 text-lp-blue-900'
                                                : 'bg-white/10 text-white/70'
                                        }`}
                                    >
                                        <Plus className="h-4 w-4" />
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-6 text-sm leading-relaxed text-white/70 sm:px-7 sm:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-white/60">
                        Masih ada pertanyaan lain?{' '}
                        <a
                            href="#footer"
                            className="font-semibold text-lp-yellow-400 underline-offset-4 hover:underline"
                        >
                            Hubungi kami sekarang
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
