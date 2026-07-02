import { ArrowRight, CheckCircle } from 'lucide-react';

interface CtaButtonProps {
    text?: string;
    variant?: 'primary' | 'secondary' | 'dark' | 'hero';
    className?: string;
    id?: string;
    size?: 'default' | 'large';
    context?: 'light' | 'dark';
    vertical?: boolean;
    showArrow?: boolean;   // <-- add this
    compact?: boolean;
    onClick?: () => void;
    href?: string;
}

export default function CtaButton({
    text = 'Dapatkan Panduannya Sekarang',
    variant = 'primary',
    className = '',
    id,
    size = 'default',
    context = 'dark',
    vertical = false,
    showArrow = true,
    compact = false,
    onClick,
    href,
}: CtaButtonProps) {
const sizeClasses =
    size === 'large'
        ? 'px-5 py-3 text-[15px] min-w-[150px] sm:px-10 sm:py-5 sm:text-lg sm:min-w-[220px]'
        : 'px-7 py-4 text-sm sm:text-base';
    const variantClasses =
variant === 'hero'
    ? `
        bg-gradient-to-b
        from-[#466D59]
        to-[#2F5442]
        text-[#C8FF88]
        text-[14px]
        sm:text-lg
        border border-[#5C846F]
        shadow-[0_8px_25px_rgba(0,0,0,0.18)]
        hover:from-[#507764]
        hover:to-[#385D4B]
        whitespace-nowrap
      `
            : variant === 'primary'
              ? 'bg-[#4ADE80] text-[#0C1F13] shadow-lg shadow-[#4ADE80]/25 hover:bg-[#22C55E] hover:shadow-[#4ADE80]/40 hover:-translate-y-0.5 ring-1 ring-[#22C55E]/60'
              : variant === 'dark'
                ? 'bg-[#0C1F13] text-white shadow-lg shadow-black/30 hover:bg-black hover:-translate-y-0.5 ring-1 ring-white/10'
                : 'bg-white text-[#0C1F13] shadow-lg hover:bg-[#F0FFF4] hover:-translate-y-0.5 ring-1 ring-white/40';

    const proofText =
        context === 'dark' ? 'text-white/60' : 'text-[#0C1F13]/60';

    const proofIcon =
        context === 'dark' ? 'text-[#4ADE80]' : 'text-[#16A34A]';

    const features = [
        '75+ Materi',
        'Lifetime Access',
        '1000+ Members',
    ];

    return (
        <div className={`flex flex-col ${vertical ? 'items-start' : 'items-center'} gap-4 ${className}`}>
            <button
                type="button"
                id={id}
                onClick={() => {
                    onClick?.();

                    if (href) {
                        window.location.href = href;
                    } else {
                        document
                            .getElementById('harga')
                            ?.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className={`
    group
    inline-flex
    ${compact ? "w-auto" : "w-full sm:w-auto"}
    items-center
    justify-center
    rounded-full
    font-bold
    tracking-tight
    transition-all
    duration-300
    ${sizeClasses}
    ${variantClasses}
`}
            >
                <span>{text}</span>

                {showArrow && (
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                )}
            </button>

            <div

                className={
                    vertical
                        ? `flex flex-col items-start gap-2 text-xs ${proofText}`
                        : `flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm ${proofText}`
                }
            >
                {features.map((feature) => (
                    <span
                        key={feature}
                        className="inline-flex items-center gap-1.5"
                    >
                        <CheckCircle
                            className={`h-3.5 w-3.5 ${proofIcon}`}
                        />
                        {feature}
                    </span>
                ))}
            </div>
        </div>
    );
}