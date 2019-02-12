import React, { Component } from "react"

import './ups_filter.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

import UpsFilter from "./upsFilter"

class UpsFilter extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
      this.setState({
        allFilters: get(this.props, "data.allMarkdownRemark.edges").map(
          edge => edge.node.frontmatter
        )
      })
    }
    render() {
      return (
        <div>
        {
          this.state.allFilters.map( (filter, index) => <UpsFilter key={index} filter={filter} /> )
        }
        </div>
      )
    }
}

export default UpsFilter

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