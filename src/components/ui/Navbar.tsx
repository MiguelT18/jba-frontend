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

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const $nodeTo = document.getElementById(id) as HTMLElement;
    setOpenMenu(false);
    $nodeTo.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (menuRef.current && !menuRef.current.contains(target)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 w-full min-h-[12dvh] bg-white/70 dark:bg-black/70 dark:backdrop-blur-md backdrop-blur-sm ${!openMenu && "shadow-black/30 shadow-md"} px-6 py-2 z-30 flex items-center justify-between`}
      >
        <img
          src={`/src/images/${theme === "dark" ? "dark" : "light"}-logo-removebg.webp`}
          alt="Jolimia Beauty Academy official logo"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
          className="max-md:w-[36%] w-36"
        />

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="outline-0 border-0"
        >
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        ref={menuRef}
        className={`
          fixed top-[12dvh] left-0 w-full bg-white/70 dark:bg-black/70 dark:backdrop-blur-md backdrop-blur-sm shadow-black/30 shadow-md z-20
          transition-all duration-300 ease-in-out overflow-hidden
          ${openMenu ? "max-h-96 translate-y-0 opacity-100" : "max-h-0 -translate-y-1/2 opacity-0"}
        `}
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
          <li className="flex items-center justify-between gap-4 pt-4 border-t border-gray-200 mt-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <GlobeIcon /> {t.nav.language}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLocale("en");
                    setOpenMenu(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${locale === "en" ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLocale("es");
                    setOpenMenu(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${locale === "es" ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  ES
                </button>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg text-gray-600 bg-gray-200"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
