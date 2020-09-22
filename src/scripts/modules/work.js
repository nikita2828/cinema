import film from "./film.js";

const film_one = `
<div class="film-name">
<span class="name"></span>
<div class="film-btn">
  <button class="change-btn btn btn-success">Изменить</button>
  <button class="delete-btn btn btn-danger">Удалить</button>
 </div>
</div>
<div class="film-card">
  <img class="img" width="145px" height="200px" src="" alt="" />
  <div class="film-info">
    <p class="year"></p>
    <p class="country"></p>
    <p class="genre"></p>
    <p class="director"><p>
    <p class="role"></p>
    <p class="description"></p>
  </div>
</div>
`;
let btn_open = document.querySelector(".film-create-btn-open");
let film_create_wrapper = document.querySelector(".film-create-wrapper");
let body = document.querySelector("body");
let btn_close = document.querySelector(".film-create-btn-close");
// let film_modal = document.querySelector(".film-one");

let name = document.querySelector(".film-create-name");
let year = document.querySelector(".film-create-year");
let director = document.querySelector(".film-create-director");
let role = document.querySelector(".film-create-role");
let img = document.querySelector(".film-create-img");
let video = document.querySelector(".film-create-video");
let genre = document.querySelector(".film-genre-input");
let description = document.querySelector(".film-create-description");
let btn_add = document.querySelector(".film-create-btn-add");

//film
function getFilm() {
  film.movie.forEach((film) => {
    const kino = document.createElement("div");
    kino.classList.add("film-one");
    kino.innerHTML = film_one;
    const film_name = kino.querySelector(".name");
    const film_img = kino.querySelector(".img");
    const film_year = kino.querySelector(".year");
    const film_country = kino.querySelector(".country");
    const film_genre = kino.querySelector(".genre");
    const film_diretor = kino.querySelector(".director");
    const film_role = kino.querySelector(".role");
    const film_description = kino.querySelector(".description");

    film_name.innerText = `${film.name}`;
    film_img.setAttribute("src", film.img);
    film_year.innerHTML = `<b>Год:</b> ${film.year}`;
    film_country.innerHTML = `<b>Страна:</b> ${film.country}`;
    film_genre.innerHTML = `<b>Жанр:</b> ${film.genre}`;
    film_diretor.innerHTML = `<b>Режиссер:</b> ${film.director}`;
    film_role.innerHTML = `<b>Роли:</b> ${film.role}`;
    film_description.innerHTML = `<b>Описание:</b> ${film.description}`;
    const film_data = document.querySelector(".film");

    film_data.appendChild(kino);
  });
}
getFilm();

// modal window
btn_open.addEventListener("click", () => {
  film_create_wrapper.style.display = "block";
  film_create_wrapper.style.opacity = "1";
  body.style.overflow = "hidden";
});

btn_close.addEventListener("click", ()=> {
  film_create_wrapper.style.display = "none";
  film_create_wrapper.style.opacity = "0";
  body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target == film_create_wrapper) {
    film_create_wrapper.style.display = "none";
    body.style.overflow = "auto";
  }
});

// add film
btn_add.addEventListener("click", () => {
  let film_add = {
    name: name.value,
    year: +year.value,
    director: director.value,
    role: role.value,
    img: img.value,
    video: video.value,
    genre: genre.value,
    description: description.value,
  };
  // film_modal.innerHTML = "";
  film.addMovie(film_add);
  getFilm();
  function close_modal_window(){
    film_create_wrapper.style.display = "none";
    film_create_wrapper.style.opacity = "0";
    body.style.overflow = "auto";
  }
  close_modal_window();
});
