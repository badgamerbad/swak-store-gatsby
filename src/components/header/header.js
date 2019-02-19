import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageLogo from "../../images/logo"
import "./header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }
  render() {
    let menuItemClasses = ["menu-bars"]
    if(this.state.active) 
      menuItemClasses.push('active')
    return (
      <header>
        <div className="logo">
          <ul>
            <li className="logo-li"><ImageLogo /></li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <div className={menuItemClasses.join(' ')} onClick={ this.toggle.bind(this) }>
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
  }
  toggle() {
    this.setState( {active: !this.state.active} )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
