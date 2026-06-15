import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

const faqItems = [
    {
        question: 'Apakah kelas ini cocok untuk fresh graduate?',
        answer: 'Ya, sangat cocok. Di awal karier, banyak hal yang tidak diajarkan di kampus, mulai dari cara berkomunikasi dengan atasan, membangun kredibilitas, hingga strategi naik jabatan. Semakin cepat Anda memahami ini, semakin cepat Anda menonjol dibanding rekan sebaya.',
    },
    {
        question:
            'Apakah kelas ini cocok untuk karyawan yang sudah berpengalaman?',
        answer: 'Ya. Kelas ini dirancang untuk profesional yang merasa kariernya mulai stagnan, sudah bekerja keras, tapi pertumbuhan terasa lambat. Anda akan belajar cara mengubah pendekatan agar bisa naik ke level berikutnya.',
    },
    {
        question:
            'Apakah ada jadwal kelas atau sesi tatap muka dengan Pak Shaun?',
        answer: 'Tidak ada jadwal kelas tetap dan tidak ada sesi tatap muka. Namun, Anda mendapatkan akses ke seluruh rekaman kelas sebelumnya yang bisa ditonton kapan saja, sesering yang Anda mau, sesuai ritme belajar Anda.',
    },
    {
        question: 'Apakah ada sesi mentoring langsung dengan Pak Shaun?',
        answer: 'Tidak ada sesi mentoring one-on-one. Seluruh materi disusun secara sistematis agar bisa dipelajari secara mandiri. Dari konsep dasar hingga penerapan praktis di dunia kerja nyata.',
    },
    {
        question: 'Apakah kelasnya live atau bisa diakses kapan saja?',
        answer: 'Kelas ini sepenuhnya on-demand dan tidak ada sesi live. Anda bisa menonton materi kapan saja dan dari mana saja, tanpa terikat jadwal. Cocok untuk Anda yang sibuk dengan pekerjaan atau aktivitas lain.',
    },
    {
        question: 'Berapa lama saya bisa mengakses materi?',
        answer: 'Akses ke seluruh modul diberikan seumur hidup (lifetime access). Tidak ada batas waktu. Anda bisa kembali menonton ulang materi kapan pun dibutuhkan.',
    },
    {
        question: 'Apakah materinya hanya teori?',
        answer: 'Tidak. Setiap modul dilengkapi dengan tugas praktik yang bisa langsung Anda terapkan di situasi kerja nyata. Tujuannya bukan sekadar paham secara konsep, tapi bisa langsung dieksekusi.',
    },
    {
        question: 'Bagaimana cara mengakses kelas setelah membeli?',
        answer: 'Setelah pembayaran dikonfirmasi, Anda akan mendapatkan akses langsung melalui email. Login ke platform, dan semua materi langsung tersedia untuk ditonton kapan saja.',
    },
    {
        question: 'Apakah kelas ini menjamin promosi atau kenaikan gaji?',
        answer: 'Tidak ada jaminan langsung, hasil tetap bergantung pada konsistensi dan penerapan Anda. Namun, kelas ini membekali Anda dengan kemampuan konkret yang dibutuhkan untuk tumbuh lebih cepat dan diperhatikan di tempat kerja.',
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { trackCTA } = useAnalytics();

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleClick = () => {
        trackCTA('faq_section', 'Chat via WA', '#harga');
        window.open('https://wa.me/62881080545047', '_blank');
    };

    return (
        <section
            id="faq"
            className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white px-4 py-2 text-xs text-white sm:text-sm">
                        FAQ
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>

                    <h2 className="mt-6 font-serif text-4xl leading-tight font-semibold text-[#9DFF70] sm:text-5xl">
                        Pertanyaan yang sering ditanyakan
                    </h2>
                </div>

                {/* FAQ Card */}
                <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-[#ECECEC] px-5 py-6 sm:px-8 lg:mt-14 lg:rounded-[32px] lg:px-10 lg:py-8">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-black/10 py-4 last:border-none sm:py-6"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between text-left"
                                >
                                    <span className="pr-4 text-base font-semibold text-[#123C2D] sm:text-lg">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 text-[#123C2D] transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <p className="mt-3 text-sm leading-relaxed text-[#123C2D]/80 sm:text-base">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-10 text-center lg:mt-14">
                    <p className="mb-5 text-sm text-white/80 sm:text-base">
                        Masih ada pertanyaan lain? Hubungi kami sekarang.
                    </p>

                    <button
                        type="button"
                        onClick={handleClick}
                        className="inline-flex items-center rounded-full bg-[#9DFF70] px-6 py-3 text-base font-semibold text-[#123C2D] transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
                    >
                        Chat via WA
                        <ChevronDown className="ml-2 h-4 w-4 -rotate-90" />
                    </button>
                </div> */}
            </div>
        </section>
    );
}
