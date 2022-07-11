var swiper = new Swiper(".tour-card__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    grabCursor:true,
    pagination: {
        el: ".tour-card__slide .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        850: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    }
});