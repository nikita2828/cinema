import film from "./data.js";
import { film_one } from "./movie.template";

let btn_open = document.querySelector(".film-create-btn-open");
let film_create_wrapper = document.querySelector(".film-create-wrapper");
let body = document.querySelector("body");
let btn_close = document.querySelector(".film-create-btn-close");

let nameNode = document.querySelector(".film-create-name");
let countryNode = document.querySelector(".film-create-country");
let yearNode = document.querySelector(".film-create-year");
let directorNode = document.querySelector(".film-create-director");
let roleNode = document.querySelector(".film-create-role");
let imgNode = document.querySelector(".film-create-img");
let videoNode = document.querySelector(".film-create-video");
let genresNode = document.querySelectorAll(".film-genre-input");
let descriptionNode = document.querySelector(".film-create-description");
let btnAddNode = document.querySelector(".film-create-btn-add");
let filmWrapperNode = document.querySelector(".film");
let allInputs = [
  nameNode,
  countryNode,
  yearNode,
  directorNode,
  roleNode,
  imgNode,
  videoNode,
  descriptionNode,
];

let error_name = document.querySelector("#error_name");
let error_country = document.querySelector("#error_country");
let error_year = document.querySelector("#error_year");
let error_director = document.querySelector("#error_director");
let error_actor = document.querySelector("#error_actor");
let error_image = document.querySelector("#error_image");
let error_video = document.querySelector("#error_video");
let error_description = document.querySelector("#error_description");
let errors = [
  error_name,
  error_country,
  error_year,
  error_director,
  error_actor,
  error_image,
  error_video,
  error_description,
];
const errorGanreNode = document.getElementById("error_ganre");

let btn_delete = document.querySelector(".delete-btn");

// ! validation
const validIsEmpty = (e, node) => {
  const { value, parentNode } = e ? e.target : node;
  const errorNode = parentNode.querySelector(".error");
  if (!value) {
    errorNode.style.display = "block";
  } else {
    errorNode.style.display = "none";
  }
};

const validCheckboxes = (e) => {
  const isChecked = [...genresNode].some((c) => c.checked);

  if (!isChecked) {
    errorGanreNode.style.display = "block";
  } else {
    errorGanreNode.style.display = "none";
  }
};

nameNode.addEventListener("blur", validIsEmpty);
countryNode.addEventListener("blur", validIsEmpty);
yearNode.addEventListener("blur", validIsEmpty);
directorNode.addEventListener("blur", validIsEmpty);
roleNode.addEventListener("blur", validIsEmpty);
imgNode.addEventListener("blur", validIsEmpty);
videoNode.addEventListener("blur", validIsEmpty);
descriptionNode.addEventListener("blur", validIsEmpty);

btnAddNode.addEventListener("click", () => {
  const isValue = [
    nameNode,
    countryNode,
    yearNode,
    directorNode,
    roleNode,
    imgNode,
    videoNode,
    descriptionNode,
  ].every((i) => i.value);

  const isChe = [...genresNode].some((che) => che.checked);

  if (!isChe || !isValue) {
    validCheckboxes();
    [
      nameNode,
      countryNode,
      yearNode,
      directorNode,
      roleNode,
      imgNode,
      videoNode,
      descriptionNode,
    ].forEach((node) => {
      validIsEmpty(null, node);
    });
  } else if (isChe && isValue) {
    render_film();
  }
});

//film render
function render_film() {
  let film_add = {
    nameNode: nameNode.value,
    countryNode: countryNode.value,
    yearNode: +yearNode.value,
    directorNode: directorNode.value,
    roleNode: roleNode.value,
    imgNode: imgNode.value,
    videoNode: videoNode.value,
    genresNode: [...genresNode]
      .map((c) => {
        if (c.checked) {
          return c.value;
        }
      })
      .filter(Boolean),
    descriptionNode: descriptionNode.value,
  };
  film.addMovie(film_add);
  getFilm();
  close_handler();
}

//film
function getFilm() {
  filmWrapperNode.innerHTML = "";
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

    film_name.innerText = `${film.nameNode}`;
    film_img.setAttribute("src", film.imgNode);
    film_year.innerHTML = `<b>Год:</b> ${film.yearNode}`;
    film_country.innerHTML = `<b>Страна:</b> ${film.countryNode}`;
    film_genre.innerHTML = `<b>Жанр:</b> ${film.genresNode}`;
    film_diretor.innerHTML = `<b>Режиссер:</b> ${film.directorNode}`;
    film_role.innerHTML = `<b>Роли:</b> ${film.roleNode}`;
    film_description.innerHTML = `<b>Описание:</b> ${film.descriptionNode}`;
    const film_data = document.querySelector(".film");

    film_data.appendChild(kino);
  });
}
getFilm();

// modal window
btn_open.addEventListener("click", () => {
  film_create_wrapper.style.display = "block";
});
const close_handler = () => {
  film_create_wrapper.style.display = "none";
  errors.forEach((e) => (e.style.display = "none"));
  errorGanreNode.style.display = "none";

  let inputs = [
    nameNode,
    countryNode,
    yearNode,
    directorNode,
    roleNode,
    imgNode,
    videoNode,
    descriptionNode,
  ];
  inputs.forEach((input) => {
    input.value = "";
  });
  [...genresNode].map((c) => {
    if (c.checked) {
      c.checked = false;
    }
  });
};

btn_close.addEventListener("click", close_handler);
window.addEventListener("click", (event) => {
  if (event.target == film_create_wrapper) {
    close_handler();
  }
});

//search
let search = document.querySelector(".film-search-input");
search.addEventListener("keyup", () => {
  let filter = search.value.toUpperCase();
  console.log(filter);
  let filmNames = filmWrapperNode.querySelectorAll(".film-one");
  for (let i = 0; i < filmNames.length; i++) {
    let names = filmNames[i].querySelectorAll(".name")[0];
    console.log(names);
    if (names.innerHTML.toUpperCase().indexOf(filter) > -1) {
      filmNames[i].style.display = "";
    } else {
      filmNames[i].style.display = "none";
    }
  }
});

//delete
// btn_delete.addEventListener("click", () => {
//   console.log("hiii");
// });
