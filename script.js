var swiper1 = new Swiper('.s1', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop : true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var swiper2 = new Swiper('.s2', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop : true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var d = 0;
function openNav() {
  console.log(d);
  if(d==0){
  document.getElementById("side-nav").style.width = "300px";
  document.getElementById("body-in-right").style.marginLeft = "300px";
  document.getElementById("body-in-right").style.overflow = "hidden"
  d=1;
  }else{
    closeNav();
    d=0;
  } 
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  console.log('clickWindow')
  document.getElementById("side-nav").style.width = "0";
  document.getElementById("body-in-right").style.marginLeft = "0";
  }

