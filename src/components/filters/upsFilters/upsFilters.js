import React from "react"
import { StaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import './upsFilters.scss'
import UpsFilter from "./upsFilter"

class UpsFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
            query {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/filters/ups/" } },
                sort: { fields: [frontmatter___id], order: ASC }
              ) {
                edges {
                  node {
                    html
                    headings {
                      depth
                      value
                    }
                    frontmatter {
                      name
                      label
                      value
                      type
                      id
                      selected
                    }
                  }
                }
              }
            } 
          `
        }
        render={ 
          data => {
            this.props.getAllUpsFilters( get(data, "allMarkdownRemark.edges") )
            return (
              <>
                <div className="ups-filter">
                  <button className="filterCloser" onClick={ () => this.props.closeFilters() }>X</button>
                </div>
                {
                  get(data, "allMarkdownRemark.edges").map( (filter, index) => <UpsFilter key={index} filter={filter} onChange={this.props.onChange} /> )
                }
              </>
            )
          } 
        }
      />
    )
  }
}

export default UpsFilters