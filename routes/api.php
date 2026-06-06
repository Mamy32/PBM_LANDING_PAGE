<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalyticsController;

Route::post('/track', [
    AnalyticsController::class,
    'track'
]);
Route::get(
    '/analytics/summary',
    [AnalyticsController::class, 'summary']
);
Route::get(
    '/analytics/dashboard',
    [AnalyticsController::class, 'dashboard']
);