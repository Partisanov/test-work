import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination, Navigation]);

export const slider = () => {
  const eventsSwiper = new Swiper('.actions__slider', {
    // Optional parameters
    //кол-во слайдов для показа
    slidesPerView: 2,
    spaceBetween: 15,
    grid: {
      rows: 1,
      fill: 'row'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.actions__button-next',
      prevEl: '.actions__button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Переход к слайду {{index}}'
    },
    breakpoints: {
      // when window width is >= 610px
      681: {
        slidesPerView: 3,
        spaceBetween: 34
      },
      // when window width is >= 970px
      971: {
        slidesPerView: 4,
        spaceBetween: 27
      },
      // when window width is >= 1280px
      1281: {
        slidesPerView: 4,
        spaceBetween: 100
      }
    }
  }
)};
