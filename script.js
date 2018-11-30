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
const pageInfo = document.querySelector('.pageInfo')
const pageContent = document.querySelector('.page-content')
const musicItems = document.querySelector('.musicItems')
const musicMessage = "I’m a trumpet player, arranger, curator, and composer living in NYC since 2012. I regularly perform all over NYC and occasionally the world, and have recorded from everywhere from my home studio to Sony BMG studios. I pride myself on being able to fit in any musical setting and love playing in all genres."
const welcomeMessage = "Welcome to my site. I am Evan. Isn't that great?"
const devMessage = "I am a forward-thinking full-stack web developer passionate about solving problems collaboratively and fostering an empathetic work environment. My musical background encourages me to think creatively and work well as part of a team. I am especially interested in working with React and other Javascript-based technologies, but my favorite part of development is learning new technologies."

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight;
}

function resizeInfo(){
  if (isOverflown(pageInfo)){
    pageInfo.style.height="auto"
  } else {
    pageInfo.style.height=""
  }
}

function updatePage(){
  if(mySwiper.realIndex === 0){
    music.style.color = 'red';
    home.style.color = 'black';
    code.style.color = 'black';
    music.style.textDecoration = 'underline'
    code.style.textDecoration = 'none'
    headline.textContent = musicMessage
    pageContent.style.overflow = 'scroll'
    // musicItems.style.display = 'flex'
  } else if(mySwiper.realIndex === 1){
    music.style.color = 'black';
    home.style.color = 'red';
    code.style.color = 'black';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'none'
    headline.textContent = welcomeMessage
    pageContent.style.overflow = 'hidden'
    // musicItems.style.display = 'flex'
  } else if(mySwiper.realIndex === 2){
    music.style.color = 'black';
    home.style.color = 'black';
    code.style.color = 'red';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'underline'
    headline.textContent = devMessage
    pageContent.style.overflow = 'scroll'
    // musicItems.style.height = '10px'
  }
}

home.style.color = 'red'
mySwiper.on("slideChange",updatePage, resizeInfo);

music.addEventListener("click",function(){mySwiper.slideTo(0)})
musicIcon.addEventListener("click",function(){mySwiper.slideTo(0)})
home.addEventListener("click",function(){mySwiper.slideTo(1)})
code.addEventListener("click",function(){mySwiper.slideTo(2)})
codeIcon.addEventListener("click",function(){mySwiper.slideTo(2)})

// resizeInfo()
// window.addEventListener('resize', resizeInfo)



