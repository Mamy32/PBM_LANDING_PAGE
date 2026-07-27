import { Head, router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import { Quote } from 'lucide-react';
// Import the Dialog components needed for zooming images!
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const alumniTestimonials = [
    {
        name: 'Thomas',
        role: 'INSEAD MBA Candidate',
        image: '/images/shaundju/testi02.webp',
        quote: 'Apa yang Shaun ngomongin itu bener semua brokkk, apalagi yang project management, client relationship, dll.',
    },
    {
        name: 'Jihad',
        role: 'Strategy at Pluang, ex-Shopee',
        image: '/images/shaundju/testi04.webp',
        quote: "Shaun's introduction to framework really helped me because I was never taught that in non-business major, especially at a non-target Indo school.",
    },
    {
        name: 'Harriet',
        role: 'ex-Singapore Management Consultant',
        image: '/images/shaundju/testi01.webp',
        quote: 'Most importantly Shaun showed me how to treat clients as real people instead of as a means to finish the project, I never had a doubt that Shaun is a good boss.',
    },
    {
        name: 'Vanessa',
        role: 'Graduating Senior, Oxford University',
        image: '/images/shaundju/testi05.webp',
        quote: 'Having a clear starting point of the types of slide I was able to design, was most helpful, jadi kebayang the different options we have to best present info/data & can work from there what intuitively makes sense.',
    },
    {
        name: 'Abdul',
        role: 'Assistant Manager at Grab',
        image: '/images/shaundju/testi07.webp',
        quote: 'I learned a lot dari training lo terutama cara berpikir kritis + framework buat solve issues. Kepake pas gue handle salah satu project B2B terbesar Grab di GrabFood. So thank you ya Coach Shaun.',
    },
    {
        name: 'Cyndi',
        role: 'Final Year Student, NUS Singapore',
        image: '/images/shaundju/testi08.webp',
        quote: 'From observing your work style I really admired how you work very gercep and how you handle clients juga, something that I wanna work towards!',
    },
];

// Reusable component to make any image zoomable
function ZoomableImage({
    src,
    alt,
    className = '',
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className={`cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${className}`}
                />
            </DialogTrigger>

            <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
                <img
                    src={src}
                    alt={alt}
                    className="max-h-[90vh] w-full rounded-xl object-contain"
                />
            </DialogContent>
        </Dialog>
    );
}

function CheckoutTestimonials() {
    return (
        <div className="mt-8 border-t border-gray-100 pt-8 sm:mt-12 sm:pt-10">
            <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[10px] font-semibold tracking-wider text-gray-500 uppercase sm:text-xs">
                    Testimonials
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold text-[#1A3A22] sm:text-3xl">
                    Apa Kata Alumni?
                </h2>

                <h3 className="mt-8 font-serif text-xl font-bold text-gray-500 sm:text-2xl">
                    Dipromosi ke
                </h3>
                <p className="mt-2 text-xl font-bold text-[#22C55E] sm:text-2xl">
                    Senior Assistant Vice President
                </p>
            </div>

            <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                    <div className="mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-gray-100 shadow-sm">
                        <img
                            src="/images/shaundju/profile.webp"
                            alt="Niek Astrini"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1A3A22]">
                        Niek Astrini
                    </h3>
                    <div className="mt-3 overflow-hidden rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/5 p-2 shadow-sm">
                        <ZoomableImage
                            src="/images/shaundju/proof1.webp"
                            alt="Phone testimonial"
                            className="w-[280px] max-w-full rounded-[14px] sm:w-[320px]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {alumniTestimonials.map((item) => (
                    <div
                        key={item.name}
                        className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                decoding="async"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-sm font-bold text-[#1A3A22]">
                                    {item.name}
                                </h4>
                                <p className="text-[11px] text-gray-500">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                        <Quote className="mt-3 h-5 w-5 text-gray-300" />
                        <p className="mt-2 text-xs leading-relaxed text-gray-600">
                            {item.quote}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <ZoomableImage
                        src="/images/shaundju/testimoni2.webp"
                        alt="Testimonial 1"
                        className="w-full object-cover"
                    />
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <ZoomableImage
                        src="/images/shaundju/Screenshot2.webp"
                        alt="Testimonial 2"
                        className="w-full object-cover"
                    />
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <ZoomableImage
                        src="/images/shaundju/Screenshot3.webp"
                        alt="Testimonial 3"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

// ── Course data ──────────────────────────────────────────────────────
const courses = [
    {
        id: 'first-jobbers',
        name: '2x Salary in 3 Years PLUS 5x Salary in 10 years',
        label: 'First Jobbers — 4 Modules',
        originalPrice: 2500000,
        price: 1950000,
    },
    {
        id: 'managers',
        name: 'Penetrate Executive Status & Triple Digit Salary',
        label: 'Managers — 5 Modules',
        originalPrice: 3500000,
        price: 2950000,
    },
];

const WA_NUMBER = '6287841393601';

// ── Helpers ──────────────────────────────────────────────────────────
function formatRupiah(n: number) {
    return 'Rp' + n.toLocaleString('id-ID');
}

function getCountdownTarget(): number {
    const KEY = 'shaundju_checkout_countdown';
    const stored = localStorage.getItem(KEY);
    if (stored) {
        const ts = parseInt(stored, 10);
        if (ts > Date.now()) return ts;
    }
    const target = Date.now() + 9 * 60 * 60 * 1000;
    localStorage.setItem(KEY, String(target));
    return target;
}

function useCountdown() {
    const [target] = useState(getCountdownTarget);
    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return { days, hours, minutes, seconds };
}

// ── Validation ───────────────────────────────────────────────────────
interface FormData {
    fullName: string;
    email: string;
    whatsapp: string;
    courseId: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    whatsapp?: string;
    courseId?: string;
}

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.fullName.trim()) {
        errors.fullName = 'Nama lengkap wajib diisi';
    } else if (data.fullName.trim().length < 2) {
        errors.fullName = 'Nama minimal 2 karakter';
    }

    if (!data.email.trim()) {
        errors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        errors.email = 'Format email tidak valid';
    }

    if (!data.whatsapp.trim()) {
        errors.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (!/^\d{9,15}$/.test(data.whatsapp.trim())) {
        errors.whatsapp = 'Nomor WA harus 9–15 digit angka';
    }

    if (!data.courseId) {
        errors.courseId = 'Pilih salah satu course';
    }

    return errors;
}

// ── Icons ────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function CheckCircleIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}

// ══════════════════════════════════════════════════════════════════════
// CHECKOUT PAGE
// ══════════════════════════════════════════════════════════════════════
export default function Checkout() {
    // Pre-select course from URL params
    const { url } = usePage();
    const query = url.split('?')[1] || '';
    const params = new URLSearchParams(query);
    const preselect = params.get('course') || '';

    const [form, setForm] = useState<FormData>({
        fullName: '',
        email: '',
        whatsapp: '',
        courseId: courses.find((c) => c.id === preselect)?.id || '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const selectedCourse = courses.find((c) => c.id === form.courseId);
    const countdown = useCountdown();

    const { trackPurchase } = useAnalytics();

    // Force light mode
    useEffect(() => {
        const htmlEl = document.documentElement;
        const wasDark = htmlEl.classList.contains('dark');
        htmlEl.classList.remove('dark');
        return () => {
            if (wasDark) htmlEl.classList.add('dark');
        };
    }, []);

    const handleChange = (field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (submitted) {
            const next = { ...form, [field]: value };
            const newErrors = validate(next);
            setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        const formErrors = validate(form);
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            // Scroll to first error
            const firstErrorField =
                formRef.current?.querySelector('.border-red-400');
            firstErrorField?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            return;
        }

        // Fire Meta Pixel Purchase + CAPI Purchase (server-side) with deduplication
        trackPurchase(selectedCourse?.price ?? 0, 'IDR', {
            course_id: form.courseId,
            order_type:
                selectedCourse?.id === 'managers'
                    ? 'pricing_manager'
                    : 'pricing_first_jobber',
        });

        // Build WA message
        const course = courses.find((c) => c.id === form.courseId)!;
        const message = [
            'Hi, I would like to enroll in the course:',
            `Full Name: ${form.fullName.trim()}`,
            `Email: ${form.email.trim()}`,
            `WhatsApp: ${form.whatsapp.trim()}`,
            `Selected Course: ${course.name}`,
            `Price: ${formatRupiah(course.price)}`,
            'Please help me with the enrollment process. Thank you!',
        ].join('\n');

        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    };

    // Pad number to 2 digits
    const pad = (n: number) => String(n).padStart(2, '0');

    return (
        <>
            <Head>
                <title>Checkout — Shaundju Academy</title>
                <meta
                    name="description"
                    content="Enroll in Shaundju Academy. Choose your package and start your career acceleration journey."
                />
            </Head>

            <div className="min-h-screen bg-[#F5F5F0] pb-16 antialiased selection:bg-[#4ADE80] selection:text-[#0C1F13]">
                {/* ─── Header & Stepper ─── */}
                <div className="border-b border-gray-200 bg-white py-6 sm:py-8">
                    <div className="relative mx-auto flex max-w-7xl items-center px-4 sm:px-6">

                        {/* Stepper centered */}
                        <div className="relative mx-auto flex w-full max-w-[400px] items-center justify-center sm:max-w-[500px]">
                            {/* Connecting horizontal line */}
                            <div className="absolute top-4 right-8 left-8 -z-10 h-[2px] bg-gray-200 sm:top-5"></div>
                            
                            <div className="z-10 flex w-full justify-between">
                                <div className="flex flex-col items-center bg-white px-2 sm:px-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A3A22] text-sm font-medium text-white sm:h-10 sm:w-10 sm:text-base">
                                        1
                                    </div>
                                    <span className="mt-2 text-xs font-medium text-[#1A3A22] sm:text-sm">
                                        Details
                                    </span>
                                </div>
                                <div className="flex flex-col items-center bg-white px-2 sm:px-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-500 sm:h-10 sm:w-10 sm:text-base">
                                        2
                                    </div>
                                    <span className="mt-2 text-xs text-gray-500 sm:text-sm">
                                        Payment
                                    </span>
                                </div>
                                <div className="flex flex-col items-center bg-white px-2 sm:px-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-500 sm:h-10 sm:w-10 sm:text-base">
                                        3
                                    </div>
                                    <span className="mt-2 text-xs text-gray-500 sm:text-sm">
                                        Confirmation
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
                    <h1 className="mb-10 text-center font-serif text-3xl font-bold text-[#1A3A22]">
                        Choose Your Course
                    </h1>

                    <div className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-2">
                        {/* Course Card 1: First Jobbers */}
                        <div
                            onClick={() =>
                                handleChange('courseId', 'first-jobbers')
                            }
                            className={`cursor-pointer rounded-2xl border p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:p-8 ${
                                form.courseId === 'first-jobbers'
                                    ? 'border-transparent bg-[#1A3A22] text-white ring-4 ring-[#1A3A22]'
                                    : 'border-gray-200 bg-white text-[#1A3A22]'
                            }`}
                        >
                            <h3 className="mb-4 pr-4 text-xl leading-tight font-bold sm:text-2xl">
                                2x Salary in 3 Years PLUS 5x Salary in 10 years
                            </h3>
                            <p
                                className={`mb-6 text-sm sm:text-base ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-gray-500'}`}
                            >
                                First Jobbers
                            </p>
                            <p
                                className={`mb-1 text-sm line-through ${form.courseId === 'first-jobbers' ? 'opacity-50' : 'text-gray-400'}`}
                            >
                                Rp2.500.000
                            </p>
                            <p className="mb-6 text-3xl font-bold sm:text-4xl">
                                Rp1.950.000
                            </p>
                            <p
                                className={`mb-4 text-sm ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-gray-500'}`}
                            >
                                4 Modules
                            </p>
                            <ul
                                className={`space-y-4 text-sm sm:text-base ${form.courseId === 'first-jobbers' ? '' : 'text-gray-600'}`}
                            >
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>Access to Module 1, 2, 3, 4</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Lifetime access for Module Videos,
                                        previous batch Live Session Recordings
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Open Q&A anytime via private Discord
                                        Community
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'first-jobbers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Personalized Homework Review by Shaun
                                        Dju
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Course Card 2: Managers */}
                        <div
                            onClick={() => handleChange('courseId', 'managers')}
                            className={`cursor-pointer rounded-2xl border p-6 shadow-md transition-all duration-300 hover:shadow-lg sm:p-8 ${
                                form.courseId === 'managers'
                                    ? 'border-transparent bg-[#1A3A22] text-white ring-4 ring-[#1A3A22]'
                                    : 'border-gray-200 bg-white text-[#1A3A22]'
                            }`}
                        >
                            <h3 className="mb-4 pr-4 text-xl leading-tight font-bold sm:text-2xl">
                                Penetrate Executive Status & Triple Digit Salary
                            </h3>
                            <p
                                className={`mb-6 text-sm sm:text-base ${form.courseId === 'managers' ? 'opacity-80' : 'text-gray-500'}`}
                            >
                                Managers
                            </p>
                            <p
                                className={`mb-1 text-sm line-through ${form.courseId === 'managers' ? 'opacity-50' : 'text-gray-400'}`}
                            >
                                Rp3.500.000
                            </p>
                            <p className="mb-6 text-3xl font-bold sm:text-4xl">
                                Rp2.950.000
                            </p>
                            <p
                                className={`mb-4 text-sm ${form.courseId === 'managers' ? 'opacity-80' : 'text-gray-500'}`}
                            >
                                5 Modules
                            </p>
                            <ul
                                className={`space-y-4 text-sm sm:text-base ${form.courseId === 'managers' ? '' : 'text-gray-600'}`}
                            >
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'managers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Access to Module 1, 2, 3, 4, 5
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'managers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Lifetime access for Module Videos,
                                        previous batch Live Session Recordings
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'managers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Open Q&A anytime via private Discord
                                        Community
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        className={`mt-0.5 h-5 w-5 shrink-0 ${form.courseId === 'managers' ? 'opacity-80' : 'text-[#1A3A22]/60'}`}
                                    />
                                    <span>
                                        Personalized Homework Review by Shaun
                                        Dju
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ─── Company Logos Header ─── */}
                <section className="py-4 sm:py-6">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <h2 className="mb-6 text-center font-serif text-lg font-semibold text-[#1A3A22] sm:mb-8 sm:text-xl lg:text-2xl">
                            These are Where Shaun Dju Academiers Work
                        </h2>
                        <img
                            src="/images/shaundju/logo_company.webp"
                            alt="Companies where members work"
                            className="mx-auto w-full max-w-4xl mix-blend-multiply"
                            loading="eager"
                            decoding="async"
                        />
                    </div>
                </section>

                {/* ─── Main Form Area ─── */}
                <section className="py-8 sm:py-12">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6">
                        {/* Form Card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
                            <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-[#1A3A22] sm:mb-8 sm:text-3xl">
                                Order Form
                            </h2>

                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                noValidate
                                className="space-y-5"
                            >
                                {/* Name + Email — 2 col on sm+ */}
                                <div className="grid gap-5 sm:grid-cols-2">
                                    {/* Full Name */}
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="mb-1.5 block text-xs font-medium text-gray-500"
                                        >
                                            Full Name{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            value={form.fullName}
                                            onChange={(e) =>
                                                handleChange(
                                                    'fullName',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your full name"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#4ADE80] ${
                                                errors.fullName
                                                    ? 'border-red-400'
                                                    : 'border-gray-200'
                                            }`}
                                        />
                                        {errors.fullName && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.fullName}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-1.5 block text-xs font-medium text-gray-500"
                                        >
                                            Email{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                handleChange(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your email"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#4ADE80] ${
                                                errors.email
                                                    ? 'border-red-400'
                                                    : 'border-indigo-100'
                                            }`}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div>
                                    <label
                                        htmlFor="whatsapp"
                                        className="mb-1.5 block text-xs font-medium text-gray-500"
                                    >
                                        WhatsApp Number{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="whatsapp"
                                        type="tel"
                                        inputMode="numeric"
                                        value={form.whatsapp}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(
                                                /\D/g,
                                                '',
                                            );
                                            handleChange('whatsapp', val);
                                        }}
                                        placeholder="Enter your WhatsApp number"
                                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 outline-none transition-all focus:ring-2 focus:ring-[#4ADE80] ${
                                            errors.whatsapp
                                                ? 'border-red-400'
                                                : 'border-gray-200'
                                        }`}
                                    />
                                    {errors.whatsapp && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.whatsapp}
                                        </p>
                                    )}
                                </div>

                                {/* ─── Total Pembayaran Card (Inside form visually) ─── */}
                                <div
                                    className={`mt-6 rounded-2xl border bg-white px-5 py-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] sm:mt-8 ${errors.courseId ? 'border-red-400' : 'border-gray-100'}`}
                                >
                                    <h3 className="text-sm font-semibold text-[#1A3A22] sm:text-base">
                                        Total Pembayaran
                                    </h3>

                                    {selectedCourse ? (
                                        <>
                                            <p className="mt-3 text-sm text-gray-400 line-through">
                                                {formatRupiah(
                                                    selectedCourse.originalPrice,
                                                )}
                                            </p>
                                            <p className="mt-1 text-2xl font-bold text-[#1A3A22] sm:text-3xl">
                                                {formatRupiah(
                                                    selectedCourse.price,
                                                )}
                                            </p>
                                            <p className="mt-2 text-xs font-medium text-[#22C55E]">
                                                Hemat{' '}
                                                {formatRupiah(
                                                    selectedCourse.originalPrice -
                                                        selectedCourse.price,
                                                )}
                                            </p>
                                        </>
                                    ) : (
                                        <p
                                            className={`mt-4 text-sm ${errors.courseId ? 'font-medium text-red-500' : 'text-gray-400'}`}
                                        >
                                            {errors.courseId ||
                                                'Pilih course di atas untuk melihat harga'}
                                        </p>
                                    )}
                                </div>

                                {/* ─── Countdown Timer ─── */}
                                <div className="mt-4 rounded-xl bg-gray-50 px-5 py-6 text-center sm:px-8">
                                    <p className="mb-4 text-sm font-semibold text-[#1A3A22]">
                                        Harga Spesial berakhir dalam:
                                    </p>

                                    <div className="flex justify-center gap-4 sm:gap-6">
                                        {[
                                            {
                                                value: countdown.days,
                                                label: 'Days',
                                            },
                                            {
                                                value: countdown.hours,
                                                label: 'Hours',
                                            },
                                            {
                                                value: countdown.minutes,
                                                label: 'Minutes',
                                            },
                                            {
                                                value: countdown.seconds,
                                                label: 'Seconds',
                                            },
                                        ].map((unit) => (
                                            <div
                                                key={unit.label}
                                                className="flex min-w-[2.5rem] flex-col items-center"
                                            >
                                                <span className="text-xl font-bold text-[#E12828] sm:text-2xl">
                                                    {pad(unit.value)}
                                                </span>
                                                <span className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                                                    {unit.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </form>

                            {/* ─── Disclaimer ─── */}
                            <p className="mt-6 px-1 text-[11px] leading-relaxed text-gray-400 sm:mt-8 sm:text-xs">
                                Dengan membeli salah satu produk, anda dianggap
                                menyetujui setiap ketentuan di website. Semua
                                pembayaran bersifat final dan tidak refundable.
                                Akses untuk Discord & Jadwal Course akan dikirim
                                via WhatsApp resmi Shaun Dju Academy setelah
                                pembayaran. Mohon dipastikan data yang akurat.
                            </p>

                            {/* ─── CTA Button ─── */}
                            <div className="mt-6 sm:mt-8">
                                <button
                                    id="checkout-cta"
                                    type="button"
                                    onClick={handleSubmit as any}
                                    className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1DA851] hover:shadow-xl sm:py-4 sm:text-lg"
                                >
                                    <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    <span>Unlock my Academy Access</span>
                                </button>
                            </div>

                            {/* ─── Trust Signals ─── */}
                            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8">
                                <p className="text-[11px] text-gray-400 sm:text-xs">
                                    100% secure - instant access after payment
                                </p>

                                {/* SSL Secure Badge */}
                                <img
                                    src="/images/shaundju/checkout-payment/ssl-payment.png"
                                    alt="SSL Secure Payment"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-8 w-auto object-contain sm:h-10"
                                />

                                {/* Payment Logos */}
                                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                                    {[
                                        {
                                            src: '/images/shaundju/checkout-payment/bca-payment.png',
                                            alt: 'BCA',
                                        },
                                        {
                                            src: '/images/shaundju/checkout-payment/mandiri-payment.png',
                                            alt: 'Mandiri',
                                        },
                                        {
                                            src: '/images/shaundju/checkout-payment/qris-payment.png',
                                            alt: 'QRIS',
                                        },
                                        {
                                            src: '/images/shaundju/checkout-payment/visa-mc-payment.png',
                                            alt: 'Visa & Mastercard',
                                        },
                                    ].map((logo) => (
                                        <img
                                            key={logo.alt}
                                            src={logo.src}
                                            alt={logo.alt}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-5 w-auto object-contain sm:h-6"
                                        />
                                    ))}
                                </div>
                            </div>

                            <CheckoutTestimonials />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}