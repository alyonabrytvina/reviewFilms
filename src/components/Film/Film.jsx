import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/index.js";
import "./Film.scss";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../context/LanguageProvider.jsx";

export const Film = ({ filmAttributes, filmId, filmIndex }) => {
  const { title, plot } = filmAttributes;
  const { locale } = useContext(LanguageContext);

  return (
    <div className="film">
      <div className="film__square">
        {filmIndex}
      </div>
      <div className="film__title">
        {title}
      </div>
      <div className="film__plot">
        {plot}
      </div>
      <NavLink to={`${ROUTES.FILMS}/${locale}/${filmId}`}>
        <FormattedMessage
          id={"details.readMore"}
          defaultMessage={"Read more"}
        />
      </NavLink>
    </div>
  )
}