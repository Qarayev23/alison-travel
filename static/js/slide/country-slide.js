var swiper = new Swiper(".country-tours-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".country-tours .swiper-pagination",
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