import React from "react";
import "./Film.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/index.js";

export const Film = ({ filmAttributes, filmId, filmIndex }) => {
  const { title, plot, released, director } = filmAttributes;

  return (
    <div className="film">
      <div className="film__square">
        {filmIndex}
      </div>
      <h3 className="film__title">
        {title}
      </h3>
      <div className="film__released-title">Original release</div>
      <div className="film__released">
        {released}
      </div>
      <div className="film__creators-title">Created by </div>
      <div className="film__creators">
        {director}
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