var swiper = new Swiper(".our-team-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".our-team .swiper-pagination",
        clickable: true
    },
});