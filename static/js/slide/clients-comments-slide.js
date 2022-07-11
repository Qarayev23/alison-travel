var swiper = new Swiper(".clients-comments__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    navigation: {
        nextEl: ".clients-comments .swiper-button-next",
        prevEl: ".clients-comments .swiper-button-prev",
    },
    pagination: {
        el: ".clients-comments .swiper-pagination",
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