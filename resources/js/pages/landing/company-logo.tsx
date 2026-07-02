export default function CompanyLogos() {
    return (
        <section className="relative overflow-hidden bg-white py-4 lg:py-6">
            {/* Fade left */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

            {/* Fade right */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="flex w-max animate-marquee items-center">
                {/* duplicated image for infinite loop */}
                {[1, 2].map((i) => (
                    <img
                        key={i}
                        src="/images/shaundju/logo_company.webp"
                        alt="Companies"
                        className="mr-16 h-12 w-auto lg:h-16"
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </div>
        </section>
    );
}