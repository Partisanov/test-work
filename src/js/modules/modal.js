export const modal = () => {
  const body = document.body;
  const overlay = document.querySelector('.overlay');
  const modalWindow = document.getElementById('modal')
  const openModalBtns = document.querySelectorAll('.header__btn')
  const closeModalBtn = document.querySelector('.modal__close-btn')



  const disableScroll = () => {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('disable-scroll');
};

const enableScroll = () => {
    body.style.paddingRight = '0px';
    body.classList.remove('disable-scroll');
};

  if(openModalBtns){
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        disableScroll();
        modalWindow.classList.remove('is-hidden')
        overlay.classList.remove('is-hidden')
      })
    })
  }

  if(closeModalBtn){
    closeModalBtn.addEventListener('click', () => {
      enableScroll()
      modalWindow.classList.add('is-hidden')
      overlay.classList.add('is-hidden')
    })
  }


}
