export default function CompanyLogos() {
    return (
        <section className="bg-[#F7F3E9] py-10 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h3 className="mb-8 font-serif text-xl font-bold text-[#1A3A22] sm:text-2xl lg:text-3xl">
                    Trusted by Corporate Superstars from
                </h3>
                <div className="flex justify-center">
                    <img
                        src="/images/shaundju/logo_company.webp"
                        alt="Companies"
                        className="w-full max-w-5xl mix-blend-multiply opacity-80 grayscale"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}