import { useLanguage } from "@/contexts/LanguageContext";

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

  const getLevelClass = (level: string) => {
    if (level === "Beginner" || level === "Principiante")
      return "bg-green-100 text-green-700";
    if (level === "Advanced" || level === "Avanzado")
      return "bg-purple-100 text-purple-700";
    return "bg-rose-100 text-rose-700";
  };

  return (
    <section className="py-10 px-4">
      <h1 className="inline-block w-full text-2xl text-center text-balance font-bold mb-1">
        {t.certifications.title}
      </h1>
      <p className="inline-block w-full text-md text-fg-default text-balance text-center leading-relaxed">
        {t.certifications.subtitle}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
        {certKeys.map((key) => {
          const cert = t.certifications.items[key];
          return (
            <article
              key={key}
              className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-rose-200 flex flex-col"
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
                <p className="inline-block w-full text-sm text-fg-default text-start leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <button
                type="button"
                className="border-2 border-rose-500 text-rose-500 tracking-wider font-bold py-3 mt-5 rounded-lg"
              >
                {t.certifications.learnMore}
              </button>
            </article>
          );
        })}
      </div>

      <div className="bg-linear-to-r from-rose-500 to-pink-500 rounded-2xl p-8 lg:p-12 text-white">
        <div className="flex items-center gap-2 text-white mb-4">
          <StarIcon />
          <h2 className="text-xl font-bold">
            {t.certifications.importantNote}
          </h2>
        </div>
        <p className="text-sm text-fg-default-light font-medium leading-relaxed">
          {t.certifications.importantNoteText}
        </p>
      </div>
    </section>
  );
}
