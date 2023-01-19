import React, { useContext, useEffect } from "react";
import "./FilmDetailsChild.scss";
import { Review } from "../Review/Review.jsx";
import { FormattedMessage } from "react-intl";
import { LanguageContext } from "../../context/LanguageProvider.jsx";
import { useNavigate } from "react-router-dom";


export const FilmDetailsChild = ({ fetchedData }) => {
  const {
    title, director,
    plot, img,
    reviews, duration,
    releaseStreaming, genre,
    language, localizations
  } = fetchedData.data.attributes;

  const { url, alternativeText } = img.data.attributes;
  const { locale } = useContext(LanguageContext);

  return (
    <>
      <div className="film-details">
        <div className="film-details__image">
          <img src={`http://localhost:1337${url}`} alt={alternativeText}/>
        </div>
        <h3 className="film-details__title">
          {title}
        </h3>
        <div className="film-details__duration">
          <span className="film-details__fieldName">
            <FormattedMessage
              id={"film.runtime"}
              defaultMessage={"Runtime: "}
            />
          </span>
          {duration}
        </div>
        <div className="film-details__genre">
          <span className="film-details__fieldName">
            <FormattedMessage
              id={"film.genre"}
              defaultMessage={"Genre: "}
            />
          </span>
          {genre}
        </div>
        <div className="film-details__language">
          <span className="film-details__fieldName">
            <FormattedMessage
              id={"film.originalLanguage"}
              defaultMessage={"Original language: "}
            />
          </span>
          {language}
        </div>
        <div className="film-details__released-streaming">
          <span className="film-details__fieldName">
            <FormattedMessage
              id={"film.releaseDate"}
              defaultMessage={"Release Date (Streaming): "}
            />
          </span>
          {releaseStreaming}
        </div>
        <div className="film-details__director">
          <span className="film-details__fieldName">
            <FormattedMessage
              id={"film.director"}
              defaultMessage={"Director: "}
            />
          </span>
          {director}
        </div>
        <div className="film-details__plot">
          {plot}
        </div>
      </div>
      <div className="film-details__comments-wrapper">
        <h3 className="film-details__comments">
          <FormattedMessage
            id={"film.comments"}
            defaultMessage={"Comments"}
          />
        </h3>
        {reviews.data.map(({ attributes, id }) => {
          return <Review reviewData={attributes} key={id}/>
        })}
      </div>
    </>
  )
}