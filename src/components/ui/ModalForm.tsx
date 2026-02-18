import { useModal } from "@/contexts/ModalContext";
import { useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { useLanguage } from "@/contexts/LanguageContext";

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x "
  >
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
);

interface FormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  program: string;
}

export default function ModalForm() {
  const { hide } = useModal();
  const { t } = useLanguage();

  const [form, setForm] = useState<FormData>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    program: "",
  });

  const programOptions = [
    { value: "cosmetology", label: t.programs.cosmetologia.title },
    { value: "tecnicoUnas", label: t.programs.tecnicoUnas.title },
    {
      value: "tecnicoDepilacion",
      label: t.programs.tecnicoDepilacion.title,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("[FORM DATA]:", form);
    hide();
  };

  return (
    <article className=" bg-white w-full rounded-xl shadow-xl">
      <header className="bg-linear-to-r from-rose-500 to-pink-500 p-5 rounded-t-[inherit] space-y-3">
        <div className="flex items-center justify-between text-white">
          <h2 className="text-lg font-bold">{t.modal.header.title}</h2>
          <button type="button" onClick={hide}>
            <CloseIcon />
          </button>
        </div>
        <p className="inline-block w-full text-sm text-fg-default-light">
          {t.modal.header.description}
        </p>
      </header>

      <form method="POST" onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="inline-block w-full font-medium text-xs"
            >
              {t.modal.form.labels.name}:
            </label>
            <input
              id="name"
              name="name"
              placeholder="Jane"
              value={form.name}
              onChange={handleChange}
              required
              className="outline-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="inline-block w-full font-medium text-xs"
            >
              {t.modal.form.labels.lastName}:
            </label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              required
              className="outline-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="inline-block w-full font-medium text-xs"
          >
            {t.modal.form.labels.phone}:
          </label>
          <input
            id="phone"
            name="phone"
            placeholder="+1 (212) 555-1234"
            value={form.phone}
            onChange={handleChange}
            required
            className="outline-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="inline-block w-full font-medium text-xs"
          >
            {t.modal.form.labels.email}:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane.doe@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className="outline-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <span className="inline-block w-full font-medium text-xs">
            {t.modal.form.labels.program}:
          </span>
          <CustomSelect
            value={form.program}
            options={programOptions}
            placeholder={t.modal.form.selectPlaceholder}
            onChange={(value) => setForm({ ...form, program: value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold text-md transition-all active:scale-95 shadow-lg"
        >
          {t.modal.form.buttonText}
        </button>
      </form>
    </article>
  );
}
