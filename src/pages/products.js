import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './products.scss'

import ImageUps from '../images/imageUps'
import ImageAts from '../images/imageAts'

class Products extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className="products-linker">
            <p>Find your Power Solution</p>
            <div className="links">
              <a className="link" href={'/upsProducts/'}>
                <div className="text">
                  <p>UPS</p>
                  <div className="underLine"/>
                  <div className="underLine ul-width-s"/>
                </div>
                <div className="image"><ImageUps /></div>
              </a>
              <a className="link" href={'/atsProducts/'}>
                <div className="text">
                  <p>ATS</p>
                  <div className="underLine"/>
                  <div className="underLine ul-width-s"/>
                </div>
                <div className="image"><ImageAts /></div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
<<<<<<< HEAD
  openFilters () {
    this.setState( {showFilters: true} )
  }
  closeFilters () {
    this.setState( {showFilters: false} )
  }
  resetFilters () {
    let {setFilters} = this.state
    for(let key in this.allFilters) {
      setFilters[key] = -1
    }
    this.setState({
      setFilters: setFilters,
      animateFade: true
    })
    setTimeout(() => {
      this.setState({
        animateFade: false
      })
    }, 1000)
  }
  onChange (filterName, value) {
    let {setFilters} = this.state
    this.setState({ 
      setFilters: {
        ...setFilters,
        [filterName]: value
      },
      animateFade: true
    })
    setTimeout(() => {
      this.setState({
        animateFade: false
      })
    }, 1000)
  }
  scrollEventHandler (e) {
    this.setState({
      hideGotoTop: e.currentTarget.pageYOffset < 2 * e.currentTarget.innerHeight ? true : false
    })
  }
  gotoTop () {
    let startY = this.currentYPosition()
    let stopY = 0
    this.smoothScroll(startY, stopY)
  }
  currentYPosition () {
    if(this.pageYOffset) 
      return this.pageYOffset
    if(document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop
    if(document.body.scrollTop) 
      return document.body.scrollTop
    return 0
  }
  elementYPosition (elementName) {
    let element = document.getElementsByClassName(elementName)
    let y = element[0].offsetTop
    let node = element
    while (node[0].offsetParent && node[0].offsetParent !== document.body) {
      node = []
      node.push( element[0].offsetParent )
      y += node[0].offsetTop
    } 
    y -= document.querySelector(`header`).offsetHeight
    return y
  }
  smoothScroll (startY, stopY){
    let distance = stopY > startY ? stopY - startY : startY - stopY
    if (distance < 100) {
      window.scrollTo(0, stopY) 
      return
    }
    let speed = Math.round( distance / 100 )
    if( speed >= 20 ) speed = 20
    let step = Math.round( distance / 25 )
    let leapY = stopY > startY ? startY + step : startY - step
    let timer = 0
    if( stopY > startY ) {
      for ( let i = startY; i < stopY; i += step ) {
        (function (leapY) {
          setTimeout( function () {
            window.scrollTo(0, leapY)
          } , timer * speed )
        })(leapY)
        leapY += step
        if (leapY > stopY)
          leapY = stopY
        timer++
      }
      return
    }
    else {
      for ( let i = startY; i > stopY; i -= step ) {
        (function (leapY) {
          setTimeout( function () {
            window.scrollTo(0, leapY)
          } , timer * speed )
        })(leapY)
        leapY -= step
        if (leapY < stopY)
          leapY = stopY
        timer++
      }
    }
    return false
  }
  getAllUpsFilters (data) {
    this.allFilters = data.map( edge => { 
      return { [edge.node.frontmatter.name]: { value: edge.node.frontmatter.value, label: edge.node.frontmatter.label, selected: edge.node.frontmatter.selected } } 
    }).reduce( (acc, cur) => { 
      return {...acc, ...cur} 
    } )
  }
  clearSearchText () {
    let {setFilters} = this.state
    setFilters.searchText = "" 
    this.setState({
      setFilters: setFilters
    })
  }
=======
>>>>>>> a4e1bda922445f319c8b8481b64e882b2f4ad721
}

export default Products