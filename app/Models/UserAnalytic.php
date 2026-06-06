<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAnalytic extends Model
{
    protected $fillable = [
        'session_id',
        'event_type',
        'location_id',
        'page_url',
        'referrer',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'scroll_depth',
        'dwell_time',
        'metadata',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'metadata' => 'array',
    ];
}