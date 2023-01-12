import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js";
import { BASE_URL } from "../../constants/index.js";
import "./FilmDetails.scss";
import { FilmDetailsChild } from "../FilmDetailsChild/FilmDetailsChild";

export const FilmDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, fetchedData } = useFetch(`${BASE_URL}/${id}?populate=*`);

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(isError) {
    return console.error("error")
  }

  return !isLoading && fetchedData && <FilmDetailsChild fetchedData={fetchedData} />
}