export default function Footer() {
    return (
        <footer className="overflow-hidden bg-gradient-to-r from-[#0B3D2E] via-[#072B1F] to-[#031610] py-10 lg:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                
                {/* Content Row */}
                <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
                    
                    {/* Left Column (Logo + Address) */}
                    <div className="flex flex-col items-start text-left">
                        {/* FIX: Added object-contain and dimensions so it doesn't stretch on mobile! */}
                        <img
                            src="/images/shaundju/logo_footer.webp"
                            alt="Shaundju Academy"
                            width="180"
                            height="60"
                            className="h-10 w-auto object-contain brightness-0 invert sm:h-12"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="mt-6 space-y-1 text-sm leading-relaxed text-white/80">
                            <p className="font-semibold text-white/90">PT Akademi Jurus Maut</p>
                            <p>JL. Pantai Indah Utara 2 C1, Kapuk Muara, Jakarta Utara</p>
                        </div>
                    </div>

                    {/* Right Column (Contact Info) */}
                    <div className="flex flex-col items-start text-left md:items-start">
                        <div className="mt-1 space-y-1 text-sm leading-relaxed text-white/80">
                            <p>WhatsApp: +62 878-4139-3601</p>
                            <p>Instagram: @shaundju</p>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-white/10 lg:my-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-white/50 sm:text-sm">
                        © {new Date().getFullYear()} PT Akademi Jurus Maut. All rights reserved
                    </p>
                </div>

            </div>
        </footer>
    );
}