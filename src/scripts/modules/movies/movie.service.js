import film from './data.js';
import { film_one } from './movie.template';

let btn_open = document.querySelector('.film-create-btn-open');
let film_create_wrapper = document.querySelector('.film-create-wrapper');
let body = document.querySelector('body');
let btn_close = document.querySelector('.film-create-btn-close');

let nameNode = document.querySelector('.film-create-name');
let yearNode = document.querySelector('.film-create-year');
let directorNode = document.querySelector('.film-create-director');
let roleNode = document.querySelector('.film-create-role');
let imgNode = document.querySelector('.film-create-img');
let videoNode = document.querySelector('.film-create-video');
let genreNode = document.querySelectorAll('.film-genre-input');
let descriptionNode = document.querySelector('.film-create-description');
let btnAddNode = document.querySelector('.film-create-btn-add');
let filmWrapperNode = document.querySelector('.film');

// ! validation
const validIsEmpty = (e) => {
	const { value, parentNode } = e.target;
	const errorNode = parentNode.querySelector('.error');
	if (!value) {
		errorNode.style.display = 'block';
	} else {
		errorNode.style.display = 'none';
	}
};

nameNode.addEventListener('blur', validIsEmpty);
yearNode.addEventListener('blur', validIsEmpty);
directorNode.addEventListener('blur', validIsEmpty);
roleNode.addEventListener('blur', validIsEmpty);
imgNode.addEventListener('blur', validIsEmpty);
videoNode.addEventListener('blur', validIsEmpty);

//film
function getFilm() {
	filmWrapperNode.innerHTML = '';
	film.movie.forEach((film) => {
		const kino = document.createElement('div');
		kino.classList.add('film-one');
		kino.innerHTML = film_one;
		const film_name = kino.querySelector('.name');
		const film_img = kino.querySelector('.img');
		const film_year = kino.querySelector('.year');
		const film_country = kino.querySelector('.country');
		const film_genre = kino.querySelector('.genre');
		const film_diretor = kino.querySelector('.director');
		const film_role = kino.querySelector('.role');
		const film_description = kino.querySelector('.description');

		film_name.innerText = `${film.name}`;
		film_img.setAttribute('src', film.img);
		film_year.innerHTML = `<b>Год:</b> ${film.year}`;
		film_country.innerHTML = `<b>Страна:</b> ${film.country}`;
		film_genre.innerHTML = `<b>Жанр:</b> ${film.genre}`;
		film_diretor.innerHTML = `<b>Режиссер:</b> ${film.director}`;
		film_role.innerHTML = `<b>Роли:</b> ${film.role}`;
		film_description.innerHTML = `<b>Описание:</b> ${film.description}`;
		const film_data = document.querySelector('.film');

		film_data.appendChild(kino);
	});
}
getFilm();

// modal window
btn_open.addEventListener('click', () => {
	film_create_wrapper.style.display = 'block';
});
const close_handler = () => {
	film_create_wrapper.style.display = 'none';
};
btn_close.addEventListener('click', close_handler);

window.addEventListener('click', (event) => {
	if (event.target == film_create_wrapper) {
		film_create_wrapper.style.display = 'none';
	}
});

//search
const search = document.querySelector('.film-search-input');
search.addEventListener('input', (event) => {
	const { value } = event.target;
	const filteredResult = film_wrapper.filter((film) => {
		return film.name.includes(value);
	});
	film_wrapper.innerHTML = '';
	if (!filteredResult.length) {
		film_wrapper.innerHTML = ' <h1>Извините но совпадений нет</h1>';
	} else {
		getFilm(filteredResult);
	}
});
