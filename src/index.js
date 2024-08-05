import './style.css'
import SidiBouSaid from './assets/img/sidi-bou-said.jpg'
import Sousse from './assets/img/sousse.jpg'
import Jem from './assets/img/el-jem-tunisia.jpg'
import Dot from './assets/svg/navigation-dot.svg'
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

const slides = [sidiBouSaidImg, jemImg, sousseImg]
imagesContainer.append(sidiBouSaidImg, sousseImg)
activeImage.append(slides[0])

function createDot() {
    const dotSvg = new Image(30, 30)
    dotSvg.src = Dot

    return dotSvg
}

function addDotForImg() {
    slides.forEach(() => {
        const newDot = createDot()
        navigationDotsContainer.append(newDot)
    })
}
addDotForImg()

let index = 0
function nextImg() {
    index++
    for (let i=0; i<slides.length; i++) {
        if (index === slides.length) {
            index = index - slides.length
        }
        activeImage.replaceChildren(slides[index])        
        
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
    }
}
previousImgBtn.addEventListener('click', previousImg)

// setInterval(nextImg, 5000)


