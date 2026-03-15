import React, { useState, useEffect, useRef } from 'react';
import imagePath from '../constant/imagePath';

const slides = [
    {
        id: 1,
        title: 'Fire Survival Cable',
        description: 'Our extensive cable product line is engineered to meet the highest standards in the industry.',
        imageUrl: imagePath.banner1,
    },
    {
        id: 2,
        title: 'Optical Fiber',
        description: 'Delivering high-performance optical fiber cables for fast and reliable data transmission.',
        imageUrl: imagePath.banner2,
    },
    {
        id: 3,
        title: 'Power Cables',
        description: 'Durable power cables designed to meet diverse industrial needs with the utmost reliability.',
        imageUrl: imagePath.banner3,
    },
    {
        id: 4,
        title: 'Instrumentation Cables',
        description: 'Precision instrumentation cables engineered for accuracy in the most demanding environments.',
        imageUrl: imagePath.banner4 || imagePath.banner1,
    },
    {
        id: 5,
        title: 'Flexible Cables',
        description: 'Highly flexible cables crafted to withstand continuous movement and mechanical stress.',
        imageUrl: imagePath.banner5 || imagePath.banner2,
    },
];

const STATS = [
    { value: '30+', label: 'Years Of\nExperience' },
    { value: '100+', label: 'Number Of\nClients' },
    { value: '3500K+', label: 'Total Cable Length\nManufactured (Mtr)' },
];

const INTERVAL = 5000;

