import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFilter, faSort, faSearch, faUndo, faWindowClose, faTimesCircle, faAngleRight, faAngleLeft, faAngleDown, faAngleUp, faCircle, faHourglassHalf, faFrown, faMapMarkedAlt, faPhoneSquare, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add( faFilter, faSort, faSearch, faUndo, faWindowClose, faTimesCircle, faAngleRight, faAngleLeft, faAngleDown, faAngleUp, faCircle, faHourglassHalf, faFrown, faMapMarkedAlt, faPhoneSquare, faMobileAlt, faEnvelope, faFacebook, faTwitter )

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            contact {
              address
              email
              phone0
              phone1
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer contact={data.site.siteMetadata.contact} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
