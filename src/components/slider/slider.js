import PropTypes from "prop-types"
import React from "react"

import ImageCatElectrical from "../../images/cat_electrical"
import ImageCatUps from "../../images/cat_ups"

import "./slider.scss"

const Slider = () => (
    <div className="slider">
        <div className="slide centered-slide">
            <div className="image">
                <ImageCatElectrical />
            </div>
            <div className="text">
            <h1>Welcome to</h1>
            <h1>SWAK Enterprises</h1>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
            </div>
        </div>
        <div className="slide">
            <div className="image">
                <ImageCatUps />
            </div>
            <div className="text">
                <h1>Backup power, UPS, surge</h1>
                <h1>&amp; IT power distribution</h1>
                <div className="underLine"/>
                <div className="underLine ul-width-s"/>
            </div>
        </div>
        <div className="navigator">
            <button onClick={ () => previousSlider() }><span>&lt;</span></button>
            <button onClick={ () => nextSlider() }><span>&gt;</span></button>
        </div>
        <div className="highlighter">
            <button className="image" onClick={ () => setSlider(0) }>
              <div className="img-div"/>
              <ImageCatElectrical /> 
            </button>
            <button className="image" onClick={ () => setSlider(1) }>
              <div className="img-div"/>
              <ImageCatUps />
            </button>
        </div>
    </div>
)

Slider.propTypes = {
  siteTitle: PropTypes.string,
}

Slider.defaultProps = {
  siteTitle: ``,
}

let slideArray = document.getElementsByClassName('slide')
let imgDivArray = document.getElementsByClassName('img-div')
let imageNumber = 0
let timerPointer = null
const timeInterval = 9000
const previousSlider = () => {
  let centeredSlide = document.querySelector('.centered-slide')
  centeredSlide.classList.remove('centered-slide', 'move-right-center', 'move-left-center')
  centeredSlide.classList.add('move-center-right')

  --imageNumber
  if(imageNumber <= -1) 
    imageNumber = slideArray.length - 1
  
  let previousSlide = slideArray[imageNumber]
  previousSlide.classList.remove('move-center-left', 'move-center-right')
  previousSlide.classList.add('centered-slide', 'move-left-center')

  setHighlighter()

  clearInterval(timerPointer)
  sliderTimer()
}
const nextSlider = () => {
  let centeredSlide = document.querySelector('.centered-slide')
  centeredSlide.classList.remove('centered-slide', 'move-left-center', 'move-right-center')
  centeredSlide.classList.add('move-center-left')
  ++imageNumber
  if(imageNumber >= slideArray.length) 
    imageNumber = 0

  let nextSlide = slideArray[imageNumber]
  nextSlide.classList.remove('move-center-right', 'move-center-left')
  nextSlide.classList.add('centered-slide', 'move-right-center')

  setHighlighter()

  clearInterval(timerPointer)
  sliderTimer()
}
const setSlider = (index) => {
  let selectedIndex = parseInt(index);
  let currentIndex = imageNumber;

  if( selectedIndex > currentIndex ) {
      for (let i = currentIndex; i < selectedIndex; i++) {
          nextSlider();
      }
  }
  else {
      for (let i = selectedIndex; i < currentIndex; i++) {
          previousSlider();
      }
  }

  clearInterval(timerPointer)
  sliderTimer()
}
const setHighlighter = () => {
  for(let i = 0; i < imgDivArray.length; i++) {
    imgDivArray[i].classList.remove('active')
  }
  imgDivArray[imageNumber].classList.add('active')
}
const sliderTimer = () => {
  timerPointer = setInterval( () => {
    nextSlider()
  }, timeInterval )
}
sliderTimer()

export default Slider