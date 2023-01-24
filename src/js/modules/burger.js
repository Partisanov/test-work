export const burger = () => {
  const body = document.body;
  const burgerBtn = document.querySelector('.burger')
  const mobileMenu = document.querySelector('.header__nav')
  const signBtn = document.querySelector('.header__btn-sign')
  const navBtns = document.querySelectorAll('.nav__link')

  if(burgerBtn && mobileMenu){
    burgerBtn.addEventListener('click', () => {
      body.classList.toggle('disable-scroll')
      mobileMenu.classList.toggle('header__nav-open')
      burgerBtn.classList.toggle('burger-active')
      if(signBtn){
        signBtn.classList.toggle('hidden')
      }
    })
  }
  if(navBtns){
    navBtns.forEach(navBtn => navBtn.addEventListener('click', () => {
      body.classList.remove('disable-scroll')
      signBtn.classList.remove('hidden')
      mobileMenu.classList.remove('header__nav-open')
      burgerBtn.classList.remove('burger-active')
    } ))
  }
}
