const body = document.getElementsByTagName('body')[0] 

//mobile-menu
const signBtn = document.querySelector('.header__btn-sign')
const burgerBtn = document.querySelector('.burger')
const mobileMenu = document.querySelector('.header__nav')

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('header__nav-open')
  burgerBtn.classList.toggle('burger-active')
  if(burgerBtn.closest('.burger-active')){
    body.style.overflow='hidden'
    signBtn.style.display='none'
  } else {
    body.style.overflow="visible"
    signBtn.style.display='block'
  }
  body.addEventListener('click', (e) => {
    if(e.target.closest('.nav__link') ){
      console.log('d');
      body.style.overflow="visible"
      mobileMenu.classList.remove('header__nav-open')
      burgerBtn.classList.remove('burger-active')
      signBtn.style.display='block'
    }
  })
})

// modal
const modal = document.getElementById('modal')
const modalCloseBtn = document.querySelector('.modal__close-btn')

body.addEventListener('click',(e) =>{
  if(e.target.closest('.header__btn-sign') || e.target.closest('.header__btn-reg')){
    modal.classList.add('modal--opened')
    modal.classList.remove('modal')
    body.style.overflow='hidden'
  }
})
modalCloseBtn.addEventListener('click', () =>{
  modal.classList.remove('modal--opened')
  modal.classList.add('modal')
  body.style.overflow="visible"
})
  

// slider
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
});
