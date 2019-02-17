import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import UpsProduct from "../components/product/ups/upsProduct"
import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilters from "../components/filters/upsFilters/upsFilters"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],
      setFilters: {},
    }
    this.onChange = this.onChange.bind(this)
    this.triggerSearch = this.triggerSearch.bind(this)
    this.getAllUpsFilters = this.getAllUpsFilters.bind(this)
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
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className="filters">
            <UpsFilters onChange={this.onChange} triggerSearch={this.triggerSearch} getAllUpsFilters={this.getAllUpsFilters}/>
          </div>
          <div className="content">
            <div className="count">
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
            </div>
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
                }).map( (elem, index) => <UpsProduct key={index} ups={elem} filters={this.allFilters}/> ) 
              }
            </div>
          </div>
        </div>
      </Layout>
    )
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