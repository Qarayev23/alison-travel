var swiper = new Swiper(".best-travel-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".best-travel .swiper-button-next",
        prevEl: ".best-travel .swiper-button-prev",
    },
    pagination: {
        el: ".best-travel .swiper-pagination",
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