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
                    ? 'border-b border-white/10 bg-lp-blue-900/85 backdrop-blur-xl shadow-lg shadow-black/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
                <a href="/" className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lp-yellow-400 text-sm font-bold text-lp-blue-900">
                        b.
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
                        bangunbisnis<span className="text-lp-yellow-400">.id</span>
                    </span>
                </a>
                <a
                    href="#harga"
                    id="navbar-cta"
                    className="hidden items-center gap-1.5 rounded-full bg-lp-yellow-400 px-5 py-2.5 text-sm font-semibold text-lp-blue-900 shadow-lg shadow-lp-yellow-400/20 transition-all duration-200 hover:bg-lp-yellow-300 hover:-translate-y-0.5 sm:inline-flex"
                >
                    Mulai Sekarang
                </a>
            </div>
        </nav>
    );
}
