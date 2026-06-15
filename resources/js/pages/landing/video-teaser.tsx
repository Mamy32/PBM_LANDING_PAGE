import { Play } from 'lucide-react';
import { useState } from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import CtaButton from './cta-button';

const BUNNY_SRC =
    'https://iframe.mediadelivery.net/embed/459446/ee58259a-daf2-4e82-b416-567aec5a436b?autoplay=true&loop=false&muted=false&preload=true&responsive=true';

// 👇 Ganti URL ini dengan path thumbnail yang sebenarnya
const THUMBNAIL_SRC = '/images/shaundju/teaser_thumbnail.webp';

export default function VideoTeaser() {
    const [isPlaying, setIsPlaying] = useState(false);
    const { trackCTA } = useAnalytics();

    return (
        <section
            id="video-teaser"
            className="relative overflow-hidden bg-gradient-to-b from-[#0C1F13] to-[#123C2D] py-16 lg:py-24"
        >
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-10 text-center lg:mb-14">
                    <div className="inline-flex items-center rounded-full border border-white px-4 py-1.5 text-xs text-white/80 sm:text-sm">
                        Sneak Peek
                    </div>

                    <h2 className="mt-5 font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
                        <span className="text-white">Lihat </span>{' '}
                        <span className="text-[#9DFF70]">Isi Kelasnya</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                        Ini cuplikan salah satu modul biar lo tahu langsung
                        kualitas dan cara penyampaiannya sebelum join.
                    </p>
                </div>

                {/* Video Player Card */}
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/40 lg:rounded-[28px]">
                    {isPlaying ? (
                        /* ── Active player ── */
                        <div
                            className="relative w-full"
                            style={{ paddingTop: '56.25%' }}
                        >
                            <iframe
                                src={BUNNY_SRC}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full border-0"
                                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
                                allowFullScreen
                                title="Module Preview — Shaundju Academy"
                            />
                        </div>
                    ) : (
                        /* ── Facade (thumbnail + play button) ── */
                        <button
                            type="button"
                            aria-label="Play module preview video"
                            onClick={() => setIsPlaying(true)}
                            className="group relative block w-full cursor-pointer"
                            style={{ paddingTop: '56.25%' }}
                        >
                            {/* Thumbnail image */}
                            <img
                                src={THUMBNAIL_SRC}
                                alt="Thumbnail cuplikan modul"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Dark overlay agar play button tetap terbaca */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Center content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                {/* Play button */}
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9DFF70] shadow-[0_0_40px_rgba(157,255,112,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(157,255,112,0.6)] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                                    <Play className="h-7 w-7 translate-x-0.5 fill-[#0C1F13] text-[#0C1F13] sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
                                </div>

                                {/* Label */}
                                <div className="text-center">
                                    <p className="text-sm font-semibold text-white sm:text-base">
                                        Tonton Cuplikan Modul
                                    </p>
                                    <p className="mt-1 text-xs text-white/50 sm:text-sm">
                                        2 menit • tanpa perlu daftar
                                    </p>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-[#9DFF70]/0 transition-all duration-300 group-hover:bg-[#9DFF70]/5" />
                        </button>
                    )}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center lg:mt-16">
                    <CtaButton
                        id="sneak-peek-cta"
                        text="Mulai Belajar Sekarang"
                        onClick={() =>
                            trackCTA(
                                'sneak_peek_section',
                                'Mulai Belajar Sekarang',
                                '#harga',
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
