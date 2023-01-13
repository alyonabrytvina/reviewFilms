import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";

import { BASE_URL, ROUTES } from "../../constants/index.js";
import { FilmDetailsChild } from "../FilmDetailsChild/FilmDetailsChild";
import curvedSVG from "../../assets/svgs/curved-arrow-back-outline-icon.svg";

import "./FilmDetails.scss";

export const FilmDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, fetchedData } = useFetch(`${BASE_URL}/${id}?populate=*`);

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(isError) {
    return console.error("error")
  }

  return (
    <>
      <div className="return">
        <Link to={`${ROUTES.FILMS}`}>
          <img src={curvedSVG} alt="curved-arrow" />
        </Link>
      </div>
      {!isLoading && fetchedData && <FilmDetailsChild fetchedData={fetchedData} />}
    </>
  )
}