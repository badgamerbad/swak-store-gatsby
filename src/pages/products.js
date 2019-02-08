import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

const Products = (props) => {
  const products = get(props, "data.allMarkdownRemark.edges").map(
    edge => edge.node.frontmatter
  ); 
  // note that if using class component this data will exist on this.props
  // map is to return data only from front matter
  return (
    <Layout>
      <SEO title="Produts" />
      <div className="products">
        <div className="filters">
          <label>Name:</label>
          <input type="text"/>
        </div>
        <div className="content">
          <div className="count"></div>
          <div className="listing">
            {
              products.map(product => (
                <li key={product.name}>{product.name}</li>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
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