<?php

namespace App\Http\Controllers;
use App\Services\AnalyticsService;
use App\Models\UserAnalytic;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    private AnalyticsService $analyticsService;

    public function __construct(AnalyticsService $analyticsService)
    {
        $this->analyticsService = $analyticsService;
    }
    public function track(Request $request)
    {
        $validated = $request->validate([
            'event_type' => [
    'required',
    'in:visit,scroll,engagement,cta_click,conversion,payment'
],
            'location_id' => 'nullable|string',
            'page_url' => 'nullable|string',
            'scroll_depth' => 'nullable|integer',
            'dwell_time' => 'nullable|integer',
            'metadata' => 'nullable|array',
            'session_id' => 'nullable|string',
            'referrer' => 'nullable|string',
            'utm_source' => 'nullable|string',
            'utm_medium' => 'nullable|string',
            'utm_campaign' => 'nullable|string',
        ]);

        $analytic = $this->analyticsService->record([
            ...$validated,

            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Analytics event recorded',
            'data' => $analytic,
        ]);
    }
    public function summary()
    {
        return response()->json([
            'visits' => UserAnalytic::where('event_type', 'visit')->count(),

            'scrolls' => UserAnalytic::where('event_type', 'scroll')->count(),

            'engagements' => UserAnalytic::where('event_type', 'engagement')->count(),

            'cta_clicks' => UserAnalytic::where('event_type', 'cta_click')->count(),

            'conversions' => UserAnalytic::where('event_type', 'conversion')->count(),

            'payments' => UserAnalytic::where('event_type', 'payment')->count(),
        ]);
    }
    public function dashboard()
    {
        return response()->json([
            'summary' => [
                'visits' => UserAnalytic::where('event_type', 'visit')->count(),
                'scrolls' => UserAnalytic::where('event_type', 'scroll')->count(),
                'engagements' => UserAnalytic::where('event_type', 'engagement')->count(),
                'cta_clicks' => UserAnalytic::where('event_type', 'cta_click')->count(),
                'conversions' => UserAnalytic::where('event_type', 'conversion')->count(),
                'payments' => UserAnalytic::where('event_type', 'payment')->count(),
            ],

            'latest_events' => UserAnalytic::latest()
                ->take(20)
                ->get(),
        ]);
    }
}