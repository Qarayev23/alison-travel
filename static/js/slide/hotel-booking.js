var swiper = new Swiper(".hotel-booking__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    navigation: {
        nextEl: ".hotel-booking .swiper-button-next",
        prevEl: ".hotel-booking .swiper-button-prev",
    },
    pagination: {
        el: ".hotel-booking .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
    }
});