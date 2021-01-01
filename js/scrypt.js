// $(document).ready(function () {
//     $('.header__burger').click(function(event){
//         $('.header__burger').toggleClass('header__burger_active'),
//         $('.header__menu').toggleClass('header__menu_active'),
//         $('body').toggleClass('lock')
//     })
// })

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector("body");

burger.onclick = function () {
    burger.classList.toggle("header__burger_active");
    menu.classList.toggle("header__menu_active");
    body.classList.toggle("lock");
};
