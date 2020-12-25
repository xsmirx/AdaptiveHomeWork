$(document).ready(function () {
    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('header__burger_active'),
        $('.header__menu').toggleClass('header__menu_active'),
        $('body').toggleClass('lock')
    })
})