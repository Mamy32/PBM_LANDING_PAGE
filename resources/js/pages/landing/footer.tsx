import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            id="footer"
            className="relative border-t border-white/10 bg-[#070f2a] py-14 sm:py-16"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-lp-yellow-400 text-sm font-bold text-lp-blue-900">
                                b.
                            </span>
                            <span className="text-base font-semibold text-white">
                                bangunbisnis
                                <span className="text-lp-yellow-400">.id</span>
                            </span>
                        </div>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
                            Panduan praktis bangun bisnis lokal dari nol untuk
                            pemula yang serius mulai.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Navigasi
                        </p>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {[
                                { href: '#materi', label: 'Materi' },
                                { href: '#testimoni', label: 'Testimoni' },
                                { href: '#harga', label: 'Harga' },
                                { href: '#faq', label: 'FAQ' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-white/65 transition-colors hover:text-lp-yellow-400"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Hubungi Kami
                        </p>
                        <div className="mt-4 flex gap-3">
                            {[
                                { icon: MessageCircle, label: 'WhatsApp' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Mail, label: 'Email' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:border-lp-yellow-400/40 hover:bg-lp-yellow-400/10 hover:text-lp-yellow-400"
                                >
                                    <s.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                        <a
                            href="#harga"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-lp-yellow-400 px-5 py-2.5 text-sm font-semibold text-lp-blue-900 transition-all duration-200 hover:bg-lp-yellow-300 hover:-translate-y-0.5"
                        >
                            Mulai Sekarang
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-xs text-white/45">
                        © {new Date().getFullYear()} bangunbisnis.id · All
                        rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-xs text-white/55 transition-colors hover:text-white/80"
                        >
                            Kebijakan Privasi
                        </a>
                        <a
                            href="#"
                            className="text-xs text-white/55 transition-colors hover:text-white/80"
                        >
                            Syarat &amp; Ketentuan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
