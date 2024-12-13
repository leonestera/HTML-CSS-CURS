// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".imagesSlader > div");
//     let currentIndex = 0;
  
    // function showNextSlide() {
      // slides[currentIndex].classList.remove("active");
  
      // Змінюємо індекс слайда
      // currentIndex = (currentIndex + 1) % slides.length;
  
      // Додаємо клас "active" до наступного слайда
      // slides[currentIndex].classList.add("active");
    // }
  
    // Запускаємо анімацію кожні 3 секунди
    // setInterval(showNextSlide, 3000);
  
    // Встановлюємо перший слайд активним
    // slides[currentIndex].classList.add("active");
  // });
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
 loop: true, // Безкінечний цикл
 autoplay: {
   delay: 5000, // Автоматичний перехід кожні 3 секунди
   disableOnInteraction: false, // Не зупинятись при взаємодії
 },
 // effect: 'slide', // Стандартний ефект переходу
 // speed: 800, // Швидкість переходу (в мс)
 // slidesPerView: 1, // Один слайд на екрані
 // spaceBetween: 0, // Без відступів між слайдами
 effect: 'fade',
 fadeEffect: {
   crossFade: true, // Плавний перехід (для ефекту fade)
 },
 speed: 1000,
 // pagination: {
   // el: '.swiper-pagination', // Пагінація (точки навігації)
   // clickable: true, // Дозволити кліки
 // },
 // navigation: {
   // nextEl: '.swiper-button-next', // Кнопка "наступний слайд"
   // prevEl: '.swiper-button-prev', // Кнопка "попередній слайд"
 // },
});
     });