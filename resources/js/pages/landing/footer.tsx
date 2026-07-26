export default function Footer() {
    return (
        <footer className="overflow-hidden bg-gradient-to-r from-[#0B3D2E] via-[#072B1F] to-[#031610] py-10 lg:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                
                {/* Content Row */}
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
                    
                    {/* LEFT SIDE: Brand Logo & Address */}
                    <div className="flex flex-col gap-4 text-left">
                        <img
                            src="/images/shaundju/logo_footer.webp"
                            alt="Shaundju Academy"
                            // CHANGED: Reduced from h-14 to h-8 so it elegantly matches the navbar logo size
                            className="h-6 w-auto brightness-0 invert sm:h-7 lg:h-8"
                            loading="lazy"
                            decoding="async"
                        />
                        
                        <div className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                            <p>PT Akademi Jurus Maut</p>
                            <p>JL. Pantai Indah Utara 2 C1, Kapuk Muara, Jakarta</p>
                            <p>Utara</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Contact Info */}
                    <div className="flex flex-col gap-1 text-left text-[13px] text-white/70 sm:text-sm md:text-right">
                        <p>WhatsApp: +62 878-4139-3601</p>
                        <p>Instagram: @shaundju</p>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-white/10 lg:my-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-white/50 sm:text-sm">
                        © {new Date().getFullYear()} PT Akademi Jurus Maut. All
                        rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}