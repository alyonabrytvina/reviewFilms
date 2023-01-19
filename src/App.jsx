import React from "react";
import { FilmsPage } from "./pages/FilmsPage/FilmsPage.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/index.js";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
import { Homepage } from "./pages/Homepage/Homepage";
import "./index.scss";

function App() {
  const { FILMS, FILM_DETAILS, HOME_PAGE, NOT_FOUND, REVIEWS } = ROUTES;

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={NOT_FOUND} element={<NotFoundPage />}/>
        <Route path={`${HOME_PAGE}/:locale`} element={<Homepage />}/>
        <Route path={`${HOME_PAGE}/details`} element={<Navigate to={HOME_PAGE} replace />}/>
        <Route path={`${FILMS}/:locale`} element={<FilmsPage />}/>
        <Route path={FILM_DETAILS} element={<FilmDetails />}/>
        <Route path={`${REVIEWS}/:locale`} element={<ReviewsPage />}/>
      </Routes>
    </div>
  )
}

export default App
