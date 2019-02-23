import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "./layout.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFilter, faSort, faSearch, faUndo, faWindowClose, faTimesCircle, faAngleRight, faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add( fab, faFilter, faSort, faSearch, faUndo, faWindowClose, faTimesCircle, faAngleRight, faAngleLeft, faAngleDown, faAngleUp )

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
