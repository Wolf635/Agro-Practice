/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
  //Список слайдеров
  //Проверяем, есть ли слайдер на странице
  if (document.querySelector('.hero-page__swiper')) { //Указываем класс нужного слайдера
    //Создаем слайдер
    new Swiper('.hero-page__swiper', { //Указываем класс нужного слайдера
      //Подключаем модули слайдера
      //для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      //slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
      speed: 800,
      //centeredSlides: true,
      //autoHeight: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 5,
          spaceBetween: 0,
          autoHeight: true,
        },
        450: {
          slidesPerView: 7,
          spaceBetween: 0,
          autoHeight: true,
        },
      },

      /* 
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        }, */
      // События
      on: {

      }
    });
  }
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}
if (window.innerWidth <= 768) {
  window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    //Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
  });
}




/*let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".hero-page__swiper", {
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