export default function Banner() {
    const [current, setCurrent] = useState(0);
    const [textIn, setTextIn] = useState(true);
    const [progress, setProgress] = useState(0);

    const intervalRef = useRef(null);
    const rafRef = useRef(null);
    const startRef = useRef(null);
    const currentRef = useRef(current);
    currentRef.current = current;

    const startProgress = () => {
        cancelAnimationFrame(rafRef.current);
        setProgress(0);
        startRef.current = performance.now();
        const tick = (now) => {
            const pct = Math.min(((now - startRef.current) / INTERVAL) * 100, 100);
            setProgress(pct);
            if (pct < 100) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
    };

    const goTo = (next) => {
        setTextIn(false);
        setTimeout(() => {
            setCurrent(next);
            setTextIn(true);
            startProgress();
        }, 400);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            goTo((currentRef.current + 1) % slides.length);
        }, INTERVAL);
    };

    useEffect(() => {
        startProgress();
        resetTimer();
        return () => {
            clearInterval(intervalRef.current);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const handlePrev = () => {
        clearInterval(intervalRef.current);
        cancelAnimationFrame(rafRef.current);
        const next = (current - 1 + slides.length) % slides.length;
        goTo(next);
        resetTimer();
    };

    const handleNext = () => {
        clearInterval(intervalRef.current);
        cancelAnimationFrame(rafRef.current);
        const next = (current + 1) % slides.length;
        goTo(next);
        resetTimer();
    };

    return (
        <div className="relative w-full h-[40vw] min-h-[220px] max-h-[92vh] overflow-hidden bg-black select-none">

            {/* ── BACKGROUND SLIDES ── */}
            {slides.map((slide, i) => (
                <div
                    key={slide.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: i === current ? 1 : 0 }}
                >
                    <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        draggable={false}
                        className="w-full h-full object-cover object-center block"
                    />
                    {/* bottom-up dark vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* left-side dark vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                </div>
            ))}

            {/* ── SLIDE TEXT ── */}
            <div className="absolute inset-0 z-10 flex items-center pointer-events-none
                      px-4 pb-4
                      sm:px-10 sm:pb-0
                      md:px-16 md:pb-0
                      lg:px-20 lg:pb-0">
                <div
                    className="max-w-lg transition-all duration-[400ms] ease-out"
                    style={{
                        opacity: textIn ? 1 : 0,
                        transform: textIn ? 'translateY(0px)' : 'translateY(20px)',
                    }}
                >
                    {/* eyebrow */}
                    {/* <p className="text-red-500 font-semibold uppercase tracking-[0.2em]
                        text-[10px] sm:text-xs md:text-sm
                        mb-1 sm:mb-2">
                        Amppere Cable
                    </p> */}

                    {/* title */}
                    {/* <h1 className="text-white font-extrabold leading-tight
                         text-xl sm:text-3xl md:text-5xl lg:text-6xl
                         mb-1 sm:mb-2 md:mb-3
                         drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
                        {slides[current].title}
                    </h1> */}

                    {/* description — hidden on very small screens */}
                    <p className="hidden sm:block text-white leading-relaxed
                        text-sm sm:text-md md:text-lg
                        drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] max-w-sm md:max-w-md">
                        {slides[current].description}
                    </p>
                </div>
            </div>

            {/* ── BOTTOM ROW ── */}
            <div className="absolute z-20 flex items-end justify-between flex-wrap gap-2 -pb-4 md:pb-8
                      bottom-4 left-2 right-2
                      sm:bottom-8 sm:left-6 sm:right-6
                      md:bottom-8 md:left-8 md:right-8
                      lg:bottom-8 lg:left-10 lg:right-10">

                {/* ── STATS PILL ── */}
                <div className="relative flex items-stretch
                        md:bg-white/10 backdrop-blur-md
                        border border-white/30
                        rounded-2xl
                        overflow-hidden
                        shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)]">
                    {/* water drop highlight */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-24 h-24 rounded-full
                          md:bg-white/5 blur-2xl" />
                    {/* glass sheen */}
                    <div className="pointer-events-none absolute inset-0
                          bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
                    {STATS.map((s, i) => (
                        <React.Fragment key={s.value}>
                            <div className="flex flex-col justify-center
                              px-3 py-2
                              sm:px-5 sm:py-3
                              md:px-7 md:py-4
                              lg:px-9 lg:py-5
                              gap-0.5 sm:gap-1">
                                <span className="text-white font-black leading-none whitespace-nowrap
                                 text-base sm:text-xl md:text-2xl lg:text-[2rem]">
                                    {s.value}
                                </span>
                                <span className="text-gray-300 whitespace-pre-line leading-snug
                                 text-[9px] sm:text-[11px] md:text-xs">
                                    {s.label}
                                </span>
                            </div>

                            {i < STATS.length - 1 && (
                                <div className="self-center h-[30px] md:h-[50px] w-[3px] my-2 sm:my-3 bg-white/90 flex-shrink-0" />
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* ── NAV PILL ── */}
                <div className="flex flex-col items-center sm:items-stretch
                        bg-transparent sm:bg-white/10
                        border-transparent sm:border-l sm:border-r sm:border-b/10 sm:border-white/30
                        shadow-none sm:shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.35)]
                        rounded-none sm:rounded-xl
                        px-0 py-0
                        sm:px-6 sm:py-2.5
                        md:px-7 md:py-3
                        gap-2
                        flex-shrink-0
                        w-full sm:w-auto">
                    <div className="hidden sm:flex items-center gap-1 sm:gap-1">
                        {/* Prev arrow */}
                        <button
                            onClick={handlePrev}
                            aria-label="Previous slide"
                            className="bg-transparent border-0 p-0 cursor-pointer
                         text-white hover:text-red-400
                         transition-all duration-200 
                         hover:-translate-x-0.5
                         focus:outline-none flex items-center"
                        >
                            <svg
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                            >
                                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                            </svg>
                        </button>

                        {/* line + counter + line */}
                        <div className="flex items-center gap-2 sm:gap-4 h-[18px] min-w-[120px] sm:min-w-[150px]">
                            <span className="h-px flex-1 bg-white/60" />
                            <span className="text-white font-semibold leading-none whitespace-nowrap
                               text-xs sm:text-sm tracking-wide">
                                {current + 1}/{slides.length}
                            </span>
                            <span className="h-px flex-1 bg-white/60" />
                        </div>

                        {/* Next arrow */}
                        <button
                            onClick={handleNext}
                            aria-label="Next slide"
                            className="bg-transparent border-0 p-0 cursor-pointer
                         text-white hover:text-red-400
                         transition-all duration-200
                         hover:translate-x-0.5
                         focus:outline-none flex items-center"
                        >
                            <svg
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                            >
                                <path d="M5 12h14M14 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* red progress bar */}
                    <div className="w-20 md:w-40 mt-2 md:mt-0 sm:w-full h-[2px] sm:h-[3px] bg-transparent sm:bg-white/15 rounded-full overflow-hidden mx-auto">
                        <div
                            className="h-full  bg-red-500 rounded-full transition-[width] duration-[50ms] ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
