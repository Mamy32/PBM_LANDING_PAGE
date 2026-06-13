import { Check, Quote } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const testimonials = [
    {
        name: 'Thomas',
        role: 'INSEAD MBA Candidate',
        image: '/images/shaundju/testi02.png',
        quote:
            'Apa yang Shaun ngomongin itu bener semua brokkk, apalagi yang project management, client relationship, dll.',
    },
    {
        name: 'Jihad',
        role: 'Strategy at Pluang, ex-Shopee',
        image: '/images/shaundju/testi04.png',
        quote:
            "Shaun's introduction to framework really helped me because I was never taught that in non-business major.",
    },
    {
        name: 'Harriet',
        role: 'ex-Singapore Management Consultant',
        image: '/images/shaundju/testi01.png',
        quote:
            'Shaun showed me how to treat clients as real people.',
    },
    {
        name: 'Vanessa',
        role: 'Graduating Senior, Oxford University',
        image: '/images/shaundju/testi05.png',
        quote:
            'Having a clear starting point was most helpful.',
    },
    {
        name: 'Abdul',
        role: 'Assistant Manager at Grab',
        image: '/images/shaundju/testi03.png',
        quote:
            'I learned a lot dari training lo terutama cara berpikir kritis.',
    },
    {
        name: 'Cyndi',
        role: 'Final Year Student, NUS Singapore',
        image: '/images/shaundju/testi08.png',
        quote:
            'I really admired how professionally you work.',
    },
];

export default function Testimonials() {
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="testimoni"
            className="relative overflow-hidden pb-24 pt-12 sm:pt-16"
            style={{
                background:
                    'linear-gradient(90deg,#123C2D 0%,#1E4D3A 50%,#123C2D 100%)',
            }}
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-xs sm:text-sm text-white">
                        Testimony
                    </div>

                    <h2 className="mt-6 font-serif text-4xl font-bold text-[#9DFF70] sm:text-5xl">
                        Apa Kata Alumni?
                    </h2>

                    <p className="mt-4 text-base text-white sm:text-lg lg:text-xl">
                        Mereka Udah Paham Aturan Mainnya, Sekarang Giliran Lo
                    </p>
                </div>

{/* Screenshots */}
<div className="mx-auto mt-12 flex flex-col items-center justify-center gap-6 lg:mt-20 lg:flex-row lg:items-start lg:gap-10">

    {/* Left: main proof image */}
    <img
        src="/images/shaundju/proof.png"
        alt="Phone testimonial"
        className="w-[280px] sm:w-[340px] lg:w-[380px] max-w-full rounded-2xl"
    />

    {/* Right: 3 screenshots — same width as proof, equal height */}
    <div className="flex w-[280px] sm:w-[340px] lg:w-[380px] flex-col gap-3">
        <img
            src="/images/shaundju/Screenshot1.png"
            alt="Testimonial 1"
            className="h-[200px] sm:h-[240px] lg:h-[280px] w-full rounded-xl object-cover object-top"
        />
        <img
            src="/images/shaundju/Screenshot2.png"
            alt="Testimonial 2"
            className="h-[200px] sm:h-[240px] lg:h-[280px] w-full rounded-xl object-cover object-top"
        />
        <img
            src="/images/shaundju/Screenshot3.png"
            alt="Testimonial 3"
            className="h-[200px] sm:h-[240px] lg:h-[280px] w-full rounded-xl object-cover object-top"
        />
    </div>

</div>

                {/* Testimonial Cards */}
                <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-2xl lg:rounded-[28px] bg-[#04261B] p-5 sm:p-6 lg:p-8"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
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

                            <Quote className="mt-4 sm:mt-6 h-6 w-6 sm:h-8 sm:w-8 text-white" />

                            <p className="mt-3 sm:mt-4 text-sm leading-relaxed text-white/80">
                                {item.quote}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 lg:mt-16 text-center">
                    <CtaButton
                        id="testimonial-cta"
                        text="Bongkar Hacks-nya Sekarang"
                        size="large"
                        onClick={() =>
                            trackCTA(
                                'testimonials_section',
                                'Bongkar Hacks-nya Sekarang',
                                '#harga'
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}

