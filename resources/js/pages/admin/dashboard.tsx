import { useEffect, useState } from "react";
import AnalyticsOverviewChart from "@/components/analytics/AnalyticsOverviewChart";
export default function AdminDashboard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("/api/analytics/dashboard")
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    if (!data) {
        return (
            <div className="p-8">
                Loading analytics...
            </div>
        );
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                Analytics Dashboard
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Visits
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.visits}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Scrolls
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.scrolls}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Engagements
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.engagements}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        CTA Clicks
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.cta_clicks}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Conversions
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.conversions}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Payments
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.payments}
                    </p>
                </div>
                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Total Events
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.total_events}
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        CTR
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.ctr}%
                    </p>
                </div>

                <div className="rounded-lg border p-6 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Conversion Rate
                    </p>

                    <p className="text-3xl font-bold mt-2">
                        {data.summary.conversion_rate}%
                    </p>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-10 mb-4">
                Analytics Overview
            </h2>

            <div className="border rounded-lg p-4">
                <AnalyticsOverviewChart
                    visits={data.summary.visits}
                    scrolls={data.summary.scrolls}
                    engagements={data.summary.engagements}
                    ctaClicks={data.summary.cta_clicks}
                    conversions={data.summary.conversions}
                    payments={data.summary.payments}
                />
            </div>
            {/* Recent Events */}
            <h2 className="text-2xl font-bold mt-10 mb-4">
                Latest Events
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-700">
                    <thead>
                        <tr>
                            <th className="border p-2 text-left">ID</th>
                            <th className="border p-2 text-left">Event</th>
                            <th className="border p-2 text-left">Page</th>
                            <th className="border p-2 text-left">IP</th>
                            <th className="border p-2 text-left">Created</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.latest_events.map((event: any) => (
                            <tr key={event.id}>
                                <td className="border p-2">
                                    {event.id}
                                </td>

                                <td className="border p-2">
                                    {event.event_type}
                                </td>

                                <td className="border p-2">
                                    {event.page_url || "-"}
                                </td>

                                <td className="border p-2">
                                    {event.ip_address || "-"}
                                </td>

                                <td className="border p-2">
                                    {new Date(
                                        event.created_at
                                    ).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}