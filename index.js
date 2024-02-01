window.addEventListener("load", function () {
  document.querySelectorAll(".quest").forEach((el) => {
    el.addEventListener("click", function () {
      el.classList.toggle("act")
    })
  })

  const portfolioswiper = new Swiper('#portfolio .swiper', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    direction: 'horizontal',
    navigation: {
      nextEl: '#portfolio .swiper-button-next',
      prevEl: '#portfolio .swiper-button-prev',
    }
  });
})