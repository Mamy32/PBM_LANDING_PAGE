export default function CompanyLogos() {
    return (
        <div className="flex flex-col items-center bg-[#EEF5EA]">
            <img
                src="/images/shaundju/logo_company.webp"
                alt="Companies"
                className="w-full max-w-6xl"
                width={665}
                height={100}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </div>
    );
}