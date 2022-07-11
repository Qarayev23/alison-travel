var swiper = new Swiper(".popular-destination__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
 grabCursor:true,
    navigation: {
        nextEl: ".popular-destination .swiper-button-next",
        prevEl: ".popular-destination .swiper-button-prev",
    },
    pagination: {
        el: ".popular-destination .swiper-pagination",
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