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
        <div className="flex flex-col items-center">
            {/* Badge */}
            <div
                className="mb-5 rounded-full border px-5 py-2 text-sm"
                style={{
                    borderColor: badgeBorder,
                    color: badgeText,
                }}
            >
                Dipercaya oleh professional dari
            </div>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden py-2">
                {/* Left Fade */}
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
                    style={{
                        background: `linear-gradient(to right, ${background}, transparent)`,
                    }}
                />

                {/* Right Fade */}
                <div
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
                    style={{
                        background: `linear-gradient(to left, ${background}, transparent)`,
                    }}
                />

                <div className="flex min-w-max animate-marquee items-center">
                    {[...Array(2)].map((_, duplicate) => (
                        <div
                            key={duplicate}
                            className="flex shrink-0 items-center"
                        >
                            {Array.from({ length: 6 }).map((_, i) => (
                                <img
                                    key={`${duplicate}-${i}`}
                                    src="/images/shaundju/logo_company.webp"
                                    alt="Companies"
                                    className="mr-12 h-10 w-auto sm:h-12 lg:h-14"
                                    loading="lazy"
                                    decoding="async"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}