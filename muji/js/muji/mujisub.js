//5장뷰슬라이드
var clothesbest = new Swiper(".clothesbest", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 21,
    loop: true
});

//nav닫을 때
let categoly = document.querySelector('#menu1')
let gnbCheck = document.querySelectorAll('.categoly > div [type=checkbox]')
categoly.addEventListener('click',()=>{
    if(!categoly.checked){
        Array.from(gnbCheck).forEach(chk=> chk.checked = false)        
    }

})

//검색창
let btn = document.querySelector('#searchbtn');
let searchform = document.querySelector('#searchform');
btn.addEventListener('click', ()=>{
    searchform.classList.toggle('is-active');
});
btn,searchform.onblur = function(){
    searchform.classList.remove('is-active');
}

//더보기
let morebtn = document.querySelector('.more-btn')
let more = document.querySelector('.more')

morebtn.addEventListener('click', ()=>{
    more.classList.add('is-active');
})
morebtn.addEventListener('click', ()=>{
    morebtn.classList.add('is-active');
})

//2차 메뉴 열기
let menu2 = document.querySelector('.new-label')
let categolylabel = document.querySelectorAll('.categoly > div')
for (const label of categolylabel) {
    label.addEventListener('click', (e) => {
        let snb = e.target.nextSibling.nextSibling
        snb.classList.toggle('on')
    })
}

//햄버거 메뉴
let categolybtn = document.querySelector('.line') 
let menuall = document.querySelector('.categoly')

categolybtn.addEventListener('click', ()=>{
    menuall.classList.toggle('on')
})