import "../styles/index.scss";
import "./modules/data_film.js";
import "./modules/film_service.js";
if (process.env.NODE_ENV === "development") {
  require("../index.html");
}
