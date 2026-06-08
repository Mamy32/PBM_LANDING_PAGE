import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

interface Props {
    visits: number;
    scrolls: number;
    engagements: number;
    ctaClicks: number;
    conversions: number;
    payments: number;
}

export default function AnalyticsOverviewChart({
    visits,
    scrolls,
    engagements,
    ctaClicks,
    conversions,
    payments,
}: Props) {
    const chartData = [
        { name: "Visits", value: visits },
        { name: "Scrolls", value: scrolls },
        { name: "Engagements", value: engagements },
        { name: "CTA", value: ctaClicks },
        { name: "Conversions", value: conversions },
        { name: "Payments", value: payments },
    ];

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
            </BarChart>
        </ResponsiveContainer>
    );
}