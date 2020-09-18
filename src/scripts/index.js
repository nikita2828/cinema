import "../styles/index.scss";
import "./modules/film.js";
import "./modules/work.js";
if (process.env.NODE_ENV === "development") {
  require("../index.html");
}
