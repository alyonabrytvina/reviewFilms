import React from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { BASE_URL_REVIEWS } from "../../constants/index.js";
import { useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const { locale } = useParams();
  const { fetchedData } = useFetch(`${BASE_URL_REVIEWS}?locale=${locale}`);
  const reviews = fetchedData?.data;

  return reviews?.map(({attributes, id}, index) => {
    return (
      <div key={id} className="review">
        <span className="review__order">{index + 1}</span>
        {attributes.review}
      </div>
    )
  })
}