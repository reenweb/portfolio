var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//햄버거 열기
let menubtn = document.querySelector('.inner > .mobilemenu');
let nav = document.querySelector('header > .inner > .menu');
menubtn.addEventListener('click', () => {
nav.classList.toggle('on');
});
console.log(nav)