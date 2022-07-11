var swiper = new Swiper(".popular-activities__slide", {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 500,
    grabCursor: true,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
    }
});