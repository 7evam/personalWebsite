var mySwiper = new Swiper('.swiper-container', {
  autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  scrollbar: {
    draggable: true
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
const musicMessage = "<p>I’m a trumpet player, arranger, curator, and composer living in NYC since 2012. I regularly perform all over NYC and occasionally the world, and have recorded from everywhere from my home studio to Sony BMG studios. I pride myself on being able to fit in any musical setting and love playing in all genres.</p>"
const welcomeMessage = "<p class='highlight'>Hello!</p> <p>I'm Evan and I'm a web-developer, musician, fun guy, and fungi enthusiast.</p> <p>I am a forward-thinking full-stack web developer passionate about solving problems collaboratively and fostering an empathetic work environment. My musical background encourages me to think creatively and work well as part of a team. I am especially interested in working with React and other Javascript-based technologies, but my favorite part of development is learning new technologies.</p> <p>You can check out what I've built if you slide over to the right. I've also included some of the musical projects I've been a a part of on the left, if you're curious.</p>"
const devMessage = "<p>I am a forward-thinking full-stack web developer passionate about solving problems collaboratively and fostering an empathetic work environment. My musical background encourages me to think creatively and work well as part of a team. I am especially interested in working with React and other Javascript-based technologies, but my favorite part of development is learning new technologies.</p>"

function updatePage(){
  document.querySelector(".page-content").scrollTo(0,0)
  if(mySwiper.realIndex === 0){
    music.style.color = '#FF6B6B';
    home.style.color = 'white';
    code.style.color = 'white';
    music.style.textDecoration = 'underline'
    code.style.textDecoration = 'none'
    headline.innerHTML = musicMessage
    // pageContent.style.overflow = 'scroll'
    // musicItems.style.height = ''
    // musicItems.style.display = 'flex'
  } else if(mySwiper.realIndex === 1){
    music.style.color = 'white';
    home.style.color = '#FF6B6B';
    code.style.color = 'white';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'none'
    headline.innerHTML = welcomeMessage
    // pageContent.style.overflow = 'hidden'
    // musicItems.style.height = ''
    // musicItems.style.display = 'flex'
  } else if(mySwiper.realIndex === 2){
    music.style.color = 'white';
    home.style.color = 'white';
    code.style.color = '#FF6B6B';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'underline'
    headline.innerHTML = devMessage
    // pageContent.style.overflow = 'scroll'
    // musicItems.style.height = '1px'
  }
}

home.style.color = '#FF6B6B'
mySwiper.on("slideChange",updatePage);

music.addEventListener("click",function(){mySwiper.slideTo(0)})
musicIcon.addEventListener("click",function(){mySwiper.slideTo(0)})
home.addEventListener("click",function(){mySwiper.slideTo(1)})
code.addEventListener("click",function(){mySwiper.slideTo(2)})
codeIcon.addEventListener("click",function(){mySwiper.slideTo(2)})

// resizeInfo()
// window.addEventListener('resize', resizeInfo)



