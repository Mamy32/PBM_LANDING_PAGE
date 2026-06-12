import { AlertCircle } from 'lucide-react';

const painPoints = [
    {
        title: 'Bingung mulai dari mana',
        body: 'Mau belajar bisnis tapi tidak tahu harus ke siapa dan langkah pertamanya apa.',
    },
    {
        title: 'Takut salah langkah',
        body: 'Khawatir buang waktu di hal yang salah sebelum bisnis benar-benar jalan.',
    },
    {
        title: 'Takut gagal & rugi',
        body: 'Modal terbatas, satu kesalahan kecil rasanya bisa langsung menghabiskannya.',
    },
    {
        title: 'Tidak ada panduan jelas',
        body: 'Belum ada blueprint step-by-step yang bisa kamu ikuti dari nol sampai jadi.',
    },
    {
        title: 'Overload informasi',
        body: 'Konten di internet terlalu banyak dan saling bertentangan — bukannya jelas, malah pusing.',
    },
    {
        title: 'Niat lama, eksekusi nol',
        body: 'Sudah bertahun-tahun ingin mulai bisnis, tapi terus-terusan ditunda.',
    },
];

export default function Problem() {
    return (
        <section id="masalah" className="relative bg-lp-blue-900 py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <AlertCircle className="h-3.5 w-3.5 text-lp-yellow-400" />
                        Reality Check
                    </span>
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Kalau kamu{' '}
                        <span className="text-lp-yellow-400">relate</span> sama
                        ini, kamu nggak sendiri.
                    </h2>
                    <p className="mt-4 text-base text-white/60 sm:text-lg">
                        Hampir semua calon pebisnis pemula mentok di hal yang
                        sama. Lihat dulu, ada poin yang nempel di kamu?
                    </p>
                </div>

                <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {painPoints.map((p, i) => (
                        <div
                            key={p.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-lp-yellow-400/30 hover:bg-white/[0.06]"
                        >
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lp-yellow-400/0 blur-2xl transition-all duration-500 group-hover:bg-lp-yellow-400/20" />
                            <div className="relative">
                                <span className="inline-block text-xs font-semibold tracking-wider text-lp-yellow-400/80">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-3 text-lg font-bold text-white">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/60">
                                    {p.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
