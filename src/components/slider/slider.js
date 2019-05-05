import React, { Component }from "react"

import ImageAboutUs from "../../images/imageAboutUs"
import ImageProducts from "../../images/imageProducts"

import "./slider.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Slider extends Component {
  constructor (props) {
    super(props)
    this.imageNumber = 0
    this.timerPointer = null
    this.timeInterval = 9000
  }
  componentDidMount () {
    this.slideArray = document.getElementsByClassName('slide')
    this.imgDivArray = document.getElementsByClassName('img-div')
    this.sliderTimer()
  }
  componentWillUnmount () {
    clearInterval(this.timerPointer)
  }
  render () {
    return (
      <div className="slider">
        <a href="/about/" title="Know More">
          <div className="slide centered-slide">
            <div className="image">
              <ImageAboutUs />
            </div>
            <div className="text">
              <h1>Welcome to</h1>
              <h1>SWAK Enterprises</h1>
              <div className="underLine"/>
              <div className="underLine ul-width-s"/>
              <button className="button-info">Know More</button>
            </div>
          </div>
        </a>
        <a href="http://www.eaton.in/EatonIN/ProductsServices/Electrical/index.htm" target="_blank" title="Eaton | Electrical" rel="noopener noreferrer">
          <div className="slide">
            <div className="image">
              <ImageProducts />
            </div>
            <div className="text">
              <h1>EATON | Electrical</h1>
              <div className="underLine"/>
              <div className="underLine ul-width-s"/>
              <button className="button-info">Find Solution</button>
            </div>
          </div>
        </a>
        <div className="navigator">
          <button onClick={ () => this.previousSlider() }><FontAwesomeIcon icon="angle-left" /></button>
          <button onClick={ () => this.nextSlider() }><FontAwesomeIcon icon="angle-right" /></button>
        </div>
        <div className="highlighter">
          <button className="image" onClick={ () => this.setSlider(0) }>
            <div className="img-div"/>
            <ImageAboutUs /> 
          </button>
          <button className="image" onClick={ () => this.setSlider(1) }>
            <div className="img-div"/>
            <ImageProducts />
          </button>
        </div>
      </div>
    )
  }
  previousSlider () {
    let centeredSlide = document.querySelector('.centered-slide')
    centeredSlide.classList.remove('centered-slide', 'move-right-center', 'move-left-center')
    centeredSlide.classList.add('move-center-right')
  
    --this.imageNumber
    if(this.imageNumber <= -1) 
      this.imageNumber = this.slideArray.length - 1
    
    let previousSlide = this.slideArray[this.imageNumber]
    previousSlide.classList.remove('move-center-left', 'move-center-right')
    previousSlide.classList.add('centered-slide', 'move-left-center')
  
    this.setHighlighter()
  
    clearInterval(this.timerPointer)
    this.sliderTimer()
  }
  nextSlider () {
    let centeredSlide = document.querySelector('.centered-slide')
    centeredSlide.classList.remove('centered-slide', 'move-left-center', 'move-right-center')
    centeredSlide.classList.add('move-center-left')
    ++this.imageNumber
    if(this.imageNumber >= this.slideArray.length) 
      this.imageNumber = 0
  
    let nextSlide = this.slideArray[this.imageNumber]
    nextSlide.classList.remove('move-center-right', 'move-center-left')
    nextSlide.classList.add('centered-slide', 'move-right-center')
  
    this.setHighlighter()
  
    clearInterval(this.timerPointer)
    this.sliderTimer()
  }
  setSlider (index) {
    let selectedIndex = parseInt(index)
    let currentIndex = this.imageNumber
  
    if( selectedIndex > currentIndex ) {
      for (let i = currentIndex; i < selectedIndex; i++) {
        this.nextSlider()
      }
    }
    else {
      for (let i = selectedIndex; i < currentIndex; i++) {
        this.previousSlider()
      }
    }
  
    clearInterval(this.timerPointer)
    this.sliderTimer()
  }
  setHighlighter () {
    for(let i = 0; i < this.imgDivArray.length; i++) {
      this.imgDivArray[i].classList.remove('active')
    }
    this.imgDivArray[this.imageNumber].classList.add('active')
  }
  sliderTimer (){
    this.timerPointer = setInterval( () => {
      this.nextSlider()
    }, this.timeInterval )
  }
}

export default Slider