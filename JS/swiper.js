const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination-mobile",
        clickable: true,
        dynamicBullets: true,
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
});