<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    {{-- Preload the LCP hero image so the browser fetches it immediately --}}
    <link rel="preload" as="image" href="/images/shaundju/photo_header.webp" fetchpriority="high">

    @fonts

    @viteReactRefresh

    {{-- Load app CSS non-blocking: browser downloads it at normal priority but
         doesn't block first paint waiting for it. The noscript fallback covers
         browsers/crawlers with JS disabled. This is the standard "media swap"
         technique for deferring non-critical CSS. --}}
    @php
        $cssFile = null;
        $manifestPath = public_path('build/manifest.json');
        if (file_exists($manifestPath)) {
            $manifest = json_decode(file_get_contents($manifestPath), true);
            $cssFile = $manifest['resources/css/app.css']['file'] ?? null;
        }
    @endphp

    @if ($cssFile)
        <link rel="preload" href="{{ asset('build/' . $cssFile) }}" as="style">
        <link rel="stylesheet" href="{{ asset('build/' . $cssFile) }}" media="print" onload="this.media='all'">
        <noscript><link rel="stylesheet" href="{{ asset('build/' . $cssFile) }}"></noscript>
    @else
        {{-- Dev server fallback (HMR) --}}
        @vite(['resources/css/app.css'])
    @endif

    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])

    <x-inertia::head>
        <title>{{ config('app.name', 'Laravel') }}</title>
    </x-inertia::head>
</head>

<body class="font-sans antialiased">
    <x-inertia::app />

    {{-- Third-party analytics/tracking scripts loaded only after genuine user
         engagement (scroll, click, touch, or keypress) OR after a generous idle
         timeout, whichever comes first. This keeps them completely out of the
         critical render path and away from initial-load performance metrics,
         while still ensuring real visitors are tracked. --}}
    <script type="text/javascript">
        (function() {
            var thirdPartyLoaded = false;

            function loadThirdPartyScripts() {
                if (thirdPartyLoaded) return;
                thirdPartyLoaded = true;

                // Microsoft Clarity
                (function(c, l, a, r, i, t, y) {
                    c[a] = c[a] || function() {
                        (c[a].q = c[a].q || []).push(arguments)
                    };
                    t = l.createElement(r);
                    t.async = 1;
                    t.src = "https://www.clarity.ms/tag/" + i;
                    y = l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t, y);
                })(window, document, "clarity", "script", "x7r9gdewvy");

                @if (config('services.meta.pixel_id'))
                    // Meta Pixel
                    ! function(f, b, e, v, n, t, s) {
                        if (f.fbq) return;
                        n = f.fbq = function() {
                            n.callMethod ?
                                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                        };
                        if (!f._fbq) f._fbq = n;
                        n.push = n;
                        n.loaded = !0;
                        n.version = '2.0';
                        n.queue = [];
                        t = b.createElement(e);
                        t.async = !0;
                        t.src = v;
                        s = b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t, s)
                    }(window, document, 'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '{{ config('services.meta.pixel_id') }}');
                    fbq('track', 'PageView');
                @endif

                // Remove listeners once loaded so they don't fire again
                ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'].forEach(function(evt) {
                    window.removeEventListener(evt, loadThirdPartyScripts);
                });
            }

            // Load on first genuine user interaction
            ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'].forEach(function(evt) {
                window.addEventListener(evt, loadThirdPartyScripts, { passive: true, once: true });
            });

            // Fallback: load anyway after 5s if user hasn't interacted yet
            // (covers bots, slow readers, accessibility tools, etc.)
            setTimeout(loadThirdPartyScripts, 5000);
        })();
    </script>

    @if (config('services.meta.pixel_id'))
        <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id={{ config('services.meta.pixel_id') }}&ev=PageView&noscript=1" /></noscript>
    @endif
</body>

</html>