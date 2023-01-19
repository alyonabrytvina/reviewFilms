import React from "react";
import "./Review.css";
import { useFetch } from "../../hooks/useFetch.js";
import { BASE_URL_FILMS } from "../../constants/index.js";

export const Review = ({ reviewData }) => {
  const { review, reviewer, publishedAt } = reviewData;
  const { isLoading, isError } = useFetch(`${BASE_URL_FILMS}`);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return console.error("error")
  }

  return (
    <div className="review">
      <div className="review__reviewer">
        {reviewer}
      </div>
      <div>{publishedAt?.substring(0, 10)}</div>
      <div className="review__text">
        {review}
      </div>
    </div>
  )
}