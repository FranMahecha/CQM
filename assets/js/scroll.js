const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed: 600,
    slidesPerView: 1,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 15,
      releaseOnEdges: true
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });