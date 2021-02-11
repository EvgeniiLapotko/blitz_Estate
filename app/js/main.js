$(function () {
    $(".abount__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".abount__slider-nav",
    });
    $(".abount__slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".abount__slider",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
    });

    var mixer = mixitup(".flat__inner", {
        controls: {
            toggleLogic: "and",
            toggleDefault: "none",
        },
        animation: {
            duration: 0,
        },
    });
});

const btn = document.querySelector(".header__item-burger");
const menu = document.querySelector(".menu__list");

btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    menu.classList.toggle("active");
});

const filter = document.querySelector(".flat__filter-mobile");
const filterMenu = document.querySelector(".flat__filter");

filter.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
});
