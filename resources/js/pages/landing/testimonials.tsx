import { Check, Quote } from 'lucide-react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const testimonials = [
    {
        name: 'Thomas',
        role: 'INSEAD MBA Candidate',
        image: '/images/shaundju/testi01.png',
        quote:
            'Apa yang Shaun ngomongin itu bener semua brokkk, apalagi yang project management, client relationship, dll.',
    },
    {
        name: 'Jihad',
        role: 'Strategy at Pluang, ex-Shopee',
        image: '/images/shaundju/testi02.png',
        quote:
            "Shaun's introduction to framework really helped me because I was never taught that in non-business major.",
    },
    {
        name: 'Harriet',
        role: 'ex-Singapore Management Consultant',
        image: '/images/shaundju/testi03.png',
        quote:
            'Shaun showed me how to treat clients as real people.',
    },
    {
        name: 'Vanessa',
        role: 'Graduating Senior, Oxford University',
        image: '/images/shaundju/testi04.png',
        quote:
            'Having a clear starting point was most helpful.',
    },
    {
        name: 'Abdul',
        role: 'Assistant Manager at Grab',
        image: '/images/shaundju/testi05.png',
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
            className="relative overflow-hidden py-24"
            style={{
                background:
                    'linear-gradient(90deg,#123C2D 0%,#1E4D3A 50%,#123C2D 100%)',
            }}
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-sm text-white">
                        Testimony
                    </div>

                    <h2 className="mt-6 font-serif text-5xl font-bold text-[#9DFF70]">
                        Apa Kata Alumni?
                    </h2>

                    <p className="mt-4 text-xl text-white">
                        Mereka Udah Paham Aturan Mainnya, Sekarang Giliran Lo
                    </p>
                </div>

                {/* Screenshots */}
                <div className="mx-auto mt-20 flex flex-col items-center justify-center gap-10 lg:flex-row">

                    <img
                        src="/images/shaundju/proof.png"
                        alt="Phone testimonial"
                        className="w-[380px] max-w-full"
                    />

                    <div className="flex w-[220px] flex-col gap-4">
                            <img
                                src="/images/shaundju/Screenshot1.png"
                                alt="Testimonial 1"
                                className="w-full rounded-lg"
                            />

                            <img
                                src="/images/shaundju/Screenshot2.png"
                                alt="Testimonial 2"
                                className="w-full rounded-lg"
                            />

                            <img
                                src="/images/shaundju/Screenshot3.png"
                                alt="Testimonial 3"
                                className="w-full rounded-lg"
                            />
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="rounded-[28px] bg-[#04261B] p-8"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-14 w-14 rounded-full object-cover"
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

                            <Quote className="mt-6 h-8 w-8 text-white" />

                            <p className="mt-4 text-sm leading-relaxed text-white/80">
                                {item.quote}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
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

                {/* Features */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white">
                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>75+ Materi Strategi Naik Gaji</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>Lifetime Access</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9DFF70]" />
                        <span>Join Top Performer Community</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

