import { useState } from "react";
import { useTranslation } from "react-i18next";

const locales = [
  {
    value: "de",
    img: "/img/germany-flag-round-circle-icon.svg",
  },
  {
    value: "en",
    img: "/img/uk-flag-round-circle-icon.svg",
  },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState<string>("de");

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
    setActiveLang(newLang);
  };

  return (
    <div className="flex flex-row">
      {locales.map((locale) => (
        <button
          key={locale.value}
          onClick={() => handleLanguageChange(locale.value)}
          className={`shadow-none rounded-full w-12 h-12 p-2 flex items-center justify-center transition-all duration-300 ease-in-out ${
            activeLang === locale.value
              ? `bg-color-button-hover-theme1`
              : ""
          }`}
        >
          <img
            src={process.env.PUBLIC_URL + locale.img!}
            alt={`${locale.value} flag}`}
            className="w-14 h-14"
          />
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
