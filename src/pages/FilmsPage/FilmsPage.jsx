import React, { useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Film } from "../../components/Film/Film.jsx";
import "./FilmsPage.scss";
import { BASE_URL_FILMS } from "../../constants/index.js";
import { LanguageContext } from "../../context/LanguageProvider.jsx";

export const FilmsPage = () => {
  const { locale } = useContext(LanguageContext);
  const { isLoading, isError, fetchedData } = useFetch(`${BASE_URL_FILMS}?locale=${locale}`);
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
        return <Film
          key={id}
          filmAttributes={attributes}
          filmId={id}
          filmIndex={index+1}
        />
      })}
    </div>
  )
}