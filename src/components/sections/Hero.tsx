import { useState, useEffect, useRef, useCallback } from "react";

export interface CarouselOptions {
  /** Habilita el avance automático de slides */
  autoplay: boolean;
  /** Intervalo entre slides en milisegundos */
  autoplayIntervalMs: number;
  /** Si es true, al hacer click en botones o bullets se pausa el autoplay de forma permanente hasta recargar */
  pauseAutoplayOnInteraction: boolean;
}

const DEFAULT_CAROUSEL_OPTIONS: CarouselOptions = {
  autoplay: true,
  autoplayIntervalMs: 3000,
  pauseAutoplayOnInteraction: true,
};

interface Programs {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

const programs: Programs[] = [
  {
    id: "cosmetologia",
    title: "Cosmetología",
    description:
      "Programa completo avalado por DPOR que conduce a licencia de Cosmetología en Virginia",
    duration: "1,000 horas",
    image: "/src/images/carousel-03.webp",
  },
  {
    id: "tecnico-unas",
    title: "Técnico en Uñas",
    description:
      "Especialízate en manicure, pedicure y nail art con licencia profesional",
    duration: "150 horas",
    image: "/src/images/carousel-02.webp",
  },
  {
    id: "tecnico-depilacion",
    title: "Técnico en Depilación",
    description:
      "Aprende depilación profesional facial y corporal con protocolos de seguridad",
    duration: "115 horas",
    image: "/src/images/carousel-01.webp",
  },
];

const ChevronLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='size-6'
  >
    <path d='m15 18-6-6 6-6' />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='size-6'
  >
    <path d='m9 18 6-6-6-6' />
  </svg>
);

interface HeroProps {
  carouselOptions?: Partial<CarouselOptions>;
}

