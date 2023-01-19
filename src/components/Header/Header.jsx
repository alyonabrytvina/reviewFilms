import React, { useContext, useEffect } from "react";
import "./Header.scss";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher.jsx";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/index.js";
import { LanguageContext } from "../../context/LanguageProvider.jsx";

export const Header = () => {
  const { FILMS, REVIEWS, HOME_PAGE } = ROUTES;
  const { locale } = useContext(LanguageContext);

  return (
    <header className="header">
      <h3>
        <FormattedMessage
          id={"header.title"}
          defaultMessage={"Films collection"}
        />
      </h3>
      <div className="navigation__menu">
        <NavLink to={`${HOME_PAGE}${locale}`}>
          <FormattedMessage
            id={"header.homePage"}
            defaultMessage={"HomePage"}
          />
        </NavLink>
        <NavLink to={`${FILMS}/${locale}`}>
          <FormattedMessage
            id={"header.films"}
            defaultMessage={"Films"}
          />
        </NavLink>
        <NavLink to={`${REVIEWS}/${locale}`}>
          <FormattedMessage
            id={"header.reviews"}
            defaultMessage={"Reviews"}
          />
        </NavLink>
      </div>
      <LanguageSwitcher/>
    </header>
  )
}