export default function Footer() {
    return (
        <footer className="overflow-hidden bg-gradient-to-r from-[#0B3D2E] via-[#072B1F] to-[#031610] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
                {/* Top Row */}
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    {/* Logo */}
                    <div>
                        <img
                            src="/images/shaundju/logo_footer.webp"
                            alt="Shaundju Academy"
                            className="h-10 w-auto brightness-0 invert sm:h-12 lg:h-14"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Links */}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10 lg:my-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-white/70 sm:text-sm">
                        © {new Date().getFullYear()} PT Akademi Jurus Maut. All
                        rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
