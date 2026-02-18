import { useLanguage } from "@/contexts/LanguageContext";
import { useRef } from "react";
import ModalForm from "../ui/ModalForm";
import { useModal } from "@/contexts/ModalContext";

const programIds = [
  "cosmetologia",
  "tecnicoUnas",
  "tecnicoDepilacion",
] as const;
const programImages = [
  "/images/carousel-03.webp",
  "/images/carousel-02.webp",
  "/images/carousel-01.webp",
];

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-4"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const VerifyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-5 "
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);
const RegisterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-5"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const noteKeys = [
  "education",
  "limited",
  "preparation",
  "instructors",
] as const;

export default function Programs() {
  const { t } = useLanguage();

  const { show } = useModal();

  return (
    <section
      id="programs-section"
      className="py-10 px-4 bg-pink-50/70"
      aria-labelledby="programs-heading"
    >
      <header className="text-center mb-1">
        <h2
          id="programs-heading"
          className="inline-block w-full text-2xl text-balance font-bold"
        >
          {t.programs.title}
        </h2>
        <p className="inline-block w-full text-md text-fg-default text-balance mt-1 leading-relaxed">
          {t.programs.subtitle}
        </p>
      </header>

      <div
        className="mt-6 grid gap-8"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {programIds.map((id, i) => (
          <article
            key={id}
            style={{
              backgroundImage: `url('${programImages[i]}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="w-full h-auto shadow-black/30 shadow-md rounded-2xl px-4 pt-30 pb-5 relative flex justify-center items-end"
          >
            <span className="absolute top-4 right-4 z-10 bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center shadow-lg gap-1">
              <VerifyIcon />
              DPOR
            </span>

            <div className="relative z-10">
              <h3 className="text-white text-xl font-bold">
                {t.programs[id].title}
              </h3>
              <span className="w-fit flex items-center gap-1 mt-2 mb-4 text-white font-bold text-sm">
                <ClockIcon />
                {t.programs[id].duration}
              </span>
              <span className="inline-block w-full text-sm text-pink-300 bg-pink-600/30 p-4 backdrop-blur-sm rounded-lg mb-2 font-semibold">
                {t.programs[id].license}
              </span>
              <p className="inline-block w-full text-sm text-fg-default-light leading-relaxed mt-4">
                {t.programs[id].description}
              </p>

              <span className="inline-block w-full text-md font-bold text-white mt-4">
                {t.programs.includes}:
              </span>
              <ul className="mt-2 space-y-2">
                {t.programs[id].includes.map((item) => (
                  <li key={item} className="text-sm text-fg-default-light">
                    👉 {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => show(<ModalForm />)}
                className="bg-linear-to-tl from-rose-500 to-pink-500 text-white py-3 w-full rounded-lg mt-4 font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <RegisterIcon />
                {t.programs.register}
              </button>
            </div>

            <div className="bg-linear-to-t from-black/70 to-black/30 absolute top-0 left-0 size-full rounded-2xl z-0" />
          </article>
        ))}
      </div>

      <div className="mt-10 bg-linear-to-r from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-200">
        <h2 className="mb-4 text-xl font-bold">{t.programs.importantInfo}</h2>
        <ul className="w-full flex flex-col gap-4">
          {noteKeys.map((key) => (
            <li key={key} className="text-fg-default text-sm leading-relaxed">
              <span className="text-rose-600 font-bold">
                {t.programs.notes[key].title}
              </span>{" "}
              {t.programs.notes[key].description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
