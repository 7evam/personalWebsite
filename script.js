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
const codeItems = document.querySelector('.codeItems')
const homePage = document.querySelector('.homePageSplit')
const musicMessage = "<p>I’m a trumpet player, arranger, curator, and composer living in NYC since 2012. I regularly perform all over NYC and occasionally the world, and have recorded from everywhere from my home studio to Sony BMG studios. I pride myself on being able to fit in any musical setting and love playing in all genres.</p><p>Below are just some of the projects I've worked on as a musician.</p>"
const welcomeMessage = "<p>Hello!</p><p>I'm Evan and I'm a web-developer, musician, fun guy, and <span id='mushroom-style'>fungi enthusiast</span>.</p><p>You can check out what I've built if you slide over to the right. I've also included some of the musical projects I've been a part of on the left, if you're curious.</p><p>You can view my resume <a href='./resume.html'>here</a>. Do you have a project in mind? Let's chat!</p>"
const devMessage = "<p>I am a forward-thinking full-stack web developer passionate about solving problems collaboratively and fostering an empathetic work environment. My musical background encourages me to think creatively and work well as part of a team. I am especially interested in working with React and other Javascript-based technologies, but my favorite part of development is learning new technologies.</p><p>Below are all of the major projects I've worked on as a web-developer. Most are works in progress that I frequently update.</p>"
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const mushroomStyle = document.querySelector('#mushroom-style');
const headlineImage = document.querySelector('.headlineImage');
const lastIndex = headlineImage.src.lastIndexOf('/')
const path = headlineImage.src.substr(0, lastIndex)
let pictureCanChange = true

function mushroomPic(){
  if(pictureCanChange){
    headlineImage.src.substr(headlineImage.src.lastIndexOf('/')+1) === 'headshotEKL.jpeg' ?
    headlineImage.src = path+"/fungiEKL.jpg" :
    headlineImage.src = path+"/headshotEKL.jpeg"
    pictureCanChange = false
    setTimeout(function(){
      pictureCanChange = true
    },500)
  }
}

function updatePage(){
  document.querySelector(".page-content").scrollTo(0,0)
  headlineImage.src = path+"/headshotEKL.jpeg"
  document.addEventListener("click", function(e){
    if(e.target.id==="mushroom-style"){
      console.log(e.target)
      mushroomPic();
      document.removeEventListener
    }})
  if(mySwiper.realIndex === 0){
    music.style.color = '#FF6B6B';
    home.style.color = 'white';
    code.style.color = 'white';
    music.style.textDecoration = 'underline'
    code.style.textDecoration = 'none'
    headline.innerHTML = musicMessage;
    musicItems.style.display = 'flex';
    homePage.style.display='none';
    codeItems.style.display = 'none'
  } else if(mySwiper.realIndex === 1){
    music.style.color = 'white';
    home.style.color = '#FF6B6B';
    code.style.color = 'white';
    music.style.textDecoration = 'none';
    code.style.textDecoration = 'none';
    musicItems.style.display = 'none'
    codeItems.style.display = 'none'
    homePage.style.display='flex';
    headline.innerHTML = welcomeMessage;
  } else if(mySwiper.realIndex === 2){
    music.style.color = 'white';
    home.style.color = 'white';
    code.style.color = '#FF6B6B';
    music.style.textDecoration = 'none'
    code.style.textDecoration = 'underline'
    headline.innerHTML = devMessage;
    musicItems.style.display = 'none'
    codeItems.style.display = 'flex'
    homePage.style.display='none';
  }
}

home.style.color = '#FF6B6B'
mySwiper.on("slideChange",updatePage);

music.addEventListener("click",function(){mySwiper.slideTo(0)})
musicIcon.addEventListener("click",function(){mySwiper.slideTo(0)})
home.addEventListener("click",function(){mySwiper.slideTo(1)})
code.addEventListener("click",function(){mySwiper.slideTo(2)})
codeIcon.addEventListener("click",function(){mySwiper.slideTo(2)})
mushroomStyle.addEventListener("click",mushroomPic)
