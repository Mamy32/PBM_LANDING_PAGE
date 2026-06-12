export default function Footer() {
    return (
                        <footer
  className="
    py-24
    bg-gradient-to-r
    from-[#0B3D2E]
    via-[#072B1F]
    to-[#031610]
    overflow-hidden
  "
>
            <div className="mx-auto max-w-7xl px-6 py-10">
                {/* Top Row */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Logo */}
                    <div>
                        <img
                            src="/images/shaundju/logo_footer.png"
                            alt="Shaundju Academy"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <a
                            href="/privacy-policy"
                            className="text-sm text-white hover:text-[#9DFF70]"
                        >
                            Kebijakan Privasi
                        </a>

                        <a
                            href="/terms"
                            className="text-sm text-white hover:text-[#9DFF70]"
                        >
                            Syarat & Ketentuan
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()} Shaundju Academy. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}