const swiper = new Swiper(".mySwiper", {

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: "auto",

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: false,
    }

});