import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import ModalForm from "../ui/ModalForm";

const certKeys = ["extensions", "advanced", "lifting", "makeup"] as const;
const levelMap = {
  Beginner: "Principiante",
  Advanced: "Avanzado",
  Specialization: "Especialización",
};

const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-6 text-rose-500"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-8"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Certifications() {
  const { t } = useLanguage();

  const { show } = useModal();

  const getLevelClass = (level: string) => {
    if (level === "Beginner" || level === "Principiante")
      return "bg-green-100 text-green-700";
    if (level === "Advanced" || level === "Avanzado")
      return "bg-purple-100 text-purple-700";
    return "bg-rose-100 text-rose-700";
  };

  return (
    <section
      id="certifications-section"
      className="dark:bg-rose-950/10 py-10 px-4"
    >
      <div className="container mx-auto max-w-[920px]">
        <h1 className="inline-block w-full text-2xl text-center text-balance font-bold mb-1">
          {t.certifications.title}
        </h1>
        <p className="inline-block w-full text-md text-fg-default dark:text-fg-default-light text-balance text-center leading-relaxed">
          {t.certifications.subtitle}
        </p>

        <div
          style={{ alignItems: "baseline" }}
          className="max-md:flex max-md:flex-wrap max-md:justify-center grid grid-cols-2 gap-5 w-full mt-5 mb-10"
        >
          {certKeys.map((key) => {
            const cert = t.certifications.items[key];
            return (
              <article
                key={key}
                className="
                bg-linear-to-br from-gray-50 to-white
                dark:from-zinc-950 dark:to-zinc-900
                border border-gray-200 dark:border-zinc-800
                rounded-xl p-5 hover:shadow-lg transition-all duration-300
                hover:border-rose-200 dark:hover:border-pink-700
                flex flex-col
              "
              >
                <div className="flex items-center gap-2 mb-4">
                  <AwardIcon />
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${getLevelClass(cert.level)}`}
                  >
                    {cert.level}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="inline-block w-full text-lg font-bold">
                    {cert.title}
                  </h3>
                  <p className="inline-block w-full text-sm text-fg-default dark:text-fg-default-light text-start leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => show(<ModalForm />)}
                  className="border-2 border-rose-500 text-rose-500 tracking-wider font-bold py-3 mt-5 rounded-lg active:scale-95 transition-all cursor-pointer hover:opacity-70"
                >
                  {t.certifications.learnMore}
                </button>
              </article>
            );
          })}
        </div>

        <div className="bg-linear-to-r from-rose-500 to-pink-500 dark:to-pink-600 dark:from-rose-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="flex items-center gap-2 text-white mb-4">
            <StarIcon />
            <h2 className="text-xl font-bold">
              {t.certifications.importantNote}
            </h2>
          </div>
          <p className="text-sm font-medium leading-relaxed">
            {t.certifications.importantNoteText}
          </p>
        </div>
      </div>
    </section>
  );
}
