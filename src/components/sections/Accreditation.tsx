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
    <section className="max-md:px-4 container mx-auto py-10">
      <article className="bg-linear-to-r from-rose-50 to-pink-50 rounded-4xl p-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <FileCheckIcon />
          {t.accreditation.title}
        </h1>
        <p className="text-sm text-fg-default leading-relaxed mt-4">
          {t.accreditation.description}
        </p>

        <ul className="my-4 space-y-2">
          {itemKeys.map((key) => (
            <li key={key} className="text-fg-default flex items-center gap-2">
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

        <div className="bg-white shadow-black/30 shadow-md rounded-xl my-5 p-4">
          <div className="text-white size-14 p-2 bg-linear-to-tl from-primary to-pink-500 rounded-full mx-auto flex items-center justify-center">
            <ShieldIcon />
          </div>
          <h1 className="mt-4 font-bold text-lg text-center">
            {t.accreditation.dporTitle}
          </h1>
          <p className="text-fg-default leading-relaxed text-sm text-center">
            {t.accreditation.dporSubtitle}
          </p>
          <div className="text-xs text-center leading-relaxed text-gray-500 font-mono bg-gray-100 p-4 rounded mt-2">
            {t.accreditation.certificationLabel} <br />{" "}
            {t.accreditation.certificationId}
          </div>
        </div>

        <button
          type="button"
          onClick={() => show(<ModalForm />)}
          className="w-full bg-linear-to-tl from-primary to-pink-500 text-white font-bold tracking-wider p-3 rounded-lg text-md cursor-pointer hover:bg-primary/70 active:scale-95 transition-all"
        >
          {t.accreditation.register}
        </button>
      </article>
    </section>
  );
}
