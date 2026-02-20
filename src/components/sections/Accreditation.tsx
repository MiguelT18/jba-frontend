import { useLanguage } from "@/contexts/LanguageContext";
import { useModal } from "@/contexts/ModalContext";
import ModalForm from "../ui/ModalForm";

const FileCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-8 text-primary"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M9 15l2 2 4-4" />
  </svg>
);
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-6 text-green-500"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const itemKeys = ["recognition", "standards", "preparation"] as const;

export default function Accreditation() {
  const { t } = useLanguage();

  const { show } = useModal();

  return (
    <section className="dark:bg-rose-950/10 max-md:px-4 py-10 px-5">
      <div className="container mx-auto max-w-[920px]">
        <article className="bg-linear-to-r from-rose-50 dark:from-rose-950/30 to-pink-50 dark:to-pink-950/30 rounded-4xl p-6">
          <div className="md:grid md:grid-cols-2 md:items-center gap-8">
            <div>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <FileCheckIcon />
                {t.accreditation.title}
              </h1>
              <p className="text-sm text-fg-default dark:text-fg-default-light leading-relaxed mt-4">
                {t.accreditation.description}
              </p>

              <ul className="my-4 space-y-2">
                {itemKeys.map((key) => (
                  <li
                    key={key}
                    className="text-fg-default dark:text-fg-default-light flex items-center gap-2"
                  >
                    <span className="inline-block">
                      <CheckIcon />
                    </span>
                    <span className="inline-block">
                      <strong>{t.accreditation.items[key].title}:</strong>{" "}
                      {t.accreditation.items[key].description}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => show(<ModalForm />)}
                className="max-md:hidden w-full bg-linear-to-tl from-rose-500 to-pink-500 dark:from-pink-600 dark:to-rose-700 text-white font-bold tracking-wider p-3 rounded-lg text-md cursor-pointer hover:bg-primary/70 active:scale-95 transition-all"
              >
                {t.accreditation.register}
              </button>
            </div>

            <div className="bg-white dark:bg-black/30 shadow-black/30 shadow-md rounded-xl mt-5 mb-8 p-4 h-fit md:mx-auto">
              <div className="text-white size-14 p-2 bg-linear-to-tl from-rose-500 to-pink-500 dark:from-pink-600 dark:to-rose-700 rounded-full mx-auto flex items-center justify-center">
                <ShieldIcon />
              </div>
              <h1 className="mt-4 font-bold text-lg text-center">
                {t.accreditation.dporTitle}
              </h1>
              <p className="text-fg-default dark:text-fg-default-light leading-relaxed text-sm text-pretty text-center">
                {t.accreditation.dporSubtitle}
              </p>
              <div className="text-xs text-center leading-relaxed text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-pink-950/15 p-4 rounded mt-2">
                {t.accreditation.certificationLabel} <br />{" "}
                {t.accreditation.certificationId}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => show(<ModalForm />)}
            className="md:hidden w-full bg-linear-to-tl from-rose-500 to-pink-500 dark:from-pink-600 dark:to-rose-700 text-white font-bold tracking-wider p-3 rounded-lg text-md cursor-pointer hover:bg-primary/70 active:scale-95 transition-all"
          >
            {t.accreditation.register}
          </button>
        </article>
      </div>
    </section>
  );
}
