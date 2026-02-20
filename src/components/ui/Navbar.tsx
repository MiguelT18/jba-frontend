import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const MenuIcon = () => (
  <svg width={36} height={36} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width={36} height={36} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
    ></path>
  </svg>
);

const GlobeIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const MoonIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M11.01 3.05C6.51 3.54 3 7.36 3 12a9 9 0 0 0 9 9c4.63 0 8.45-3.5 8.95-8c.09-.79-.78-1.42-1.54-.95A5.403 5.403 0 0 1 11.1 7.5c0-1.06.31-2.06.84-2.89c.45-.67-.04-1.63-.93-1.56"
    ></path>
  </svg>
);

const SunIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414zM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [openLang, setOpenLang] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <nav className="sticky top-0 w-full min-h-[12dvh] bg-white/70 dark:bg-black/70 backdrop-blur-sm px-6 py-2 z-30 flex items-center justify-between md:justify-evenly shadow-md">
        {/* LOGOS SSR SAFE */}
        <div>
          <img
            src="/images/light-logo-removebg.webp"
            alt="Jolimia Beauty Academy official logo"
            className="w-36 max-md:w-[36%] dark:hidden"
            loading="eager"
          />
          <img
            src="/images/dark-logo-removebg.webp"
            alt="Jolimia Beauty Academy official logo"
            className="w-36 max-md:w-[36%] hidden dark:block"
            loading="eager"
          />
        </div>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden border-0"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div className="max-md:hidden flex gap-2 items-center">
          <ul className="flex gap-2 text-sm">
            <li
              className="p-2 rounded-md hover:bg-rose-500/15 font-medium transition-all cursor-pointer"
              onClick={() => scrollToSection("programs-section")}
            >
              {t.nav.programs}
            </li>
            <li
              className="p-2 rounded-md hover:bg-rose-500/15 font-medium transition-all cursor-pointer"
              onClick={() => scrollToSection("admissions-section")}
            >
              {t.nav.admissions}
            </li>
            <li
              className="p-2 rounded-md hover:bg-rose-500/15 font-medium transition-all cursor-pointer"
              onClick={() => scrollToSection("certifications-section")}
            >
              {t.nav.certifications}
            </li>
            <li
              className="p-2 rounded-md hover:bg-rose-500/15 font-medium transition-all cursor-pointer"
              onClick={() => scrollToSection("about-section")}
            >
              {t.nav.aboutUs}
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setOpenLang((prev) => !prev)}
                className="flex items-center gap-1.5 p-2 rounded bg-gray-200 dark:bg-zinc-900 hover:opacity-70 cursor-pointer transition-all"
              >
                <GlobeIcon />
                <span className="text-xs font-semibold uppercase">
                  {locale}
                </span>
                {/* Chevron */}
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${openLang ? "rotate-180" : "rotate-0"}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-36 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden
      transition-all duration-200 origin-top-right
      ${openLang ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <ul className="py-1 text-sm">
                  {(
                    [
                      { code: "en", label: "English", flag: "🇺🇸" },
                      { code: "es", label: "Español", flag: "🇪🇸" },
                    ] as { code: "en" | "es"; label: string; flag: string }[]
                  ).map(({ code, label, flag }) => (
                    <li key={code}>
                      <button
                        onClick={() => {
                          setLocale(code);
                          setOpenLang(false);
                        }}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer
              ${locale === code ? "text-rose-500 font-semibold" : "text-gray-700 dark:text-gray-300"}`}
                      >
                        <span>{flag}</span>
                        <span>{label}</span>
                        {locale === code && (
                          <svg
                            className="ml-auto"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-gray-200 dark:bg-zinc-900 hover:opacity-70 cursor-pointer transition-all"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENU */}
      <div
        ref={menuRef}
        className={`fixed top-[12dvh] left-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md z-20 transition-all duration-300 overflow-hidden
        ${openMenu ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1/2"}`}
      >
        <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
          <li onClick={() => scrollToSection("programs-section")}>
            {t.nav.programs}
          </li>
          <li onClick={() => scrollToSection("admissions-section")}>
            {t.nav.admissions}
          </li>
          <li onClick={() => scrollToSection("certifications-section")}>
            {t.nav.certifications}
          </li>
          <li onClick={() => scrollToSection("about-section")}>
            {t.nav.aboutUs}
          </li>

          <li className="flex items-center justify-between gap-4 pt-4 border-t mt-2">
            {/* Language */}
            <div className="flex gap-2">
              <button
                onClick={() => setLocale("en")}
                className={
                  locale === "en"
                    ? "bg-rose-500 text-white px-3 py-1 rounded"
                    : "bg-gray-200 dark:bg-zinc-900 px-3 py-1 rounded"
                }
              >
                EN
              </button>
              <button
                onClick={() => setLocale("es")}
                className={
                  locale === "es"
                    ? "bg-rose-500 text-white px-3 py-1 rounded"
                    : "bg-gray-200 dark:bg-zinc-900 px-3 py-1 rounded"
                }
              >
                ES
              </button>
            </div>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded bg-gray-200 dark:bg-zinc-900"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
