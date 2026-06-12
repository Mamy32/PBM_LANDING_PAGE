import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
    return (
        <section
            id="garansi"
            className="relative overflow-hidden bg-[#0C1F13] py-20 sm:py-28"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-[#4ADE80]/25 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 text-center sm:p-12">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#4ADE80]/15 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#16A34A]/20 blur-3xl" />

                    <div className="relative">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#4ADE80] text-[#0C1F13] shadow-2xl shadow-[#4ADE80]/30 ring-4 ring-[#4ADE80]/20">
                            <ShieldCheck className="h-12 w-12" strokeWidth={2.2} />
                        </div>

                        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#4ADE80]/40 bg-[#4ADE80]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#4ADE80]">
                            Akses Terjamin
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Akses Sesuai Kebijakan Pembelian
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                            Akses kelas diberikan sesuai kebijakan yang berlaku saat pembelian. Pastikan lo baca ketentuan sebelum bergabung biar clear dari awal.
                        </p>

                        <div className="mt-8 inline-grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-[#0C1F13]/40 p-4 backdrop-blur-sm sm:gap-8 sm:p-6">
                            {[
                                'Akses jelas',
                                'Komunitas privat',
                                'Support aktif',
                            ].map((t) => (
                                <p
                                    key={t}
                                    className="text-xs font-bold text-white/80 sm:text-sm"
                                >
                                    ✓ {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
