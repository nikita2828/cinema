import '../styles/index.scss';
import './dataApp.js';
if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const film_one = `<div class="film-one">
<div class="film-name name"></div>
<div class="film-card">
  <img class="img" width="145px" height="200px" src="" alt="" />
  <div class="film-info">
    <p class="year"> <b>Год:</b> </p>
    <p class="country"><b>Страна:</b> </p>
    <p class="genre"><b>Жанр:</b></p>
    <p class="director"><b>Режисер:</b> <p>
    <p class="role"><b>Роли:</b></p>
    <p class="description"><b>Описание: 
  </b></p>
  </div>
</div>
</div>`

const film = document.querySelector(".film");
//film
const BASE_URL = 
function getFilm(){
  fetch(BASE_URL)
  .then((films) => {
    films.forEach(film => {
      const kino;
      kino.innerHTML = film_one;
      const film_name = kino.querySelector(".name");
      const film_img = kino.querySelector(".img");
      const film_year = kino.querySelector(".year");
      const film_country = kino.querySelector(".country");
      const film_genre = kino.querySelector(".genre");
      const film_diretor = kino.querySelector(".director");
      const film_role = kino.querySelector(".role");
      const film_description = kino.querySelector(".description");
    });
  })

  
}