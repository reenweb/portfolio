document.cookie = 'googtrans=/auto/ja'
function googleTranslateElementInit() {
    new google.translate.TranslateElement('google_translate_element');
    console.log(document.cookie);
}
let langBts = document.querySelectorAll('button');
langBts.forEach((bt) => {
    bt.addEventListener('click', (e) => {
        let el = e.currentTarget;
        if (el) {
            let toLang = el.dataset.lang;
            const gtcombo = document.querySelector('.goog-te-combo'); // 숨겨진 옵션콤보 
            gtcombo.value = toLang; // 변경할 언어 적용
            gtcombo.dispatchEvent(new Event('change')); // 변경 이벤트 트리거
        }
        return false;
    });
})

// 햄버거메뉴
let menubtn = document.querySelector('.tabmenu > img');
let nav = document.querySelector('.pcmenu');
menubtn.addEventListener('click', () => {
    nav.classList.toggle('on');
});

// 클릭하면 이동하는거
let howtobtn = document.querySelector('.howtomenu');
let howto = document.querySelector('.howtoscroll');
let howtop = howto.offsetTop;

howtobtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top:howtop - 140,
        left:0,
        behavior: "smooth"
    });
});

