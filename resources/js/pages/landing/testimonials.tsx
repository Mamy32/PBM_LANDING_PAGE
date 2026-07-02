import { Check, Quote } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const testimonials = [
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

export default function Testimonials() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="testimoni"
            className="relative overflow-hidden pt-12 pb-24 sm:pt-16"
            style={{
                background:
                    'linear-gradient(90deg,#123C2D 0%,#1E4D3A 50%,#123C2D 100%)',
            }}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-xs text-white sm:text-sm">
                        Testimonials
                    </div>

                    <h2 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl">
                        Dipromosi ke
                    </h2>

                    <p className="mt-4 text-base text-[#9DFF70] sm:text-lg lg:text-xl">
                        Senior Assistant Vice President
                    </p>
                </div>

                {/* Screenshots */}
               <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-6 lg:mt-20 lg:flex-row lg:items-start lg:gap-10">
                    <div className="flex w-full max-w-[380px] flex-col items-center">
                       {/* Profile Photo */}
                        <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white/15 shadow-lg">
                            <img
                                src="/images/shaundju/profile.webp"
                                alt="Niek Astrini"
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <h3 className="text-center text-2xl font-semibold text-[#9DFF70] sm:text-3xl">
                            Niek Astrini
                        </h3>

                        {/* Proof Screenshot */}
                        <img
                            src="/images/shaundju/proof1.webp"
                            loading="lazy"
                            decoding="async"
                            alt="Phone testimonial"
                            className="mt-6 w-[280px] max-w-full rounded-2xl sm:w-[340px] lg:w-[380px]"
                        />
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-2xl bg-[#04261B] p-5 sm:p-6 lg:rounded-[28px] lg:p-8"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div>
                                    <h4 className="font-bold text-white">
                                        {item.name}
                                    </h4>

                                    <p className="text-sm text-[#9DFF70]">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                            <Quote className="mt-4 h-6 w-6 text-white sm:mt-6 sm:h-8 sm:w-8" />

                            <p className="mt-3 text-sm leading-relaxed text-white/80 sm:mt-4">
                                {item.quote}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Right: 3 screenshots — same width as proof, equal height */}
                <div className="mx-auto mt-10 flex flex-col gap-3 sm:mt-12 lg:mt-16 lg:w-full lg:max-w-5xl">
                    <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:gap-6">
                        <div className="aspect-[4/3] w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[340px] lg:w-[320px]">
                            <img
                                src="/images/shaundju/testimoni2.webp"
                                loading="lazy"
                                decoding="async"
                                alt="Testimonial 1"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <div className="aspect-[4/3] w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[340px] lg:w-[320px]">
                            <img
                                src="/images/shaundju/Screenshot2.webp"
                                loading="lazy"
                                decoding="async"
                                alt="Testimonial 2"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <div className="aspect-[4/3] w-[280px] overflow-hidden rounded-2xl shadow-lg sm:w-[340px] lg:w-[320px]">
                            <img
                                src="/images/shaundju/Screenshot3.webp"
                                loading="lazy"
                                decoding="async"
                                alt="Testimonial 3"
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>



                {/* CTA */}
                <div className="mt-12 text-center lg:mt-16">
                    <CtaButton
                        id="testimonial-cta"
                        text="Mulai Belajar Sekarang"
                        onClick={() =>
                            trackCTA(
                                'testimonials_section',
                                'Mulai Belajar Sekarang',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
