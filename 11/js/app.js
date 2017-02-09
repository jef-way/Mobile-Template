

$('#demo2').swiper({
  pagination: '#demo2 .swiper-pagination',
  effect: 'cube',
  grabCursor: true,
  paginationClickable: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: 2500,
  autoplayDisableOnInteraction: false,
  loop: true,
  cube: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  }
});

$('#demo10').swiper({
  pagination: '#demo10 .swiper-pagination',
  slidesPerView: 1,
  slidesPerColumn: 2,
  paginationClickable: true,
  spaceBetween: 30
});