const home = document.querySelector(".nav_link_home");
const navi = document.querySelector(".nav_link_navi");
const admin = document.querySelector(".nav_link_admin");
const cinema_add = document.querySelector("#wrap_cinema_add");


home.addEventListener("click", () => {
    cinema_add.style.display= "none";
});

navi.addEventListener("click", () => {
    cinema_add.style.display= "none";
});

admin.addEventListener("click", () => {
    cinema_add.style.display= "block";
});
