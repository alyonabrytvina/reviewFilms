import React from "react";
import { Homepage } from "./pages/Homepage/Homepage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/index.js";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import { Header } from "./components/Header/Header";
import "./index.scss";

function App() {
  const { HOME_PAGE, FILM_DETAILS, FILMS } = ROUTES;

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={ <Homepage />} />
          <Route path={FILMS} element={ <Homepage />} />
          <Route path={FILM_DETAILS} element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
