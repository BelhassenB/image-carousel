import './style.css'
import SidiBouSaid from './assets/img/sidi-bou-said.jpg'
import Sousse from './assets/img/sousse.jpg'
import Jem from './assets/img/el-jem-tunisia.jpg'
import Dot from './assets/svg/navigation-dot.svg'
import Sunset from './assets/img/sunset.jpg'
import Sea from './assets/img/sea.jpg'
const imagesContainer = document.querySelector('.images-container')
const activeImage = document.querySelector('.active-image')
const nextImgBtn = document.querySelector('.next-img')
const previousImgBtn = document.querySelector('.previous-img')
const navigationDotsContainer = document.querySelector('.navigation-dots')


const sidiBouSaidImg = new Image()
sidiBouSaidImg.src = SidiBouSaid

const sousseImg = new Image()
sousseImg.src = Sousse

const jemImg = new Image()
jemImg.src = Jem

const sunsetImg = new Image()
sunsetImg.src = Sunset

const seaImg = new Image()
seaImg.src = Sea

const slides = [sidiBouSaidImg, jemImg, sousseImg, sunsetImg, seaImg]
imagesContainer.append(sidiBouSaidImg, sousseImg, sunsetImg, seaImg)

function createDot() {
    const dotSvg = new Image(15, 15)
    dotSvg.src = Dot

    return dotSvg
}

function addDotForImg() {
    slides.forEach((_, imgIndex) => {
        const newDot = createDot()
        newDot.dataset.dotindex = imgIndex
        navigationDotsContainer.append(newDot)
        
    })
}
addDotForImg()

function changeDotColor(dotIndex) {
    const dots = navigationDotsContainer.children
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = i === dotIndex ? 'black' : 'transparent'
    }
}

function initialState() {
    activeImage.append(slides[0])
    changeDotColor(0)
}
initialState()  

let index = 0
let intervalID;

function nextImg() {
    index++
    for (let i=0; i<slides.length; i++) {
        if (index === slides.length) {
            index = index - slides.length
           
        }
        activeImage.replaceChildren(slides[index])                
        changeDotColor(index)
        resetAutoChageImageTimer()
    }

}
nextImgBtn.addEventListener('click', nextImg)

function previousImg() {
    index--
    for (let i=slides.length; i>0; i--) {
        if (index < 0) {
            index = slides.length - 1
        }
        activeImage.replaceChildren(slides[index])
        changeDotColor(index)
    }
}
previousImgBtn.addEventListener('click', previousImg)

function changeImgOnDotClick() {
    navigationDotsContainer.addEventListener('click', (e) => {
        if (e.target.dataset.dotindex !== undefined) {
            let clickedDot = parseInt(e.target.dataset.dotindex)
            index = clickedDot
            console.log(index)
            activeImage.replaceChildren(slides[clickedDot])
            changeDotColor(index)
        }        
    })
}
changeImgOnDotClick()


function resetAutoChageImageTimer() {
    clearInterval(intervalID)
    intervalID = setInterval(nextImg, 5000)
}

intervalID = setInterval(nextImg, 5000)