export default function Hero({ carouselOptions: optionsProp }: HeroProps = {}) {
  const options: CarouselOptions = {
    ...DEFAULT_CAROUSEL_OPTIONS,
    ...optionsProp,
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const currentSlideRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  currentSlideRef.current = currentSlide;

  const goToSlide = useCallback((idx: number, smooth = true) => {
    const index = Math.max(0, Math.min(idx, programs.length - 1));
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (programmaticScrollTimeoutRef.current) {
      clearTimeout(programmaticScrollTimeoutRef.current);
      programmaticScrollTimeoutRef.current = null;
    }

    const width = carousel.clientWidth;
    const isWrapping =
      (currentSlideRef.current === programs.length - 1 && index === 0) ||
      (currentSlideRef.current === 0 && index === programs.length - 1);

    isProgrammaticScrollRef.current = true;
    carousel.scrollTo({
      left: index * width,
      behavior: smooth && !isWrapping ? "smooth" : "auto",
    });
    setCurrentSlide(index);
    const delay = smooth && !isWrapping ? 600 : 50;
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      programmaticScrollTimeoutRef.current = null;
    }, delay);
  }, []);

  const handleUserInteraction = useCallback(
    (fn: () => void) => {
      if (options.pauseAutoplayOnInteraction) {
        setIsAutoplayPaused(true);
      }
      fn();
    },
    [options.pauseAutoplayOnInteraction]
  );

  const goPrev = () => handleUserInteraction(() => goToSlide(currentSlide - 1));
  const goNext = () => handleUserInteraction(() => goToSlide(currentSlide + 1));
  const goToSlideByUser = (idx: number) =>
    handleUserInteraction(() => goToSlide(idx));

  useEffect(() => {
    if (!options.autoplay || isAutoplayPaused || !isHeroInView) return;

    const intervalId = setInterval(() => {
      const next = (currentSlideRef.current + 1) % programs.length;
      goToSlide(next);
    }, options.autoplayIntervalMs);

    return () => clearInterval(intervalId);
  }, [
    options.autoplay,
    options.autoplayIntervalMs,
    isAutoplayPaused,
    isHeroInView,
    goToSlide,
  ]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !options.pauseAutoplayOnInteraction) return;

    const pauseOnUserScroll = () => {
      if (!isProgrammaticScrollRef.current) {
        setIsAutoplayPaused(true);
      }
    };

    carousel.addEventListener("scroll", pauseOnUserScroll, { passive: true });

    const pauseOnUserPointer = () => setIsAutoplayPaused(true);
    carousel.addEventListener("touchstart", pauseOnUserPointer, {
      passive: true,
    });
    carousel.addEventListener("wheel", pauseOnUserPointer, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", pauseOnUserScroll);
      carousel.removeEventListener("touchstart", pauseOnUserPointer);
      carousel.removeEventListener("wheel", pauseOnUserPointer);
    };
  }, [options.pauseAutoplayOnInteraction]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = slideRefs.current;

    if (!carousel || slides.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible) {
          const index = slides.indexOf(visible.target as HTMLElement);
          if (index !== -1) {
            setCurrentSlide(index);
          }
        }
      },
      { root: carousel, threshold: [0.6] }
    );

    slides.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setIsHeroInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    observer.observe(main);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} className='relative h-[90dvh]'>
      <div
        ref={carouselRef}
        className='flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth touch-pan-x'
        style={{ scrollBehavior: "smooth" }}
      >
        {programs.map((program, idx) => (
          <article
            key={program.id}
            ref={(el) => {
              slideRefs.current[idx] = el;
            }}
            className='min-w-full h-full snap-start snap-always relative flex flex-col justify-end'
          >
            <div className='absolute inset-0 -z-10'>
              <img
                src={program.image}
                alt={`Imagen del programa ${program.title}`}
                loading={idx === 0 ? "eager" : "lazy"}
                decoding='async'
                fetchPriority={idx === 0 ? "high" : "low"}
                className='size-full object-cover'
              />
              <div
                className='absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/80'
                aria-hidden
              />
            </div>

            <div className='px-14 pb-24 pt-12 text-white'>
              <div className='space-y-1 mb-2'>
                <h2 className='block text-white text-3xl font-bold tracking-tight md:text-4xl'>
                  {program.title}
                </h2>
                <p className='block max-w-xl text-md opacity-95 md:text-lg'>
                  {program.description}
                </p>
              </div>

              <span className='block w-fit text-pink-100 bg-pink-300/30 backdrop-blur-sm rounded-full p-2 text-sm font-medium opacity-90 mb-4'>
                ⌛️ {program.duration}
              </span>

              <button className='bg-primary text-white font-medium tracking-wide p-3 rounded-lg text-md'>
                Solicitar información
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Botones anterior / siguiente */}
      <div className='absolute inset-y-0 left-0 flex items-center px-2 md:px-3 pointer-events-none'>
        <button
          type='button'
          onClick={goPrev}
          disabled={currentSlide === 0}
          aria-label='Slide anterior'
          className='pointer-events-auto flex size-10 md:size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed'
        >
          <ChevronLeft />
        </button>
      </div>
      <div className='absolute inset-y-0 right-0 flex items-center px-2 md:px-3 pointer-events-none'>
        <button
          type='button'
          onClick={goNext}
          disabled={currentSlide === programs.length - 1}
          aria-label='Slide siguiente'
          className='pointer-events-auto flex size-10 md:size-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed'
        >
          <ChevronRight />
        </button>
      </div>

      {/* Bullets de navegación */}
      <div className='absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2'>
        {programs.map((_, idx) => (
          <button
            key={idx}
            type='button'
            onClick={() => goToSlideByUser(idx)}
            className={`h-2.5 shrink-0 transition-all duration-300 ease-in-out rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2 focus:ring-offset-transparent ${
              currentSlide === idx
                ? "w-6 bg-primary"
                : "w-2.5 bg-primary/50 hover:bg-primary/80"
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
            aria-current={currentSlide === idx ? "true" : undefined}
          />
        ))}
      </div>
    </main>
  );
}
