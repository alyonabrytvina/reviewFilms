import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/index.js";
import "./Film.scss";

export const Film = ({ filmAttributes, filmId, filmIndex }) => {
  const { title, plot } = filmAttributes;

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
      <div className="film__details">
        <Link to={`${ROUTES.FILMS}/${filmId}`}>Read more</Link>
      </div>
    </div>
  )
}