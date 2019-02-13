import React from "react"
import { StaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import './upsFilter.scss'
import UpsFilter from "./upsFilter"

export default () => (
  <StaticQuery
    query={graphql`
        query {
          allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/filters/ups/" } }) {
            edges {
              node {
                html
                headings {
                  depth
                  value
                }
                frontmatter {
                  name
                  value
                }
              }
            }
          }
        } 
      `
    }
    render={ 
      data => get(data, "allMarkdownRemark.edges").map( (filter, index) => <UpsFilter key={index} filter={filter} /> ) 
    }
  />
)