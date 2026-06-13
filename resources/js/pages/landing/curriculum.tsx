import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';

const modules = [
    {
        number: '01',
        title: 'Kenapa Lo Kerja Keras Tapi Tetap Invisible',
        body: 'Bukan soal kurang usaha. Ada pola pikir spesifik yang bikin sebagian orang cepat naik dan sebagian lagi stagnan bertahun-tahun di posisi yang sama. Di modul ini lo bakal ngerti letak perbedaannya, dan mulai posisiin diri lo di sisi yang benar.',
    },
    {
        number: '02',
        title: 'Skill Interview Buat Jadi Kandidat Rebutan, Bukan Nunggu Dipanggil',
        body: 'HR dan hiring manager punya pola pikir tersendiri waktu seleksi kandidat. Kalau lo ngerti cara kerjanya, lo bisa jadi nama yang paling diingat dari semua yang apply, bukan sekadar pelengkap shortlist.',
    },
    {
        number: '03',
        title: 'Keliatan Lebih Senior Dari Jabatan Lo Sekarang',
        body: 'Orang yang cepat naik bukan selalu yang paling jago teknisnya, tapi yang bisa nyampaiin ide dengan cara yang bikin orang percaya. Modul ini ngajarin lo cara presentasi dan komunikasi visual yang bikin atasan dan klien ngeliat lo beda.',
    },
    {
        number: '04',
        title: 'Ngomong Singkat, Didengarkan, Langsung Dieksekusi',
        body: 'Komunikasi yang efektif bukan bakat lahir. Ada struktur di baliknya yang bisa dipelajari. Lo bakal tahu cara ngomong yang bikin orang paham cepat, setuju lebih mudah, dan ngeliat lo sebagai orang yang layak pegang tanggung jawab lebih besar.',
    },
    {
        number: '05',
        title: 'Rubah Persepsi Tim dan Boss lo untuk di Fast-Track Promote',
        body: 'Atasan lo punya gambaran sendiri soal siapa yang layak naik jabatan. Modul ini ngajarin lo cara ngatur proyek, handle tim, dan manage up dengan cara yang pelan-pelan ngubah persepsi mereka tentang lo, tanpa harus kerja lebih keras dari sekarang.',
    },
];

function AccordionItem({
    item,
    isOpen,
    onToggle,
    isLast,
}: {
    item: (typeof modules)[number];
    isOpen: boolean;
    onToggle: () => void;
    isLast: boolean;
}) {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`${isLast ? '' : 'border-b border-white/10'}`}>
            <button
                onClick={onToggle}
                className="flex w-full items-start gap-3 py-5 text-left sm:items-center sm:gap-4 sm:py-6 lg:py-7"
            >
                {/* Number badge */}
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#9DFF70] text-xs font-bold text-[#0C1F13] sm:mt-0 sm:h-9 sm:w-9 sm:text-sm">
                    {item.number}
                </span>

                {/* Title */}
                <span className="flex-1 pr-2 text-sm leading-snug font-semibold text-white sm:text-base lg:text-lg">
                    {item.title}
                </span>

                {/* Chevron */}
                <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#9DFF70] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {/* Collapsible body */}
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen
                        ? contentRef.current?.scrollHeight
                            ? `${contentRef.current.scrollHeight}px`
                            : '500px'
                        : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="pr-4 pb-5 pl-11 text-sm leading-relaxed text-white/70 sm:pl-13 sm:text-base lg:pr-8 lg:pl-13">
                    {item.body}
                </p>
            </div>
        </div>
    );
}

export default function Curriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="curriculum"
            className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white px-4 py-2 text-xs text-white sm:text-sm">
                        Curriculum
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>

                    <h2 className="mt-6 font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:mt-8 lg:text-5xl">
                        <span className="text-white">Apa Aja</span>{' '}
                        <span className="text-white">yang Bakal</span>
                        <br />
                        <span className="text-[#9DFF70]">Lo Pelajari</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base lg:max-w-2xl lg:text-lg">
                        5 modul intensif yang dirancang biar lo langsung bisa
                        aplikasiin di kerjaan, bukan sekadar teori.
                    </p>
                </div>

                {/* Accordion card */}
                <div className="mx-auto mt-10 max-w-5xl rounded-2xl bg-[#04261B] px-4 py-2 sm:px-6 sm:py-3 lg:mt-14 lg:rounded-[32px] lg:px-10 lg:py-4">
                    {modules.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => toggle(index)}
                            isLast={index === modules.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
