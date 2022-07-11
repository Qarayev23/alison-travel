var swiper = new Swiper(".news-detail__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".news-detail .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
    }
});