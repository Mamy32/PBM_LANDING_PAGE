import { BookOpen, Gift, MessageSquare, Sparkles, Users, Video } from 'lucide-react';

import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const modules = [
    {
        icon: Video,
        title: '75+ Materi Video',
        description:
            'Video strategi naik gaji yang dipelajari secara sistematis. Dari mindset shift sampai tactical execution.',
        tag: 'Core',
    },
    {
        icon: BookOpen,
        title: 'Framework Eksklusif',
        description:
            'Komunikasi yang bikin lo keliatan lebih senior dari jabatan lo. Cara presentasi & ngomong yang bikin orang dengerin.',
        tag: 'Premium',
    },
    {
        icon: MessageSquare,
        title: 'PR & Action Steps',
        description:
            'Setiap modul diakhiri tugas praktik yang langsung bisa lo coba di kantor. Bukan cuma teori.',
        tag: 'Praktik',
    },
    {
        icon: Users,
        title: 'Top Performer Community',
        description:
            'Join komunitas privat bareng sesama profesional yang serius naik level. Saling support, sharing insights.',
        tag: 'Komunitas',
    },
];

export default function ValueStack() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="materi"
            className="relative bg-[#0C1F13] py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                        <Sparkles className="h-3.5 w-3.5 text-[#4ADE80]" />
                        Yang Lo Dapatkan
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Semua yang lo butuhkan untuk{' '}
                        <span className="text-[#4ADE80]">
                            tembus gaji impian
                        </span>
                    </h2>
                    <p className="mt-5 text-base text-white/65 sm:text-lg">
                        Bukan cuma video — lo dapet sistem lengkap, community, dan practical assignments untuk eksekusi.
                    </p>
                </div>

                {/* Modules grid */}
                <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-2">
                    {modules.map((item) => (
                        <div
                            key={item.title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4ADE80]/35 hover:shadow-2xl hover:shadow-black/30 sm:p-8"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4ADE80]/15 text-[#4ADE80] ring-1 ring-[#4ADE80]/30 transition-colors duration-300 group-hover:bg-[#4ADE80] group-hover:text-[#0C1F13]">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4ADE80]">
                                    {item.tag}
                                </span>
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65 grow">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Lifetime access highlight */}
                <div className="mt-6">
                    <div className="relative overflow-hidden rounded-2xl border border-[#4ADE80]/35 bg-gradient-to-r from-[#4ADE80]/12 via-[#4ADE80]/8 to-transparent p-6 sm:p-8">
                        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#4ADE80]/15 blur-3xl" />
                        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#4ADE80] text-[#0C1F13] shadow-xl shadow-[#4ADE80]/30">
                                <Gift className="h-8 w-8" />
                            </div>
                            <div className="grow text-center sm:text-left">
                                <span className="inline-block rounded-full bg-[#4ADE80] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0C1F13]">
                                    Bonus Eksklusif
                                </span>
                                <h3 className="mt-2 text-xl font-bold text-white">
                                    Rekaman Live Session Batch Sebelumnya
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-white/70">
                                    Akses ke semua rekaman live session dan tanya jawab dari batch-batch sebelumnya. Ratusan jam insight premium yang bisa lo tonton kapanpun.
                                </p>
                            </div>
                            <div className="text-center sm:text-right shrink-0">
                                <p className="text-xs uppercase tracking-wider text-white/50">
                                    Akses
                                </p>
                                <p className="text-2xl font-bold text-[#4ADE80]">
                                    Lifetime
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 sm:mt-16">
                    <CtaButton
                        id="value-cta"
                        text="Mulai Belajar Sekarang"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'value_stack_section',
                                'Mulai Belajar Sekarang',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
