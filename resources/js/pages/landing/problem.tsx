import { AlertCircle } from 'lucide-react';

const painPoints = [
    {
        title: 'Kerja keras tiap hari, yang dipromosi orang lain',
        body: 'Lo udah all-in, lembur, ambil ekstra kerjaan — tapi atasan malah pilih orang yang kelihatan lebih "visible" dari lo.',
    },
    {
        title: 'Ngarep naik gaji cuma modal loyalitas',
        body: 'Bertahun-tahun setia di perusahaan, tapi gaji lo stuck. Loyalitas doang ternyata gak cukup.',
    },
    {
        title: 'Sering ambil kerjaan di luar jobdesc, kompensasinya sama',
        body: 'Lo bantu tim lain, kerja double, tapi nilai dan gaji lo gak berubah. Kerja lebih, dapat sama.',
    },
    {
        title: 'Gak tahu cara positioning diri yang benar',
        body: 'Lo rajin, lo pintar — tapi atasan gak ngeliat lo sebagai kandidat leader. Sesuatu yang salah dari cara lo present diri.',
    },
    {
        title: 'Karier stagnan padahal udah pengalaman',
        body: 'Udah beberapa tahun kerja, tapi rasanya naik jabatan makin susah. Padahal teman angkatan lo udah jauh di depan.',
    },
    {
        title: 'Networking banyak tapi gak ada hasilnya',
        body: 'Lo rajin attend event, connect sama orang baru — tapi gak pernah convert jadi peluang nyata buat karier lo.',
    },
];

export default function Problem() {
    return (
        <section id="masalah" className="relative bg-[#0C1F13] py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-red-500/8 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                        <AlertCircle className="h-3.5 w-3.5 text-[#4ADE80]" />
                        The Reality Check
                    </span>
                    <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Kalo lo{' '}
                        <span className="text-[#4ADE80]">relate</span> sama ini..
                    </h2>
                    <p className="mt-4 text-base text-white/60 sm:text-lg">
                        Hampir semua karyawan top performer mentok di titik yang sama. Lo gak sendiri — tapi ada yang beda dari cara mereka keluar dari situasi ini.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {painPoints.map((p, i) => (
                        <div
                            key={p.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#4ADE80]/30 hover:bg-white/[0.06]"
                        >
                            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#4ADE80]/0 blur-2xl transition-all duration-500 group-hover:bg-[#4ADE80]/15" />
                            <div className="relative">
                                <span className="inline-block text-xs font-bold tracking-wider text-[#4ADE80]/70">
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
