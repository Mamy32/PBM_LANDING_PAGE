<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Support\Facades\Route;

Route::post('/track', [
    AnalyticsController::class,
    'track',
]);
Route::get(
    '/analytics/summary',
    [AnalyticsController::class, 'summary']
);
Route::get(
    '/analytics/dashboard',
    [AnalyticsController::class, 'dashboard']
);
