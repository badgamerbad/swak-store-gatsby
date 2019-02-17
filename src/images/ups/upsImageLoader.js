import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

class UpsImageLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <StaticQuery 
        query={graphql`
          query {
            allFile(filter: { extension:{regex:"/(jpeg|jpg|gif|png)/"} } ) {
              edges {
                node {
                  childImageSharp {
                    sizes(maxWidth: 2000) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
          }
        `}
        render={ data => {
          return data.allFile.edges.filter( edge => {
            if( edge.node.childImageSharp.sizes.src.indexOf(this.props.imageUrl) > -1 )
              return true
            else 
              return false
          }).map( (edge, index) => <Img key={index} sizes={edge.node.childImageSharp.sizes} /> )
        }}
      />
    )
  }
}

export default UpsImageLoader
