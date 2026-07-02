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
        <section
            className="py-6"
            style={{ background }}
        >
            <div className="mx-auto max-w-7xl px-4">
                {/* Badge */}
                <div className="mb-6 flex justify-center">
                    <div
                        className="rounded-full border px-5 py-2 text-sm font-medium"
                        style={{
                            borderColor: badgeBorder,
                            color: badgeText,
                        }}
                    >
                        Dipercaya oleh professional dari
                    </div>
                </div>

                {/* Logos */}
                <div className="flex justify-center">
                    <img
                        src="/images/shaundju/logo_company.webp"
                        alt="Companies"
                        className="w-full max-w-6xl"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}