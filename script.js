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

const music = document.querySelector('#musicHeader')
const home = document.querySelector('#homeHeader')
const code = document.querySelector('#codeHeader')
const musicIcon = document.querySelector('#musicIcon')
const codeIcon = document.querySelector('#codeIcon')
const headline = document.querySelector('#headline')
const musicMessage = "I love to play my trumpet and stuff like that. I love to play my trumpet and stuff like that. I love to play my trumpet and stuff like that. I love to play my trumpet and stuff like that. I love to play my trumpet and stuff like that."
const welcomeMessage = "Welcome to my site. I am Evan. Isn't that great?"
const devMessage = "I am a forward-thinking web-developer dedicated to solving problems the right way and creating a positive work environment. My musical background encourages me to work creatively and work well as part of a team. I am passionate about web-development and am eager to learn any new technology."

function updatePage(){
  if(mySwiper.realIndex === 0){
    music.style.color = 'red';
    home.style.color = 'black';
    code.style.color = 'black';
    music.style.textDecoration = 'underline'
    code.style.textDecoration = 'none'
    headline.textContent = musicMessage
  } else if(mySwiper.realIndex === 1){
    music.style.color = 'black';
    home.style.color = 'red';
    code.style.color = 'black';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'none'
    headline.textContent = welcomeMessage
  } else if(mySwiper.realIndex === 2){
    music.style.color = 'black';
    home.style.color = 'black';
    code.style.color = 'red';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'underline'
    headline.textContent = devMessage
  }
}

home.style.color = 'red'
mySwiper.on("slideChange",updatePage);

music.addEventListener("click",function(){mySwiper.slideTo(0)})
musicIcon.addEventListener("click",function(){mySwiper.slideTo(0)})
home.addEventListener("click",function(){mySwiper.slideTo(1)})
code.addEventListener("click",function(){mySwiper.slideTo(2)})
codeIcon.addEventListener("click",function(){mySwiper.slideTo(2)})



