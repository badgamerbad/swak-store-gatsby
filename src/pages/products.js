import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpsProduct from "../components/product/ups/upsProduct"
import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilters from "../components/filters/upsFilters/upsFilters"

import FilterIcon from '../images/filter'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],
      setFilters: {},
      showFilters: false,
    }
    this.onChange = this.onChange.bind(this)
    this.triggerSearch = this.triggerSearch.bind(this)
    this.getAllUpsFilters = this.getAllUpsFilters.bind(this)
    this.closeFilters = this.closeFilters.bind(this)
    this.allFilters = []
  }
  componentDidMount() {
    this.setState({
      allProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      )
    })
  }
  render() {
    let filtersClasses = ["filters"]
    let filtersCloserClasses = ["filterCloser"]
    if(this.state.showFilters) {
      filtersClasses.push("active")
      filtersCloserClasses.push("active")
    }
      
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className={ filtersClasses.join(' ') }>
            <UpsFilters onChange={this.onChange} closeFilters={this.closeFilters} triggerSearch={this.triggerSearch} getAllUpsFilters={this.getAllUpsFilters}/>
          </div>
          <div className="content">
            <div className="count">
              <ul>
                <li>
                  {
                    this.state.allProducts.filter( elem => {
                      let flag = true
                      let stateFiltersObject = this.state.setFilters
                      for(var key in stateFiltersObject) {
                        if(key === "searchText" && stateFiltersObject[key].trim() !== "" && elem.name.toLowerCase().indexOf(stateFiltersObject[key].trim().toLowerCase()) === -1)
                          flag = false
                        else if( key !== "searchText" && stateFiltersObject[key] !== -1 && stateFiltersObject[key] !== elem[key] )
                          flag = false
                      }
                      return flag
                    }).map( elem => elem ).length
                  } Results
                </li>
                <li className="filter-button">
                  <button onClick={ this.openFilters.bind(this) }><FilterIcon /></button>
                </li>
              </ul>
            </div>
            <hr />
            <div className="listing">
              { 
                this.state.allProducts.filter( elem => {
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
              }
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
  triggerSearch(searchText) { 
    let {setFilters} = this.state
    this.setState({ 
      setFilters: {
        ...setFilters,
        searchText: searchText
      }
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
      return { [edge.node.frontmatter.name]: {value: edge.node.frontmatter.value, label: edge.node.frontmatter.label} } 
    }).reduce( (acc, cur, i) => { 
      return {...acc, ...cur} 
    } )
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