import { router } from '@inertiajs/react';
import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

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

export default function Curriculum() {
    const { trackCTA, trackInitiateCheckout } = useAnalytics();

    return (
        <section
            id="curriculum"
            // White background to match the light theme in your screenshot
            className="bg-white py-16 lg:py-24"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-gray-300 px-5 py-1.5 text-xs font-medium text-gray-600 sm:text-sm">
                        Kurikulum
                    </div>

                    <h2 className="mt-6 font-serif text-3xl font-bold text-[#14312A] sm:text-4xl lg:mt-8 lg:text-[40px]">
                        Apa Aja yang Bakal Lo Pelajari
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base">
                        5 modul intensif yang dirancang biar lo langsung bisa aplikasiin di kerjaan, bukan sekadar teori.
                    </p>
                </div>

                {/* Cards List */}
                <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:gap-6">
                    {modules.map((item, index) => (
                        <div 
                            key={index} 
                            // Using a flex-row even on mobile keeps the number nicely aligned to the left
                            className="flex flex-row gap-5 rounded-[24px] bg-[#F7F3E9] p-6 sm:gap-8 sm:p-8"
                        >
                            {/* Number */}
                            <div className="shrink-0 sm:pt-1">
                                <span className="font-serif text-3xl font-bold text-[#A4B5A8] sm:text-4xl">
                                    {item.number}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex flex-col">
                                <span className="mb-2 text-[10px] font-bold tracking-widest text-gray-400 uppercase sm:mb-1 sm:text-xs">
                                    {item.tag}
                                </span>
                                <h3 className="mb-3 text-base font-bold text-[#17241E] sm:mb-2 sm:text-lg lg:text-xl">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* CTA */}
                <div className="mt-12 flex justify-center sm:mt-16">
                    <CtaButton
                        id="curriculum-cta"
                        text="Amankan Slot Sekarang"
                        variant="dark"
                        context="light"
                        showArrow={false}
                        onClick={() => {
                            const eventId = generateEventId();
                            trackCTA(
                                'curriculum',
                                'Amankan Slot Sekarang',
                                '/checkout?course=first-jobbers',
                                'AddToCart',
                                eventId
                            );
                            trackInitiateCheckout('first-jobbers');
                            // Delay slightly to ensure tracking fires before navigation
                            setTimeout(() => {
                                router.visit('/checkout?course=first-jobbers');
                            }, 300);
                        }}
                    />
                </div>

            </div>
        </section>
    );
}