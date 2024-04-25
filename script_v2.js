
var mySwiper = new Swiper('.swiper-container', {
  initialSlide: 0,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // fix for extra space below swiper
  on: {
    init: function () {
      const allSlides = document.querySelectorAll('.swiper-slide');
      allSlides.forEach(slide => slide.style.height = '0');
      const initialSlide = this.slides[this.activeIndex];
      initialSlide.style.height = '100%'
    },
    slideChange: function () {
      const allSlides = document.querySelectorAll('.swiper-slide');
      allSlides.forEach(slide => slide.style.height = '0');
      const currentSlide = this.slides[this.activeIndex];
      currentSlide.style.height = '100%'
    }
  }
});

var home = document.querySelector('#homeHeader')
home.style.color = '#FF6B6B'
var music = document.querySelector('#musicHeader')
var code = document.querySelector('#codeHeader')
var fungi = document.querySelector('#fungi')
var headlineImage = document.querySelector('.headlineImage');
var arrow = document.querySelector('.arrow')
const lastIndex = headlineImage.src.lastIndexOf('/')
const path = headlineImage.src.substr(0, lastIndex)
var pictureCanChange = true

function handleFungi() {
  if (pictureCanChange) {
    headlineImage.src.substr(headlineImage.src.lastIndexOf('/') + 1) === 'headshotEKL.jpeg' ?
      headlineImage.src = path + "/fungiEKL.jpeg" :
      headlineImage.src = path + "/headshotEKL.jpeg"
    pictureCanChange = false
    setTimeout(function () {
      pictureCanChange = true
      headlineImage.src = path + "/headshotEKL.jpeg"
    }, 2500)
  }
}

home.addEventListener("click", function () { mySwiper.slideTo(0) })
code.addEventListener("click", function () { mySwiper.slideTo(1) })
music.addEventListener("click", function () { mySwiper.slideTo(2) })
fungi.addEventListener("click", handleFungi)
arrow.addEventListener("click", function () { mySwiper.slideTo(1) })

function updatePage() {
  music.style.color = 'white';
  home.style.color = 'white';
  code.style.color = 'white';
  arrow.style.animationName = 'none';
  switch (mySwiper.realIndex) {
    case 0:
      home.style.color = '#FF6B6B'
      break;
    case 1:
      code.style.color = '#FF6B6B'
      break;
    case 2:
      music.style.color = '#FF6B6B'
  }
}

mySwiper.on("slideChange", updatePage);