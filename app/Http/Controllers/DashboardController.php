<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserAnalytic;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'total_users' => User::count(),

                'total_visits' =>
                    UserAnalytic::where('event_type', 'visit')->count(),

                'unique_visitors' =>
                    UserAnalytic::distinct('session_id')
                        ->count('session_id'),

                'total_events' =>
                    UserAnalytic::count(),
            ]
        ]);
    }
}