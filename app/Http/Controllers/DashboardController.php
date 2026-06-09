<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'total_users' => User::count(),
                'total_courses' => 0,
                'total_modules' => 0,
                'active_courses' => 0,
            ]
        ]);
    }
}