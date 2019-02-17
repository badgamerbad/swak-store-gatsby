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

const UpsImageLoader = (imageUrl) => {
  // if(imageUrl.imageUrl.indexOf('9E-IN-6-10K') > -1 ){
  //   return (
  //     <StaticQuery
  //       query={graphql`
  //         query {
  //           placeholderImage: file(relativePath: { regex: "/ups/ups-9E-IN-6-10K.jpg/" }) {
  //             childImageSharp {
  //               sizes(maxWidth: 1280) {
  //               ...GatsbyImageSharpSizes
  //               }
  //             }
  //           }
  //         }
  //       `}
  //       render={data => {
  //         return (
  //           <Img sizes={data.placeholderImage.childImageSharp.sizes} />
  //         )
  //       }}
  //     />
  //   )
  // }
  // else if(imageUrl.imageUrl.indexOf('aurora-600-1000va') > -1 ){
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { regex: "/ups/ups-aurora-600-1000va.jpg/" }) {
              childImageSharp {
                sizes(maxWidth: 1280) {
                ...GatsbyImageSharpSizes
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <Img sizes={data.placeholderImage.childImageSharp.sizes} />
          )
        }}
      />
    )
  // }
} 
export default UpsImageLoader
