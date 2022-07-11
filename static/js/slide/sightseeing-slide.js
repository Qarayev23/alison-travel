var swiper = new Swiper(".sightseeing-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".sightseeing .swiper-button-next",
        prevEl: ".sightseeing .swiper-button-prev",
    },
    pagination: {
        el: ".sightseeing .swiper-pagination",
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