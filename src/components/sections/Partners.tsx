import { useLanguage } from "@/contexts/LanguageContext";

const collaborators = [
  { id: 1, name: "Belleza Integral Pro" },
  { id: 2, name: "Nails Perfection" },
  { id: 3, name: "Estética Moderna" },
  { id: 4, name: "Cabello & Estilo" },
];
const logoUrl = "/src/images/collaborator-logo.webp";

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="dark:bg-rose-950/10 py-10 container">
      <h1 className="inline-block w-full text-2xl text-center text-balance font-bold px-4 mb-1">
        {t.collabs.title}
      </h1>
      <p className="block text-md text-fg-default dark:text-fg-default-light text-balance text-center px-4 leading-relaxed">
        {t.collabs.subtitle}
      </p>

      <div className="carousel-container mt-8 overflow-hidden">
        <ul
          className="carousel-track flex gap-8 w-max"
          style={{ animation: "scroll 20s linear infinite" }}
        >
          {collaborators.map((collab) => (
            <li key={collab.id} className="carousel-item shrink-0 list-none">
              <img
                src={logoUrl}
                alt={t.collabs.logoAlt(collab.name)}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </li>
          ))}
          {collaborators.map((collab) => (
            <li
              key={`dup-${collab.id}`}
              className="carousel-item shrink-0 list-none"
            >
              <img
                src={logoUrl}
                alt={t.collabs.logoAlt(collab.name)}
                width={200}
                height={200}
                className="rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
