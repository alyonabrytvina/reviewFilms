import React, { createContext, useEffect, useState } from "react";
import { createIntl as _createIntl, createIntlCache, IntlProvider } from "react-intl";
import enMessages from "../../i18n/en.json";
import { useLocation, useNavigate } from "react-router-dom";
import { languageOptions } from "../constants/index.js";


let currentIntl = createDefaultIntl();

export function createDefaultIntl() {
  return _createIntl({ locale: "en", messages: enMessages }, createIntlCache())
}

export function createIntl(locale) {
  const load = async () => {
    return (await import(`../../i18n/${locale}.json`)).default;
  };

  const loadedData = load();

  return locale === "en" ?
    createDefaultIntl() :
    _createIntl(
      {
        locale,
        messages: loadedData.then(data => data)
      },
      createIntlCache(),
    )
}

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(enMessages);

  const location = useLocation();
  const navigate = useNavigate();

  const createIntl = (locale) => {
    const load = async () => {
      setMessages((await import(`../../i18n/${locale}.json`)).default);
    };

    load();

    return locale === "en" ?
      createDefaultIntl() :
      _createIntl(
        {
          locale,
          messages: messages
        },
        createIntlCache(),
      )
  }

  const switchRootIntl = async (locale) => {
    if (locale !== currentIntl.locale) {
      currentIntl = await createIntl(locale)
    }
    return currentIntl
  }

  const getRoute = (location, locale) => {
    const { pathname } = location;

    let path = pathname;

    languageOptions.forEach(({code}) => {
      path.split("/").filter(part => {
        if(code === part) {
          path.replace(part, locale);
          navigate(path.replace(part, locale))
        }
      })
    })
  }

  const selectLanguage = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);

    switchRootIntl(locale).then(currentIntl => setMessages(currentIntl.messages))
  }

  useEffect(() => {
    switchRootIntl(locale).then(currentIntl => {
      setMessages(currentIntl.messages);
    });
    getRoute(location, locale);
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  )
}