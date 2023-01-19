export const BASE_URL_FILMS = "http://localhost:1337/api/films";
export const BASE_URL_REVIEWS = "http://localhost:1337/api/reviews";

export const ROUTES = {
  HOME_PAGE: "/",
  FILMS: "/films",
  REVIEWS: "/reviews",
  FILM_DETAILS: "/films/:locale/:id",
  NOT_FOUND: "*",
}

export const languageOptions = [{
  code: "en",
  label: "English",
  id: 1
},
{
  code: "uk",
  label: "Ukrainian",
  id: 2
},
{
  code: "pl",
  label: "Polish",
  id: 3
}];