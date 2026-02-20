import { useLanguage } from "@/contexts/LanguageContext";

const LicenseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-award text-white"
  >
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-full"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="size-full"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className="size-full"
  >
    <path
      fill="currentColor"
      d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25z"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22.75 9.318c0-3.326-1.482-5.808-3.79-6.711c-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.607c-2.308.903-3.79 3.385-3.79 6.71c0 2.119 1.13 4.203 2.537 5.997c1.422 1.813 3.21 3.436 4.702 4.647l.134.11c1.2.975 2.068 1.68 3.377 1.68c1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.647c1.407-1.794 2.537-3.878 2.537-5.996M12.548 6.087c2.112-2.259 4.301-2.696 5.866-2.084c1.568.614 2.836 2.41 2.836 5.315c0 1.611-.88 3.364-2.218 5.07c-1.324 1.69-3.016 3.232-4.466 4.409c-1.393 1.13-1.843 1.453-2.566 1.453s-1.173-.323-2.566-1.454c-1.45-1.176-3.142-2.719-4.466-4.407c-1.339-1.707-2.218-3.46-2.218-5.071c0-2.905 1.268-4.7 2.836-5.315c1.565-.612 3.754-.175 5.866 2.084a.75.75 0 0 0 1.096 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

const cardKeys = [
  "certification",
  "instructors",
  "flexible",
  "environment",
] as const;

const cardIcons = [LicenseIcon, UsersIcon, ClockIcon, ChartIcon];

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section className="bg-pink-50/70 dark:bg-pink-950/20 py-10">
      <div className="container mx-auto max-w-[920px]">
        <div className="flex flex-col gap-2 mb-5 md:mb-10">
          <h1 className="inline-block text-2xl font-bold text-center text-balance mb-1">
            {t.intro.title}
          </h1>
          <p className="inline-block w-full md:w-[70%] md:mx-auto text-md text-fg-default dark:text-fg-default-light text-balance text-center">
            {t.intro.subtitle}
          </p>
        </div>

        <div
          className="px-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "baseline",
            gridAutoRows: "1fr",
            gap: "2rem",
          }}
        >
          {cardKeys.map((key, i) => {
            const IconComp = cardIcons[i];
            return (
              <article
                key={key}
                className="bg-white dark:bg-black dark:bg-linear-to-br dark:from-pink-950/30 dark:to-rose-900/30 p-5 rounded-xl shadow-black/30 shadow-md"
              >
                <div className="size-12 flex items-center justify-center text-white bg-linear-to-br from-pink-500 dark:from-pink-600 dark:to-rose-700 to-rose-500 p-2 rounded-lg">
                  <IconComp />
                </div>

                <div className="mt-5 space-y-1">
                  <h2 className="inline-block w-full text-lg font-bold text-black dark:text-white">
                    {t.intro.cards[key].title}
                  </h2>
                  <p className="inline-block w-full text-sm font-sm text-fg-default dark:text-fg-default-light leading-relaxed">
                    {t.intro.cards[key].description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
