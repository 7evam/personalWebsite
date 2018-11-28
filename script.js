var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
},
speed: 400,
initialSlide:1,
});

const music = document.querySelector('#music')
const home = document.querySelector('#home')
const code = document.querySelector('#code')
const musicIcon = document.querySelector('#musicIcon')
const codeIcon = document.querySelector('#codeIcon')
const homeHead = document.querySelector('#homeHead')
const musicHead = document.querySelector('#musicHead')

function updatePage(){
  if(mySwiper.realIndex === 0){
    music.style.color = 'red';
    home.style.color = 'black';
    code.style.color = 'black';
    homeHead.style.display = 'none'
    musicHead.style.display = 'inline'
  } else if(mySwiper.realIndex === 1){
    music.style.color = 'black';
    home.style.color = 'red';
    code.style.color = 'black';
    homeHead.style.display = 'inline'
    musicHead.style.display = 'none'
  } else if(mySwiper.realIndex === 2){
    music.style.color = 'black';
    home.style.color = 'black';
    code.style.color = 'red';
  }
}

home.style.color = 'red'
mySwiper.on("slideChange",updatePage);

music.addEventListener("click",function(){mySwiper.slideTo(0)})
musicIcon.addEventListener("click",function(){mySwiper.slideTo(0)})
home.addEventListener("click",function(){mySwiper.slideTo(1)})
code.addEventListener("click",function(){mySwiper.slideTo(2)})
codeIcon.addEventListener("click",function(){mySwiper.slideTo(2)})



