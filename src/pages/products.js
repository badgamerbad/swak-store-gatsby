import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Product from "../components/product/product"
import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilters from "../components/filters/upsFilters/upsFilters"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],
      filters: {}
    }
    this.onChange = this.onChange.bind(this)
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
            <UpsFilters onChange={this.onChange}/>
            <button onClick={ () => this.triggerSearch() }>Search</button>
          </div>
          <div className="content">
            <div className="count"></div>
            <div className="listing">
              { 
                this.state.allProducts.filter( elem => {
                  let flag = true
                  for(var key in this.state.filters) {
                    if( this.state.filters[key] !== -1 && this.state.filters[key] !== elem[key] )
                      flag = false
                  }
                  return flag
                }).map( (elem, index) => <Product key={index} elem={elem}/> ) 
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  triggerSearch() { 
    this.setState({
      
    })
  }
  onChange(filterName, value) {
    let {filters} = this.state
    this.setState({ 
      filters: {
        ...filters,
        [filterName]: value
      }
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
            power_rating
            power_rating_label
            voltage
            voltage_label
            frequency
            frequency_label
            form_factor
            topology
          }
        }
      }
    }
  }
`