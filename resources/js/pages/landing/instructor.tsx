import { Award, Quote, TrendingUp, Zap } from 'lucide-react';

const achievements = [
    {
        icon: TrendingUp,
        value: '2x',
        label: 'Salary in 3 years',
        sub: 'Track record terbukti',
    },
    {
        icon: Zap,
        value: 'Rp 100Jt',
        label: 'Gaji/bulan di usia 25',
        sub: 'Bukan hoki, tapi sistem',
    },
    {
        icon: Award,
        value: 'Rp 2M+',
        label: 'Penghasilan/tahun',
        sub: 'Dari Rp 50Jt/tahun',
    },
];

export default function Instructor() {
    return (
        <section
            id="pengajar"
            className="relative bg-[#0C1F13] py-20 sm:py-28"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Portrait */}
                    <div className="lg:col-span-5">
                        <div className="relative mx-auto max-w-sm lg:mx-0">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#4ADE80]/25 via-[#16A34A]/15 to-transparent blur-3xl" />
                            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#4ADE80]/20 bg-white/[0.04] p-2 shadow-2xl shadow-black/50">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                                    <img
                                        src="/storage/mentor/mentor.jpeg"
                                        alt="Shaun Djuhari"
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    {/* Green tint overlay bottom */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0C1F13]/80 to-transparent" />
                                    <div className="absolute inset-x-4 bottom-4">
                                        <span className="inline-block rounded-full bg-[#4ADE80]/20 border border-[#4ADE80]/40 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4ADE80]">
                                            Coach Shaun
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* As seen on badge */}
                            <div className="absolute -right-3 top-6 hidden rounded-2xl border border-[#4ADE80]/20 bg-[#0C1F13]/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                                    As Seen On
                                </p>
                                <p className="text-sm font-bold text-white mt-0.5">
                                    YouTube &amp; Media
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                            Meet The Expert
                        </span>
                        <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Kenalan sama Mentor Lo:{' '}
                            <span className="text-[#4ADE80]">
                                Shaun Djuhari
                            </span>
                        </h2>
                        <p className="mt-3 text-sm font-medium text-white/60">
                            Strategic Leader · Career Coach · Content Creator
                        </p>

                        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                            <Quote className="h-7 w-7 text-[#4ADE80]/60" />
                            <p className="mt-3 text-base leading-relaxed text-white/80">
                                Pas pertama kali kerja, pendapatan gue cuma di kisaran Rp50 juta per tahun. Sekarang, angkanya sudah berkembang jadi lebih dari Rp2 miliar per tahun.
                            </p>
                            <p className="mt-3 text-base leading-relaxed text-white/80">
                                Perjalanan ini sama sekali bukan karena faktor hoki. Semua karena gue paham skill apa yang sebisa mungkin bikin kita dipercaya pegang tanggung jawab besar, memimpin tim, sekaligus terus naik kelas di dunia kerja.
                            </p>
                            <p className="mt-3 text-base font-bold leading-relaxed text-[#4ADE80]">
                                Tujuannya satu: biar lo gak perlu ngulang proses trial &amp; error yang sama.
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {achievements.map((a) => (
                                <div
                                    key={a.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#4ADE80]/30"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ADE80]/15 text-[#4ADE80] ring-1 ring-[#4ADE80]/30">
                                        <a.icon className="h-5 w-5" />
                                    </div>
                                    <p className="mt-4 text-xl font-extrabold text-white">
                                        {a.value}
                                    </p>
                                    <p className="text-xs font-semibold text-white/70">
                                        {a.label}
                                    </p>
                                    <p className="text-xs text-white/40 mt-0.5">
                                        {a.sub}
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
