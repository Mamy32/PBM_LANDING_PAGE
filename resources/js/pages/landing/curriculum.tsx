import { ChevronDown } from 'lucide-react';
const modules = [
    {
        number: '01',
        title: 'Kenapa Lo Kerja Keras Tapi Tetap Invisible',
        body: 'Bukan soal kurang usaha. Ada pola pikir spesifik yang bikin sebagian orang cepat naik dan sebagian lagi stagnan bertahun-tahun di posisi yang sama. Di modul ini lo bakal ngerti letak perbedaannya, dan mulai posisiin diri lo di sisi yang benar.',
        tag: 'Mindset & Positioning',
    },
    {
        number: '02',
        title: 'Skill Interview Buat Jadi Kandidat Rebutan, Bukan Nunggu Dipanggil',
        body: 'HR dan hiring manager punya pola pikir tersendiri waktu seleksi kandidat. Kalau lo ngerti cara kerjanya, lo bisa jadi nama yang paling diingat dari semua yang apply, bukan sekadar pelengkap shortlist.',
        tag: 'Career Strategy',
    },
    {
        number: '03',
        title: 'Keliatan Lebih Senior Dari Jabatan Lo Sekarang',
        body: 'Orang yang cepat naik bukan selalu yang paling jago teknisnya, tapi yang bisa nyampaiin ide dengan cara yang bikin orang percaya. Modul ini ngajarin lo cara presentasi dan komunikasi visual yang bikin atasan dan klien ngeliat lo beda.',
        tag: 'Executive Presence',
    },
    {
        number: '04',
        title: 'Ngomong Singkat, Didengarkan, Langsung Dieksekusi',
        body: 'Komunikasi yang efektif bukan bakat lahir. Ada struktur di baliknya yang bisa dipelajari. Lo bakal tahu cara ngomong yang bikin orang paham cepat, setuju lebih mudah, dan ngeliat lo sebagai orang yang layak pegang tanggung jawab lebih besar.',
        tag: 'Communication',
    },
    {
        number: '05',
        title: 'Rubah Persepsi Tim dan Boss lo untuk di Fast-Track Promote',
        body: 'Atasan lo punya gambaran sendiri soal siapa yang layak naik jabatan. Modul ini ngajarin lo cara ngatur proyek, handle tim, dan manage up dengan cara yang pelan-pelan ngubah persepsi mereka tentang lo, tanpa harus kerja lebih keras dari sekarang.',
        tag: 'Leadership & Influence',
    },
];

function AccordionItem({
    item,
    isOpen,
    isLast,
}: {
    item: (typeof modules)[number];
    index: number;
    isOpen: boolean;
    onToggle: () => void;
    isLast: boolean;
}) {
    

    return (
        <div
            className={`group transition-all duration-200 ${
                isLast ? '' : 'border-b border-white/8'
            }`}
        >
            <div
                className="flex w-full items-center gap-4 py-5 text-left sm:py-6 lg:py-7"
            >
                {/* Module label block */}
                <div className="flex shrink-0 flex-col items-center gap-1">
                    <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold tracking-wider transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm ${
                            isOpen
                                ? 'bg-[#9DFF70] text-[#0C1F13] shadow-[0_0_16px_rgba(157,255,112,0.35)]'
                                : 'bg-white/8 text-white/60 group-hover:bg-white/12 group-hover:text-white/80'
                        }`}
                    >
                        {item.number}
                    </span>
                    <span
                        className={`text-[9px] font-semibold tracking-widest uppercase transition-colors duration-300 sm:text-[10px] ${
                            isOpen ? 'text-[#9DFF70]' : 'text-white/30 group-hover:text-white/50'
                        }`}
                    >
                        Module
                    </span>
                </div>

                {/* Divider line */}
                <div
                    className={`hidden h-10 w-px transition-colors duration-300 sm:block ${
                        isOpen ? 'bg-[#9DFF70]/30' : 'bg-white/10'
                    }`}
                />

                {/* Title + tag */}
                <div className="flex min-w-0 flex-1 flex-col gap-1.5 pr-2">
                    <span
                        className={`text-sm leading-snug font-semibold transition-colors duration-200 sm:text-base lg:text-lg ${
                            isOpen ? 'text-white' : 'text-white/85 group-hover:text-white'
                        }`}
                    >
                        {item.title}
                    </span>
                    <span
                        className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase transition-all duration-300 sm:text-xs ${
                            isOpen
                                ? 'bg-[#9DFF70]/15 text-[#9DFF70]'
                                : 'bg-white/5 text-white/35 group-hover:bg-white/8 group-hover:text-white/50'
                        }`}
                    >
                        {item.tag}
                    </span>
                </div>

                {/* Chevron */}
                <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-8 sm:w-8 ${
                        isOpen
                            ? 'bg-[#9DFF70]/15 text-[#9DFF70]'
                            : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/60'
                    }`}
                >
                    <ChevronDown className="h-4 w-4" />
                </div>
            </div>

            {/* Collapsible body */}
            <div className="overflow-visible">
                {/* Indent to align with title */}
                <div className="pb-5 pl-[60px] pr-4 sm:pl-[73px] lg:pr-8">
                    {/* Accent bar */}
                    <div className="mb-4 h-px w-full bg-gradient-to-r from-[#9DFF70]/40 via-[#9DFF70]/10 to-transparent" />
                    <p className="text-sm leading-relaxed text-white/65 sm:text-base">
                        {item.body}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Curriculum() {
    return (
        <section
            id="curriculum"
            className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-16 lg:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white px-4 py-2 text-xs text-white sm:text-sm">
                        Modules
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
                <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#04261B] px-4 sm:px-6 lg:mt-14 lg:rounded-[28px] lg:px-10">
                    {modules.map((item, index) => (
                        <AccordionItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={true}
                            onToggle={() =>{}}
                            isLast={index === modules.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
