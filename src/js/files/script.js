// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* --------- Маска для телефона ------------------------------------------------------------------ */
import IMask from 'imask';

// Считываем поле ввода
let phoneInput = document.querySelector(".phone");
// Считываем кнопку
let btn = document.querySelector(".btn");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

// Обработчик события для инпута
phoneInput.addEventListener("input", phoneInputHandler);
// Обработчик события для кнопки
btn.addEventListener("click", btnHandler);

// Если ввели правлильно - кнопка активна
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}

// Отправляем номер телефона
async function btnHandler(e) {
  e.preventDefault();
  return await fetch("send_msg.php", {
    method: "POST",
    body: phoneMask.unmaskedValue,
  });
}

/* ---------  ------------------------------------------------------------------ */



/* --------- Бургер  ------------------------------------------------------------------ */
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.documentElement.classList.toggle('menu-open');
    document.documentElement.classList.toggle('lock');
  });
}

/*let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new swiper(".hero-page__swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);*/


