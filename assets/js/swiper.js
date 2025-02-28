document.addEventListener("DOMContentLoaded", function () {
    var swiper1 = new Swiper("#swiper1", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true, 
        breakpoints: {
            520: { slidesPerView: 1 },
            828: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    var swiper2 = new Swiper("#swiper2", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true, 
        breakpoints: {
            520: { slidesPerView: 1 },
            828: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
    var swiper2 = new Swiper("#swiper3", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true, 
        breakpoints: {
            520: { slidesPerView: 1 },
            828: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
    var swiper2 = new Swiper("#swiper4", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true, 
        breakpoints: {
            520: { slidesPerView: 1 },
            828: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});