import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/10 bg-[#0C1F13]/90 backdrop-blur-xl shadow-lg shadow-black/30'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
                <a href="/" className="flex items-center gap-4">
                    <img
                        src="/images/shaundju/logo_header.webp"
                        alt="Shaundju Academy Logo"
                        className="h-12 w-auto object-contain"
                        loading="eager" decoding="async"
                    />

                    <span className="text-lg font-bold tracking-tight text-white">
                        Shaundju<span className="text-[#4ADE80]"> Academy</span>
                    </span>
                </a>
                <a
                    href="#harga"
                    id="navbar-cta"
                    className="hidden items-center gap-1.5 rounded-full bg-[#4ADE80] px-5 py-2.5 text-sm font-bold text-[#0C1F13] shadow-lg shadow-[#4ADE80]/20 transition-all duration-200 hover:bg-[#22C55E] hover:-translate-y-0.5 sm:inline-flex"
                >
                    Mulai Sekarang
                </a>
            </div>
        </nav>
    );
}
