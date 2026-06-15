import { Head, router } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';

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

const WA_NUMBER = '62881080545047';

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

// ── WhatsApp Icon SVG ────────────────────────────────────────────────
function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

// ── Lock Icon SVG ────────────────────────────────────────────────────
function LockIcon({ className = 'h-4 w-4' }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

// ══════════════════════════════════════════════════════════════════════
// CHECKOUT PAGE
// ══════════════════════════════════════════════════════════════════════
export default function Checkout() {
    // Pre-select course from URL params
    const params = new URLSearchParams(window.location.search);
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

            <div className="min-h-screen bg-[#F5F5F0] antialiased selection:bg-[#4ADE80] selection:text-[#0C1F13]">
                {/* ─── Company Logos Header ─── */}
                <section className="border-b border-gray-200 bg-white py-8 sm:py-10 lg:py-12">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <h2 className="mb-6 text-center font-serif text-lg font-semibold text-[#1A3A22] sm:mb-8 sm:text-xl lg:text-2xl">
                            These are Where Shaun Dju Academiers Work
                        </h2>
                        <img
                            src="/images/shaundju/logo_company.webp"
                            alt="Companies where members work"
                            className="mx-auto w-full max-w-4xl"
                            loading="eager"
                            decoding="async"
                        />
                    </div>
                </section>

                {/* ─── Main Form Area ─── */}
                <section className="py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-2xl px-4 sm:px-6">
                        {/* Form Card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8 lg:p-10">
                            <h1 className="mb-6 text-center font-serif text-2xl font-semibold text-[#1A3A22] sm:mb-8 sm:text-3xl">
                                Order Form
                            </h1>

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
                                            className="mb-1.5 block text-sm font-medium text-[#1A3A22]"
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
                                            placeholder="John Doe"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 transition-all outline-none focus:ring-2 focus:ring-[#4ADE80] ${
                                                errors.fullName
                                                    ? 'border-red-400'
                                                    : 'border-gray-300'
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
                                            className="mb-1.5 block text-sm font-medium text-[#1A3A22]"
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
                                            placeholder="you@email.com"
                                            className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 transition-all outline-none focus:ring-2 focus:ring-[#4ADE80] ${
                                                errors.email
                                                    ? 'border-red-400'
                                                    : 'border-gray-300'
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
                                        className="mb-1.5 block text-sm font-medium text-[#1A3A22]"
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
                                        placeholder="85931018333"
                                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1A3A22] placeholder-gray-400 transition-all outline-none focus:ring-2 focus:ring-[#4ADE80] ${
                                            errors.whatsapp
                                                ? 'border-red-400'
                                                : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.whatsapp && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.whatsapp}
                                        </p>
                                    )}
                                </div>

                                {/* Course Selector */}
                                <div>
                                    <label
                                        htmlFor="courseId"
                                        className="mb-1.5 block text-sm font-medium text-[#1A3A22]"
                                    >
                                        Selected Course{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="courseId"
                                            value={form.courseId}
                                            onChange={(e) =>
                                                handleChange(
                                                    'courseId',
                                                    e.target.value,
                                                )
                                            }
                                            className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10 text-sm text-[#1A3A22] transition-all outline-none focus:ring-2 focus:ring-[#4ADE80] ${
                                                errors.courseId
                                                    ? 'border-red-400'
                                                    : 'border-gray-300'
                                            }`}
                                        >
                                            <option value="">
                                                — Pilih course —
                                            </option>
                                            {courses.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                        {/* Custom chevron */}
                                        <svg
                                            className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                    {errors.courseId && (
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.courseId}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>

                        {/* ─── Total Pembayaran Card ─── */}
                        <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-8">
                            <h3 className="text-base font-semibold text-[#1A3A22] sm:text-lg">
                                Total Pembayaran
                            </h3>

                            {selectedCourse ? (
                                <>
                                    <p className="mt-3 text-sm text-red-500 line-through">
                                        {formatRupiah(
                                            selectedCourse.originalPrice,
                                        )}
                                    </p>
                                    <p className="mt-1 text-3xl font-bold text-[#1A3A22] sm:text-4xl">
                                        {formatRupiah(selectedCourse.price)}
                                    </p>
                                    <p className="mt-2 text-sm font-medium text-[#22C55E]">
                                        Hemat{' '}
                                        {formatRupiah(
                                            selectedCourse.originalPrice -
                                                selectedCourse.price,
                                        )}
                                    </p>
                                </>
                            ) : (
                                <p className="mt-4 text-sm text-gray-400">
                                    Pilih course untuk melihat harga
                                </p>
                            )}
                        </div>

                        {/* ─── CTA Button ─── */}
                        <div className="mt-6 sm:mt-8">
                            <button
                                id="checkout-cta"
                                type="button"
                                onClick={handleSubmit as any}
                                className="group flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#22C55E] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#22C55E]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16A34A] hover:shadow-xl sm:py-5 sm:text-lg"
                            >
                                <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                                <span>Unlock my Academy Access</span>
                            </button>
                        </div>

                        {/* ─── Countdown Timer ─── */}
                        <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-5 py-6 text-center shadow-sm sm:mt-6 sm:rounded-3xl sm:px-8 sm:py-8">
                            <p className="mb-4 text-sm font-medium text-[#1A3A22] sm:text-base">
                                Harga Spesial berakhir dalam:
                            </p>

                            <div className="flex justify-center gap-3 sm:gap-4">
                                {[
                                    { value: countdown.days, label: 'Days' },
                                    { value: countdown.hours, label: 'Hours' },
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
                                        className="flex flex-col items-center"
                                    >
                                        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                                            {pad(unit.value)}
                                        </span>
                                        <span className="mt-1.5 text-[10px] text-gray-500 sm:text-xs">
                                            {unit.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ─── Disclaimer ─── */}
                        <p className="mt-6 px-1 text-xs leading-relaxed text-gray-500 sm:mt-8 sm:text-sm">
                            Dengan membeli salah satu produk, anda dianggap
                            menyetujui setiap ketentuan di website. Semua
                            pembayaran bersifat final dan tidak refundable.
                            Akses untuk Discord & Jadwal Course akan dikirim via
                            WhatsApp resmi Shaun Dju Academy setelah pembayaran.
                            Mohon dipastikan data yang akurat.
                        </p>

                        {/* ─── Trust Signals ─── */}
                        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8">
                            <p className="text-xs text-gray-500 sm:text-sm">
                                100% secure – instant access after payment
                            </p>

                            {/* Secure Badge */}
                            <div className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-3 py-1.5 shadow-sm">
                                <LockIcon className="h-3.5 w-3.5 text-[#1A3A22]" />
                                <span className="text-xs font-bold tracking-wider text-[#1A3A22]">
                                    SECURE
                                </span>
                            </div>

                            {/* Payment Logos */}
                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                                {['BCA', 'mandiri', 'QRIS', 'VISA', 'MC'].map(
                                    (name) => (
                                        <span
                                            key={name}
                                            className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold tracking-wide text-gray-600 shadow-sm sm:px-4 sm:py-2 sm:text-sm"
                                        >
                                            {name}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* ─── Back to Landing ─── */}
                        <div className="mt-8 text-center sm:mt-10">
                            <button
                                type="button"
                                onClick={() => router.visit('/')}
                                className="text-sm text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-[#1A3A22]"
                            >
                                ← Kembali ke halaman utama
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
