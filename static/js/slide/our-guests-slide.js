var swiper = new Swiper(".our-guests__slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".our-guests .swiper-pagination",
        clickable: true
    },
});