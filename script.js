var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0, // Cambio de "rotare" a "rotate"
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: { // Cambio de "navigator" a "navigation"
        nextEl: '.swiper-button-next', // Cambio de "nestEl" a "nextEl"
        prevEl: '.swiper-button-prev',
    }
});