import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./atsProducts.scss"

import { graphql } from "gatsby"
import get from "lodash/get"

import AtsProduct from "../components/product/ats/atsProduct"

class AtsProducts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allProducts: [],
    }
  }
  componentDidMount () {
    this.setState({
      allProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      )
    })
  }
  render () {
    return (
      <Layout>
        <SEO title="ATS" />
        <div className="ats-products">
          <div className="content">
            <div className="count">
              <ul>
                <li>
                  { this.state.allProducts.length } Results
                </li>
              </ul>
              <hr />
            </div>
            <div className="listing">
              {
                this.state.allProducts.map(
                  (elem, index) => <AtsProduct key={index} ats={elem} />
                )
              }   
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AtsProducts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/products/ats/" } }) {
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
            freq
            current
            imageUrl
          }
        }
      }
    }
  }
`