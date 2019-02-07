import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageLogo from "../../images/logo"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo">
      <ul>
        <li className="logo-li"><ImageLogo /></li>
      </ul>
    </div>
    <div className="menu">
      <ul>
        <div className="menu-bars">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="menu-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products/">Products</Link></li>
            <li><Link to="/about/">About</Link></li>
          </ul>
        </div>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
