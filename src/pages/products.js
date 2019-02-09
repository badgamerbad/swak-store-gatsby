import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount(){
    this.setState({
      products: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      )
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Produts" />
        <div className="products">
          <div className="filters">
            <label>Name:</label>
            <input type="text"/>
            <button onClick={ () => this.triggerSearch() }>Search</button>
          </div>
          <div className="content">
            <div className="count"></div>
            <div className="listing">
              {
                this.state.products.map(product => (
                  <li key={product.name}>{product.name}</li>
                ))
              }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  triggerSearch() {
    console.log("search")
  }
}

export default Products

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`;