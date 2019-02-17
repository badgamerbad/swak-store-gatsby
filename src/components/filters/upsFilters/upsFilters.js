import React from "react"
import { StaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import './upsFilter.scss'
import UpsFilter from "./upsFilter"

export default (onChange) => (
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
                }
              }
            }
          }
        } 
      `
    }
    render={ 
      data => get(data, "allMarkdownRemark.edges").map( (filter, index) => <UpsFilter key={index} filter={filter} onChange={onChange} /> ) 
    }
  />
)