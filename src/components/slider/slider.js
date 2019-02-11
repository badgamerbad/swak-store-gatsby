import React, { Component }from "react"

import ImageCatElectrical from "../../images/cat_electrical"
import ImageCatUps from "../../images/cat_ups"

import "./slider.scss"

class Slider extends Component {
  constructor(props) {
    super(props)
    this.imageNumber = 0
    this.timerPointer = null
    this.timeInterval = 9000
  }
  componentDidMount() {
    this.slideArray = document.getElementsByClassName('slide')
    this.imgDivArray = document.getElementsByClassName('img-div')
    this.sliderTimer()
  }
  componentWillUnmount() {
    clearInterval(this.timerPointer)
  }
  render() {
    return (
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
            <button onClick={ () => this.previousSlider() }><span>&lt;</span></button>
            <button onClick={ () => this.nextSlider() }><span>&gt;</span></button>
        </div>
        <div className="highlighter">
            <button className="image" onClick={ () => this.setSlider(0) }>
              <div className="img-div"/>
              <ImageCatElectrical /> 
            </button>
            <button className="image" onClick={ () => this.setSlider(1) }>
              <div className="img-div"/>
              <ImageCatUps />
            </button>
        </div>
    </div>
    )
  }
  previousSlider() {
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
  nextSlider() {
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
  setSlider(index) {
    let selectedIndex = parseInt(index);
    let currentIndex = this.imageNumber;
  
    if( selectedIndex > currentIndex ) {
        for (let i = currentIndex; i < selectedIndex; i++) {
            this.nextSlider();
        }
    }
    else {
        for (let i = selectedIndex; i < currentIndex; i++) {
            this.previousSlider();
        }
    }
  
    clearInterval(this.timerPointer)
    this.sliderTimer()
  }
  setHighlighter() {
    for(let i = 0; i < this.imgDivArray.length; i++) {
      this.imgDivArray[i].classList.remove('active')
    }
    this.imgDivArray[this.imageNumber].classList.add('active')
  }
  sliderTimer(){
    this.timerPointer = setInterval( () => {
      this.nextSlider()
    }, this.timeInterval )
  }
}

export default Slider