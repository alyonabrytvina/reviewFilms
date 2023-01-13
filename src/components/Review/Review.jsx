import React from "react";
import "./Review.css";

export const Review = ({ reviewData }) => {
  const { review, reviewer, publishedAt } = reviewData;

  return (
    <div className="review">
      <div className="review__reviewer">
        {reviewer}
      </div>
      <div>{publishedAt.substring(0, 10)}</div>
      <div className="review__text">
        {review}
      </div>
    </div>
  )
}