import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpsProduct from "../components/product/ups/upsProduct"
import AtsProduct from "../components/product/ats/atsProduct"
import MdcProduct from "../components/product/mdc/mdcProduct"
import './upsProducts.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilters from "../components/filters/upsFilters/upsFilters"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Ups extends Component {
  constructor (props) {
    super(props)
    const paramsString = props.location.search
    const params = new URLSearchParams(paramsString)
    const searchText = params.get('searchText') ? params.get('searchText') : ""
    // These keys should match the name attribute in filters markdown
    this.preselectedFilters = {
      type: params.get('type') ? params.get('type') : false,
      phase: params.get('phase') ? params.get('phase') : false,
    }
    this.baseState = this.state
    this.state = {
      allProducts: [],
      setFilters: {
        searchText: searchText,
      },
      showFilters: false,
      hideGotoTop: true,
    }
    this.onChange = this.onChange.bind(this)
    this.getAllUpsFilters = this.getAllUpsFilters.bind(this)
    this.closeFilters = this.closeFilters.bind(this)
    this.resetFilters = this.resetFilters.bind(this)
    this.gotoTop = this.gotoTop.bind(this)
    this.allFilters = []
  }
  componentDidMount () {
    let {setFilters} = this.state
    for(let key in this.allFilters) {
      setFilters[key] = this.allFilters[key].selected
    }
    this.setState({
      allProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      ),
      setFilters: setFilters
    })
    window.addEventListener('scroll', this.scrollEventHandler.bind(this))
  }
  componentWillUnmount () {
    // this.resetFilters()
  }
  render () {
    let filtersClasses = ["filters"]
    let filtersCloserClasses = ["filter-closer-div"]
    if(this.state.showFilters) {
      filtersClasses.push("active")
      filtersCloserClasses.push("active")
    }

    let searchTextCancelor = ""
    if(this.state.setFilters.searchText.length > 0) {
      searchTextCancelor = <ul className="search-text">
        <li>
          <button onClick={this.clearSearchText.bind(this)}>
            "{ this.state.setFilters.searchText }" <FontAwesomeIcon icon="times-circle" />
          </button>
        </li>
      </ul>
    }

    let contentClasses = ["content"]
    let loaderClasses = ["loader"]
    if(this.state.animateFade) {
      contentClasses.push("fade")
      loaderClasses.push("load")
    }
    
    let filteredProducts = this.state.allProducts.filter( elem => {
      let flag = true
      let stateFiltersObject = this.state.setFilters
      for(let key in stateFiltersObject) {
        if(key === "searchText" && stateFiltersObject[key].trim() !== "" && elem.name.toLowerCase().indexOf(stateFiltersObject[key].trim().toLowerCase()) === -1)
          flag = false
        else if( key !== "searchText" && stateFiltersObject[key] !== -1 && stateFiltersObject[key] !== elem[key] )
          flag = false
      }
      return flag
    }).map( (elem, index) => {
      if(elem.type === 0)
        return <UpsProduct key={index} index={index} ups={elem} filters={this.allFilters}/>
      else if(elem.type === 1)
        return <AtsProduct key={index} index={index} ats={elem} filters={this.allFilters}/>
      else
        return <MdcProduct key={index} index={index} mdc={elem} filters={this.allFilters}/>
    })
    let filteredProductsLength = filteredProducts.length
    if(filteredProductsLength === 0) {
      filteredProducts = <div className="no-results">
        <div className="icon">
          <FontAwesomeIcon icon="frown" />
        </div>
        <p>We couldn't find any matches</p>
      </div>
    }

    let gotoTopClasses = ["goto-top"]
    if(this.state.hideGotoTop)
      gotoTopClasses.push('inactive')

    return (
      <Layout>
        <SEO title="UPS" />
        <div className="ups-products">
          <div className={ filtersClasses.join(' ') }>
            <UpsFilters 
              onChange={this.onChange} 
              resetFilters={this.resetFilters} 
              closeFilters={this.closeFilters} 
              getAllUpsFilters={this.getAllUpsFilters} 
              preselectedFilters={this.preselectedFilters}
            />
          </div>
          <div className={contentClasses.join(' ')}>
            <div className="count">
              <ul>
                <li>
                  { filteredProductsLength } Results
                </li>
                <li className="filter-button">
                  <button onClick={ this.openFilters.bind(this) }><FontAwesomeIcon icon="filter" /></button>
                </li>
              </ul>
              <hr />
              { searchTextCancelor }
            </div>
            <div className="listing">
              { filteredProducts }
            </div>
          </div>
          <div className={filtersCloserClasses.join(' ')} onClick={this.closeFilters.bind(this)}>
            <div className={loaderClasses.join(' ')}>
              <FontAwesomeIcon icon="hourglass-half" />
            </div>
          </div>
          <div className={gotoTopClasses.join(' ')} onClick={this.gotoTop.bind(this)}><FontAwesomeIcon icon="angle-up" /></div>
        </div>
      </Layout>
    )
  }
  openFilters () {
    this.setState( {showFilters: true} )
  }
  closeFilters () {
    this.setState( {showFilters: false} )
  }
  // Reset parent (upsProducts.js) filters, child filter reset happens at upsFilter.js -> resetChildFilters
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
}

export default Ups

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/ups/" } }) {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            id
            type
            name
            phase
            application
            powerRating
            powerRatingLabel
            voltage
            voltageLabel
            frequency
            frequencyLabel
            formFactor
            topology
            imageUrl
            current
            weight
            switchingTime
            url
          }
        }
      }
    }
  }
`