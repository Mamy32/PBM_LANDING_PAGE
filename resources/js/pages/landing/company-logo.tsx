interface CompanyLogosProps {
    background?: string;
    badgeBorder?: string;
    badgeText?: string;
}

export default function CompanyLogos({
    background = "#EEF5EA",
    badgeBorder = "#274A3B",
    badgeText = "#274A3B",
}: CompanyLogosProps) {
    return (
        <div className="flex flex-col items-center py-6">
            {/* Badge */}
            <div
                className="mb-6 rounded-full border px-5 py-2 text-sm font-medium"
                style={{
                    borderColor: badgeBorder,
                    color: badgeText,
                }}
            >
                Dipercaya oleh professional dari
            </div>

            {/* Logo Slider */}
            <div className="relative w-full overflow-hidden pb-6">
                {/* Left Fade */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
                    style={{
                        background: `linear-gradient(to right, ${background} 0%, transparent 100%)`,
                    }}
                />

                {/* Right Fade */}
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
                    style={{
                        background: `linear-gradient(to left, ${background} 0%, transparent 100%)`,
                    }}
                />

                {/* Marquee */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(2)].map((_, duplicate) => (
                        <img
                            key={duplicate}
                            src="/images/shaundju/logo_company.webp"
                            alt="Companies"
                            className="h-10 w-auto shrink-0 sm:h-12 lg:h-14"
                            loading="lazy"
                            decoding="async"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}