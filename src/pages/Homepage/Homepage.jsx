import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Film } from "../../components/Film/Film.jsx";
import "./Homepage.scss";
import { BASE_URL } from "../../constants/index.js";

export const Homepage = () => {
  const { isLoading, isError, fetchedData } = useFetch(`${BASE_URL}?populate=*`);
  const films = fetchedData?.data;

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(isError) {
    return console.error("error")
  }

  return (
    <div className="films">
      {films?.map(({attributes, id}, index) => {
        return <Film key={id} filmAttributes={attributes} filmId={id} filmIndex={index+1} />
      })}
    </div>
  )
}