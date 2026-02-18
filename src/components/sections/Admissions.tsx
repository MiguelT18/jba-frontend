import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import ModalForm from "../ui/ModalForm";

const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-6 text-rose-500"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-green-500 size-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const stepKeys = [
  "application",
  "interview",
  "documentation",
  "confirmation",
] as const;

export default function Admissions() {
  const { t } = useLanguage();

  const { show } = useModal();

  return (
    <section id="admissions-section" className="py-10 px-5 bg-pink-50/70">
      <div className="container mx-auto">
        <h1 className="inline-block w-full text-2xl text-center text-balance font-bold mb-1">
          {t.admissions.title}
        </h1>
        <p className="inline-block w-full text-md text-fg-default text-balance text-center leading-relaxed">
          {t.admissions.subtitle}
        </p>

        <div className="mt-6">
          <div>
            <div className="flex items-center gap-2">
              <FileTextIcon />
              <h2 className="text-xl font-bold">
                {t.admissions.requirementsTitle}
              </h2>
            </div>

            <ul className="space-y-3 mt-4 mb-6 px-5">
              {t.admissions.requirements.map((req, i) => (
                <li
                  key={i}
                  className="w-full flex items-center gap-2 text-sm text-fg-default leading-relaxed"
                >
                  <span className="inline-block">
                    <CheckIcon />
                  </span>
                  {req}
                </li>
              ))}
            </ul>

            <p className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-lg mt-8 mb-10 text-sm leading-relaxed">
              <span className="font-semibold text-rose-700">
                {t.admissions.importantNote}
              </span>{" "}
              {t.admissions.internationalNote}
            </p>
          </div>

          <div className="size-full">
            <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-8">
              {t.admissions.processTitle}
            </h2>

            <ul className="mt-4 space-y-4 px-4">
              {stepKeys.map((key, i) => {
                const step = t.admissions.steps[key];
                return (
                  <li key={key} className="flex gap-4">
                    <div className="w-full shrink-0 flex items-stretch gap-4">
                      <span className="flex items-center justify-center w-10 h-10 px-4 rounded-full bg-linear-to-br from-rose-500 to-pink-500 text-white text-md font-bold">
                        {i + 1}
                      </span>
                      <div className="w-full">
                        <h3 className="text-md font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-fg-default text-pretty leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <article className="mt-10 bg-linear-to-r from-rose-500 to-pink-500 rounded-2xl p-5 text-center text-white">
          <h2 className="text-xl font-bold mb-4">{t.admissions.readyTitle}</h2>
          <p className="text-md leading-relaxed">
            {t.admissions.readySubtitle}
          </p>
          <button
            type="button"
            onClick={() => show(<ModalForm />)}
            className="bg-white text-rose-600 hover:bg-gray-100 py-3 w-full mt-2 rounded-lg font-bold text-md transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {t.admissions.applyButton}
          </button>
        </article>
      </div>
    </section>
  );
}
