import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import { BASE_URL_FILMS, ROUTES } from "../../constants/index.js";
import { FilmDetailsChild } from "../FilmDetailsChild/FilmDetailsChild";
import "./FilmDetails.scss";

export const FilmDetails = () => {
  const { id, locale } = useParams();
  const { isLoading, isError, fetchedData } = useFetch(`${BASE_URL_FILMS}/${id}?populate=*`);

  const navigate = useNavigate();
  const goBack = () => navigate(`${ROUTES.FILMS}/${locale}`);

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return console.error("error")
  }

  return (
    <>
      <button onClick={goBack} className="return">
        <div className="return__arrow"/>
      </button>
      {!isLoading && fetchedData && <FilmDetailsChild fetchedData={fetchedData}/>}
    </>
  )
}