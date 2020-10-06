class MovieData {
  constructor() {
    this.movie = [
      {
        id: 1,
        nameNode: "Ночной конвой",
        yearNode: "2020",
        countryNode: "Франция, Бельгия",
        genresNode: ["Драма", "Криминал"],
        directorNode: "Анн Фонтен",
        roleNode:
          "Омар Си, Пейман Моаади, Виржини Эфира, Грегори Гадебуа, Аврора Брутен, Нагиса Моримото, Тадрина Хокинг",
        descriptionNode:
          "В центре сюжетной линии драматического фильма оказываются трое полицейских – Эрик, Аристид и Вирджиния занимаются сопровождением некоего человека в терминал аэропорта.",
        imgNode:
          "https://image.kinokrad.co/p/medium/1586387887_nochnoy-konvoy.jpeg",
      },
      {
        id: 2,
        nameNode: "Мулан",
        yearNode: "2020",
        countryNode:["США","Канада", "Гонконг"],
        genresNode: "Драмма, Боевик, Фентези",
        directorNode: " Ники Каро",
        roleNode:
          "Лю Ифэй, Донни Йен, Джет Ли, Джейсон Скотт Ли, Йосон Ан, Джан Ю, Доа Моа",
        descriptionNode:
          "Фильм представляет собой адаптацию одноименного мультфильма конца прошлого века. История по-прежнему основана на древней легенде, разворачивающейся в Китае. Действующий Китайский император...",
        imgNode:
          "https://s.kinokrad.co/uploads/img/9757ea30fb486a1f0268a6b3b87d3336.jpeg",
      },
      {
        id: 3,
        nameNode: "Спасти панду",
        yearNode: "2020",
        countryNode: "Южная Корея",
        genresNode: ["Комедия", "Боевик", "Фентези"],
        directorNode: " Ким Тхэ-юн",
        roleNode:
          "Ли Сон-мин, Ингу, Щин Ха-гюн, Ким Со-хён, Пэ Джон-нам, Каль Со-вон, Ли Сон-гюн",
        descriptionNode:
          "На двадцатипятилетие дипломатических отношений между Китаем и Южной Кореей посол Поднебесной присылает своим коллегам панду по имени Минмин. По прибытии в Корею Панду встречает специальный... ",
        imgNode:
          "https://s.kinokrad.co/uploads/img/a98ecaea40fc9b530346f461c3b97e5b.jpeg",
      },
    ];
  }
  addMovie(data) {
    if (data && data.nameNode) {
      this.movie.push(data);
    } 
  }
  editMovie(id, newData) {}
  deleteMovie(id, newData) {
    
  }
}

const moviedata = new MovieData();
export default moviedata;
