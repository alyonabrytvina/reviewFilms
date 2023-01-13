import React from "react";
import "./FilmDetailsChild.scss";
import { Review } from "../Review/Review.jsx";

export const FilmDetailsChild = ({fetchedData}) => {
  const {
    title, director,
    plot, img,
    reviews, duration,
    releaseStreaming, releasedTheaters,
    genre, language
  } = fetchedData.data.attributes;

  const { url, alternativeText } = img.data.attributes;

  return(
    <>
      <div className="film-details">
        <div className="film-details__image">
          <img src={`http://localhost:1337${url}`} alt={alternativeText} />
        </div>
        <h3 className="film-details__title">
          {title}
        </h3>
        <div className="film-details__duration">
          <span className="film-details__fieldName">Runtime: </span>
          {duration}
        </div>
        <div className="film-details__genre">
          <span className="film-details__fieldName">Genre: </span>
          {genre}
        </div>
        <div className="film-details__language">
          <span className="film-details__fieldName">Original language: </span>
          {language}
        </div>
        <div className="film-details__released-streaming">
          <span className="film-details__fieldName">Release Date (Streaming): </span>
          {releaseStreaming}
        </div>
        {releasedTheaters && <div className="film-details__released-theaters">
          <span className="film-details__fieldName">Release Date (Theaters): </span>
          {releasedTheaters}
        </div>}
        <div className="film-details__director">
          <span className="film-details__fieldName">Director: </span>
          {director}
        </div>
        <div className="film-details__plot">
          {plot}
        </div>
      </div>
      <div className="film-details__comments-wrapper">
        <h3 className="film-details__comments">Comments</h3>
        {reviews.data.map(({attributes, id}) => {
          return <Review reviewData={attributes} key={id} />
        })}
      </div>
    </>
  )
}