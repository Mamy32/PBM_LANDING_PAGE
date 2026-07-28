import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    build: {
        target: 'es2020',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name]-[hash][extname]',
                // Optimization: Splits heavy libraries into separate cacheable files
                manualChunks: {
                    vendor: ['react', 'react-dom', '@inertiajs/react'],
                    ui: ['lucide-react']
                }
            },
        },
        chunkSizeWarningLimit: 1000,
        cssMinify: true,
    },
});