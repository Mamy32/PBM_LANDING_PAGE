import { useEffect, useState } from 'react';

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [targetDateText, setTargetDateText] = useState('');

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();

            // End of today
            let target = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                23,
                59,
                59
            );

            // If already passed, move to tomorrow
            if (now >= target) {
                target.setDate(target.getDate() + 1);
            }

            const diff = target.getTime() - now.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));

            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
            );

            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) /
                    (1000 * 60)
            );

            const seconds = Math.floor(
                (diff % (1000 * 60)) / 1000
            );

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });

            setTargetDateText(
                new Intl.DateTimeFormat('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                }).format(target)
            );
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 text-center shadow-xl">
            <p className="text-lg font-semibold text-gray-800">
                Harga Spesial akan berakhir pada:
            </p>

            <h3 className="mt-2 text-2xl font-bold text-gray-900 capitalize">
                {targetDateText}
            </h3>

            <div className="mt-8 grid grid-cols-4 gap-4">
                <TimeCard value={timeLeft.days} label="Days" />
                <TimeCard value={timeLeft.hours} label="Hours" />
                <TimeCard value={timeLeft.minutes} label="Minutes" />
                <TimeCard value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
}

function TimeCard({
    value,
    label,
}: {
    value: number;
    label: string;
}) {
    return (
        <div>
            <div className="text-4xl font-bold text-red-600">
                {String(value).padStart(2, '0')}
            </div>

            <div className="mt-2 text-sm text-gray-500">
                {label}
            </div>
        </div>
    );
}