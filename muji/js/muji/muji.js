//메인슬라이드
var slide = new Swiper(".slide", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    effect: "fade",
    loop: true,
});

//5장뷰슬라이드
var bestitem = new Swiper(".bestitem", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 22,
    observer: true,
    loop: true
});
var clothes = new Swiper(".clothes", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 22,

});
var dailyitem = new Swiper(".dailyitem", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 22,

});
var foods = new Swiper(".foods", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 5,
    spaceBetween: 22,

});

// 4장뷰
var newitem = new Swiper(".newitem", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 22,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});

// 마지막
var swiper = new Swiper(".post", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true
});

// tab구조
const tabMenu = document.querySelectorAll('.Categoly');
tabMenu.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
});

function tabSwitch(e) {
    const tabTargetData = e.currentTarget.dataset.tab;
    const tabList = e.currentTarget.closest('.left');
    const tabItems = tabList.querySelectorAll('.Categoly');
    const tabPanelItems = tabList.nextElementSibling.querySelectorAll('.swiper');
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('is-active');
    });
    tabPanelItems.forEach((tabPanelItem) => {
        tabPanelItem.classList.remove('is-show');
    });
    e.currentTarget.classList.add('is-active');
    tabPanelItems.forEach((tabPanelItem) => {
        if (tabPanelItem.dataset.panel === tabTargetData) {
            tabPanelItem.classList.add('is-show');
            bestitem.slideTo(0),
                clothes.slideTo(0),
                dailyitem.slideTo(0),
                foods.slideTo(0);
        }
    });
}

//검색창
let btn = document.querySelector('#searchbtn');
let searchform = document.querySelector('#searchform');
btn.addEventListener('click', () => {
    searchform.classList.toggle('is-active');

});
btn, searchform.onblur = function () {
    searchform.classList.remove('is-active');
};

//카테고리 아니메이션
let Categoly = document.querySelector('.Categoly');
Categoly.addEventListener('click', () => {
    Categoly.classList.toggle('is-animated');
});

//tablet용 너브
//햄버거 열기
let menubtn = document.querySelector('.line');
let nav = document.querySelector('nav > ul');
menubtn.addEventListener('click', () => {
    nav.classList.toggle('on');
});


let wiw = window.innerWidth;
let nav2 = document.querySelectorAll('.nav2');
let nav2Title = document.querySelectorAll('.nav2 > a');
let snb = document.querySelectorAll('ul.snb');
// 최초 로딩시
if (wiw < 960) {
    nav2Title.forEach((title) => {
        title.addEventListener('click', function (e) {
            e.preventDefault();
            // console.log(this.nextSibling.nextSibling)
            this.nextSibling.nextSibling.classList.toggle('on');
        });
    });
} else {
    // pc범주
    for (const li of nav2) {
        li.addEventListener('mouseenter', () => {
            // console.log(li.childNodes[3])
            li.childNodes[3].classList.add('on')
            li.addEventListener('mouseleave', () => {
                li.childNodes[3].classList.remove('on')
            });
        });
    }
}
// 리사이징할때
window.addEventListener('resize', () => {
    if (wiw < 960) {
        nav2Title.forEach((title) => {
            title.addEventListener('click', function (e) {
                e.preventDefault();
                this.nextSibling.nextSibling.classList.toggle('on');
            });
        });
    }else {
        // pc범주
        for (const li of nav2) {
            li.addEventListener('mouseenter', () => {
                // console.log(li.childNodes[3])
                li.childNodes[3].classList.add('on')
                li.addEventListener('mouseleave', () => {
                    li.childNodes[3].classList.remove('on')
                });
            });
        }
    }
});


