import { Award, GraduationCap, Quote, Users } from 'lucide-react';

const achievements = [
    {
        icon: Users,
        value: '7.000+',
        label: 'Pebisnis dibimbing',
    },
    {
        icon: GraduationCap,
        value: 'S2 MM',
        label: 'Magister Manajemen',
    },
    {
        icon: Award,
        value: '12+ thn',
        label: 'Pengalaman bisnis',
    },
];

export default function Instructor() {
    return (
        <section
            id="pengajar"
            className="relative bg-lp-blue-900 py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Portrait */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-sm lg:mx-0">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-lp-yellow-400/30 via-lp-blue-500/20 to-transparent blur-3xl" />
                            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/40">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                    <img
                                        src="/storage/mentor/mentor.jpeg"
                                        alt="Mohammad Rashid Damanhuri"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full border border-lp-yellow-400/30 bg-lp-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lp-yellow-300">
                            Meet The Expert
                        </span>
                        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Kenalan sama mentor kamu:{' '}
                            <span className="text-lp-yellow-400">
                                Mohammad Rashid D.
                            </span>
                        </h2>
                        <p className="mt-3 text-sm font-medium text-white/60">
                            S.I.Kom., M.M. · Pendiri bangunbisnis.id
                        </p>

                        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                            <Quote className="h-7 w-7 text-lp-yellow-400/70" />
                            <p className="mt-3 text-base leading-relaxed text-white/80">
                                Dulu pas saya mulai bisnis 12 tahun lalu, akses
                                belajar nggak segampang sekarang. Saya harus
                                belajar sendiri dan jatuh bangun lebih lama dari
                                yang seharusnya.
                            </p>
                            <p className="mt-3 text-base leading-relaxed text-white/80">
                                Panduan ini saya buat berdasarkan pengalaman
                                pribadi dan ilmu kuliah S2 bisnis. Saya jelasin
                                pakai bahasa sehari-hari biar gampang dipahami
                                orang yang baru mau mulai bisnis.
                            </p>
                            <p className="mt-3 text-base font-semibold leading-relaxed text-lp-yellow-400">
                                Tujuannya satu: biar kamu nggak perlu ngulang
                                proses trial &amp; error yang sama.
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {achievements.map((a) => (
                                <div
                                    key={a.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-lp-yellow-400/30"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lp-yellow-400/15 text-lp-yellow-400 ring-1 ring-lp-yellow-400/30">
                                        <a.icon className="h-5 w-5" />
                                    </div>
                                    <p className="mt-4 text-xl font-bold text-white">
                                        {a.value}
                                    </p>
                                    <p className="text-xs text-white/55">
                                        {a.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
