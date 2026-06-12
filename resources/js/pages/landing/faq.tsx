import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
    {
        question: 'Apakah kelas ini cocok untuk fresh graduate?',
        answer:
            'Ya. Semakin cepat memahami dunia kerja, semakin cepat karier Anda berkembang.',
    },
    {
        question: 'Apakah kelas ini cocok untuk karyawan berpengalaman?',
        answer:
            'Ya. Cocok untuk profesional yang merasa kariernya mulai stagnan dan ingin naik ke level berikutnya.',
    },
    {
        question: 'Apakah pembelajarannya live?',
        answer:
            'Tidak. Kelas dapat diakses online secara fleksibel sesuai waktu Anda.',
    },
    {
        question: 'Apakah ada sesi mentoring langsung dengan Pak Shaun?',
        answer:
            'Tidak. Materi disusun untuk dipelajari secara mandiri dan sistematis.',
    },
    {
        question: 'Berapa lama akses kelas diberikan?',
        answer:
            'Sesuai kebijakan akses yang berlaku saat pembelian.',
    },
    {
        question: 'Apakah materinya hanya teori?',
        answer:
            'Tidak. Setiap modul dilengkapi tugas praktik yang dapat langsung diterapkan di dunia kerja.',
    },
    {
        question: 'Apakah kelas ini menjamin promosi atau kenaikan gaji?',
        answer:
            'Tidak. Namun Anda akan mempelajari kemampuan yang dibutuhkan untuk berkembang lebih cepat dalam karier.',
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
            className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-24"
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white px-5 py-2 text-sm text-white">
                        FAQ
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>

                    <h2 className="mt-8 font-serif text-5xl font-semibold leading-tight text-[#9DFF70]">
                        Pertanyaan yang sering ditanyakan
                    </h2>
                </div>

                {/* FAQ Card */}
                <div className="mx-auto mt-14 max-w-5xl rounded-[32px] bg-[#ECECEC] px-10 py-8">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-black/10 py-6 last:border-none"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between text-left"
                                >
                                    <span className="text-lg font-semibold text-[#123C2D]">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 text-[#123C2D] transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <p className="mt-4 text-base leading-relaxed text-[#123C2D]/80">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <p className="mb-5 text-white/80">
                        Masih ada pertanyaan lain? Hubungi kami sekarang.
                    </p>

                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full bg-[#9DFF70] px-8 py-4 text-lg font-semibold text-[#123C2D] transition-all duration-300 hover:scale-105"
                    >
                        Chat via WA
                        <ChevronDown className="-rotate-90 ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}