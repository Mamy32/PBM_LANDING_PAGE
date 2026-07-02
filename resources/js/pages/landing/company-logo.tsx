export default function CompanyLogos() {
    return (
        <div className="flex flex-col items-center">
            {/* Badge */}
            <div className="mb-6 rounded-full border border-[#274A3B] px-5 py-2 text-sm text-[#274A3B]">
                Dipercaya oleh professional dari
            </div>

            {/* Logo Slider */}
            <div className="relative w-full overflow-hidden py-2">
                {/* Fade left */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#EEF5EA] to-transparent" />

                {/* Fade right */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#EEF5EA] to-transparent" />

                <div className="flex w-max animate-marquee items-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <img
                            key={i}
                            src="/images/shaundju/logo_company.webp"
                            alt="Companies"
                            className="mr-12 h-10 w-auto sm:h-12 lg:h-14"
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}