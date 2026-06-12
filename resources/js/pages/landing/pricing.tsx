import {
    Check,
} from 'lucide-react';

import { generateEventId, useAnalytics } from '@/hooks/use-analytics';
export default function Pricing() {
    const { trackCTA, trackConversion } = useAnalytics();

return (
    <section
        id="harga"
        className="bg-gradient-to-r from-[#123C2D] via-[#1E4D3A] to-[#123C2D] py-24"
    >
        <div className="mx-auto max-w-6xl px-6">

            {/* Header */}
            <div className="text-center">
                <div className="inline-flex items-center rounded-full border border-white px-5 py-2 text-sm text-white">
                    Select Your Package
                </div>

                <h2 className="mt-8 font-serif text-5xl font-semibold leading-tight text-white">
                    Pilih Paket yang Sesuai dengan
                    <br />
                    Target Karier Lo Saat Ini
                </h2>
            </div>

            {/* Pricing Cards */}
            <div className="mt-16 grid gap-10 lg:grid-cols-2">

                {/* First Jobbers */}
                <div className="rounded-[32px] bg-[#E4EBE2] p-10">

                    <h3 className="text-center font-serif text-4xl font-semibold text-[#123C2D]">
                        2x Salary in 3 Years PLUS 5x Salary in 10 years
                    </h3>

                    <p className="mt-6 text-center text-lg font-semibold text-[#123C2D]">
                        First Jobbers
                    </p>

                    <p className="mt-4 text-center text-red-500 line-through">
                        Rp2.500.000
                    </p>

                    <p className="text-center text-5xl text-[#123C2D]">
                        Rp1.950.000
                    </p>

                    <div className="mt-4 flex justify-center">
                        <span className="rounded-full border border-[#123C2D] px-4 py-1 text-sm">
                            4 Modules
                        </span>
                    </div>

                    <div className="mt-10 space-y-5 text-[#123C2D]">
                        <div className="flex gap-3">
                            <Check className="h-5 w-5" />
                            <span>Akses ke Modul 1, 2, 3, 4</span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5" />
                            <span>
                                Akses Seumur Hidup untuk Video Modul &
                                Rekaman Live Session Batch Sebelumnya
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5" />
                            <span>
                                Sesi Tanya Jawab Terbuka Kapan Saja via
                                Komunitas Discord Privat
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5" />
                            <span>
                                Review PR Personal Langsung oleh Shaun Dju
                            </span>
                        </div>
                    </div>

<button
    className="mt-12 w-full rounded-full bg-[#B8C8C0] py-4 text-lg font-semibold text-[#123C2D] transition-all duration-300 hover:scale-[1.02]"
    onClick={() => {
        const eventId = generateEventId();

        trackCTA(
            'pricing_first_jobber',
            'Join Now',
            'https://damanhuri.com/pembayaran',
            'AddToCart',
            eventId
        );

      trackConversion(
    'pricing_first_jobber',
    {
        amount: 1950000,
        event_id: eventId,
    }
);

        setTimeout(() => {
            window.location.href =
                'https://damanhuri.com/pembayaran';
        }, 300);
    }}
>
    Join Now
</button>
                </div>

                {/* Managers */}
                <div className="rounded-[32px] border border-[#9DFF70] bg-[#123C2D] p-10">

                    <h3 className="text-center font-serif text-4xl font-semibold text-[#9DFF70]">
                        Penetrate Executive Status
                        <br />
                        & Triple Digit Salary
                    </h3>

                    <p className="mt-6 text-center text-lg font-semibold text-white">
                        Managers
                    </p>

                    <p className="mt-4 text-center text-red-400 line-through">
                        Rp3.500.000
                    </p>

                    <p className="text-center text-5xl text-white">
                        Rp2.950.000
                    </p>

                    <div className="mt-4 flex justify-center">
                        <span className="rounded-full border border-white px-4 py-1 text-sm text-white">
                            5 Modules
                        </span>
                    </div>

                    <div className="mt-10 space-y-5 text-white">
                        <div className="flex gap-3">
                            <Check className="h-5 w-5 text-[#9DFF70]" />
                            <span>Akses ke Modul 1, 2, 3, 4, 5</span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5 text-[#9DFF70]" />
                            <span>
                                Akses Seumur Hidup untuk Video Modul &
                                Rekaman Live Session Batch Sebelumnya
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5 text-[#9DFF70]" />
                            <span>
                                Sesi Tanya Jawab Terbuka Kapan Saja via
                                Komunitas Discord Privat
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <Check className="h-5 w-5 text-[#9DFF70]" />
                            <span>
                                Review PR Personal Langsung oleh Shaun Dju
                            </span>
                        </div>
                    </div>

                  <button
    className="mt-12 w-full rounded-full bg-[#9DFF70] py-4 text-lg font-semibold text-[#123C2D] transition-all duration-300 hover:scale-[1.02]"
    onClick={() => {
        const eventId = generateEventId();

        trackCTA(
            'pricing_manager',
            'Join Now',
            'https://damanhuri.com/pembayaran',
            'AddToCart',
            eventId
        );

       trackConversion(
    'pricing_manager',
    {
        amount: 2950000,
        event_id: eventId,
    }
);

        setTimeout(() => {
            window.location.href =
                'https://damanhuri.com/pembayaran';
        }, 300);
    }}
>
    Join Now
</button>
                </div>

            </div>
        </div>
    </section>
);
}
