var swiper = new Swiper("#tour-detail-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    loop: true,
    
    grabCursor: true,
    pagination: {
        el: ".tour-detail-slide .swiper-pagination",
        clickable: true
    },
});