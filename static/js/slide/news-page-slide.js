var swiper = new Swiper(".breaking-news__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".breaking-news .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
    }
});

var swiper2 = new Swiper(".airline-news__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".airline-news .swiper-pagination",
        clickable: true
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
    }
});