import film from './data.js';
import { film_one } from './movie.template';

let btn_open = document.querySelector('.film-create-btn-open');
let film_create_wrapper = document.querySelector('.film-create-wrapper');
let body = document.querySelector('body');
let btn_close = document.querySelector('.film-create-btn-close');

let name = document.querySelector('.film-create-name');
let year = document.querySelector('.film-create-year');
let director = document.querySelector('.film-create-director');
let role = document.querySelector('.film-create-role');
let img = document.querySelector('.film-create-img');
let video = document.querySelector('.film-create-video');
let genre = document.querySelectorAll('.film-genre-input');
let description = document.querySelector('.film-create-description');
let btn_add = document.querySelector('.film-create-btn-add');
let film_wrapper = document.querySelector('.film');
//film
function getFilm() {
	film_wrapper.innerHTML = '';
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

// add film

function add_new_film() {
	btn_add.addEventListener('click', () => {
		let film_add = {
			name: name.value,
			year: +year.value,
			director: director.value,
			role: role.value,
			img: img.value,
			video: video.value,
			genre: [...genre]
				.map((g) => {
					if (g.checked) {
						return g.value;
					}
				})
				.filter(Boolean),
			description: description.value,
		};
		film.addMovie(film_add);
		getFilm();
		close_handler();
	});
}

//validation
const check_inputs = [name, year, director, role, img, video, description];

check_inputs.forEach((input) => {
	input.addEventListener('blur', () => {
		if (!input.value) {
			input.style.border = '2px solid rgb(218,18,26)';
		}
	});
	input.addEventListener('blur', () => {
		if (input.value) {
			input.style.border = '2px solid rgb(6,144,207)';
		}
	});
});

btn_add.addEventListener('click', () => {
	check_inputs.forEach((input) => {
		if (!input.value) {
			input.style.border = '2px solid rgb(218,18,26)';
		} else if (input.value) {
			input.style.border = '2px solid rgb(6,144,207)';
			add_new_film();
			input.value = '';
		} else {
			alert('Everything is bad');
		}
	});
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
