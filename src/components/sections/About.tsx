import { useLanguage } from "@/contexts/LanguageContext";

// Use public path for image - Astro processes images differently
const aboutUsImage = "/src/images/about-us.webp";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about-section"
      className="bg-pink-50/70 dark:bg-pink-950/20 px-4 py-10"
    >
      <div className="container mx-auto max-w-[920px]">
        <img
          src={aboutUsImage}
          alt={t.about.imageAlt}
          className="rounded-2xl shadow-black/30 shadow-lg w-full mx-auto block"
        />

        <h1 className="mt-8 inline-block w-full text-2xl text-center font-bold">
          {t.about.title}
        </h1>

        <div className="mt-4 md:grid md:grid-cols-2 md:gap-5">
          <div>
            <div className="mb-4 space-y-1 mx-auto">
              <h2 className="inline-block text-lg text-primary font-bold">
                {t.about.mission}
              </h2>
              <p className="inline-block text-sm text-fg-default dark:text-fg-default-light leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div className="mb-4 space-y-1 mx-auto">
              <h2 className="inline-block text-lg text-primary font-bold">
                {t.about.vision}
              </h2>
              <p className="inline-block text-sm text-fg-default dark:text-fg-default-light leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6 space-y-2 mx-auto">
              <h2 className="inline-block text-lg text-primary font-bold">
                {t.about.values}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {t.about.valuesList.map((value) => (
                  <li
                    key={value}
                    className="bg-rose-100 text-rose-700 dark:bg-pink-900/50 dark:text-pink-200 inline-block w-fit px-4 py-2 rounded-full font-semibold text-xs"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-100 dark:bg-zinc-900/80 p-5 relative before:w-1 before:h-full before:bg-rose-700 dark:before:bg-pink-600 before:block before:absolute before:left-0 before:top-0 mx-auto leading-relaxed text-zinc-800 dark:text-zinc-200">
              <span className="text-rose-700 font-bold">
                {t.about.quoteHighlight}
              </span>
              {t.about.quoteRest}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
