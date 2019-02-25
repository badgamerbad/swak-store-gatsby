import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpsProduct from "../components/product/ups/upsProduct"
import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilters from "../components/filters/upsFilters/upsFilters"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Products extends Component {
  constructor(props) {
    super(props)
    const paramsString = props.location.search
    const params = new URLSearchParams(paramsString)
    const searchText = params.get('searchText') ? params.get('searchText') : ""
    this.phaseSelected = params.get('phase') ? params.get('phase') : false
    this.state = {
      allProducts: [],
      setFilters: {
        searchText: searchText,
      },
      showFilters: false,
    }
    this.onChange = this.onChange.bind(this)
    this.getAllUpsFilters = this.getAllUpsFilters.bind(this)
    this.closeFilters = this.closeFilters.bind(this)
    this.resetFilters = this.resetFilters.bind(this)
    this.allFilters = []
  }
  componentDidMount() {
    let {setFilters} = this.state
    for(var key in this.allFilters) {
      setFilters[key] = this.allFilters[key].selected
    }
    this.setState({
      allProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      ),
      setFilters: setFilters
    })
  }
  render() {
    let filtersClasses = ["filters"]
    let filtersCloserClasses = ["filterCloser"]
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

    let filteredProducts = this.state.allProducts.filter( elem => {
      let flag = true
      let stateFiltersObject = this.state.setFilters
      for(var key in stateFiltersObject) {
        if(key === "searchText" && stateFiltersObject[key].trim() !== "" && elem.name.toLowerCase().indexOf(stateFiltersObject[key].trim().toLowerCase()) === -1)
          flag = false
        else if( key !== "searchText" && stateFiltersObject[key] !== -1 && stateFiltersObject[key] !== elem[key] )
          flag = false
      }
      return flag
    }).map( (elem, index) => <UpsProduct key={index} index={index} ups={elem} filters={this.allFilters}/> )
    let filteredProductsLength = filteredProducts.length
    if(filteredProductsLength === 0) {
      filteredProducts = <div className="no-results">
        <div className="icon">
          <FontAwesomeIcon icon="frown" />
        </div>
        <p>We couldn't find any matches</p>
      </div>
    }
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className={ filtersClasses.join(' ') }>
            <UpsFilters onChange={this.onChange} resetFilters={this.resetFilters} closeFilters={this.closeFilters} getAllUpsFilters={this.getAllUpsFilters} phaseSelected={this.phaseSelected}/>
          </div>
          <div className="content">
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
            <div className={filtersCloserClasses.join(' ')} onClick={ this.closeFilters.bind(this) }></div>
          </div>
        </div>
      </Layout>
    )
  }
  openFilters() {
    this.setState( {showFilters: true} )
  }
  closeFilters() {
    this.setState( {showFilters: false} )
  }
  resetFilters() {
    let {setFilters} = this.state
    for(var key in this.allFilters) {
      setFilters[key] = -1
    }
    this.setState({
      setFilters: setFilters
    })
  }
  onChange(filterName, value) {
    let {setFilters} = this.state
    this.setState({ 
      setFilters: {
        ...setFilters,
        [filterName]: value
      }
    })
  }
  getAllUpsFilters(data) {
    this.allFilters = data.map( edge => { 
      return { [edge.node.frontmatter.name]: { value: edge.node.frontmatter.value, label: edge.node.frontmatter.label, selected: edge.node.frontmatter.selected } } 
    }).reduce( (acc, cur, i) => { 
      return {...acc, ...cur} 
    } )
  }
  clearSearchText() {
    let {setFilters} = this.state
    setFilters.searchText = "" 
    this.setState({
      setFilters: setFilters
    })
  }
}

export default Products

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
          }
        }
      }
    }
  }
`