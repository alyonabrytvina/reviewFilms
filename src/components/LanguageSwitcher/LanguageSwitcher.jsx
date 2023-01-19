import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider.jsx";
import "./LanguageSwitcher.scss";
import { languageOptions } from "../../constants/index.js";

export const LanguageSwitcher = () => {
  const { locale, selectLanguage } = useContext(LanguageContext);

  return (
    <select
      className="language-switcher"
      value={locale}
      onChange={selectLanguage}
    >
      {languageOptions.map(({ code, label, id }) => (
        <option
          key={id}
          value={code}
        >
          {label}
        </option>
      ))}
    </select>
  )
}