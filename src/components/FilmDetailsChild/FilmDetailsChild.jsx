import React from "react";
import "./FilmDetailsChild.scss";

export const FilmDetailsChild = ({fetchedData}) => {
  const { title, released, director, plot, img } = fetchedData.data.attributes;
  const imageUrl = img?.data?.attributes?.url;

  return(
    <div className="film-details">
      <div className="film-details__image">
        <img src={`http://localhost:1337${imageUrl}`} />
      </div>
      <h3 className="film-details__title">
        {title}
      </h3>
      <div className="film-details__released">
        {released}
      </div>
      <div className="film-details__director">
        {director}
      </div>
      <div className="film-details__plot">
        {plot}
      </div>
    </div>
  )
}