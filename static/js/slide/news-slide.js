var swiper = new Swiper(".news-card__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    navigation: {
        nextEl: ".news .swiper-button-next",
        prevEl: ".news .swiper-button-prev",
    },
    pagination: {
        el: ".news .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    }
});