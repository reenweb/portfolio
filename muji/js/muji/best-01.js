var swiper = new Swiper(".sub-img", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 7,
    spaceBetween: 21,
  });


// tab구조
const tabMenu = document.querySelectorAll('.tab');
tabMenu.forEach((tabMenu)=>{
  tabMenu.addEventListener('click', tabSwitch);
})

function tabSwitch(e) {
  const tabTargetData = e.currentTarget.dataset.tab;
  const tabList = e.currentTarget.closest('.tabs');

  const tabItems = tabList.querySelectorAll('.tab');

  const tabPanelItems = tabList.nextElementSibling.querySelectorAll('.content');
  console.log(tabPanelItems);
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  e.currentTarget.classList.add('is-active');

  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}

