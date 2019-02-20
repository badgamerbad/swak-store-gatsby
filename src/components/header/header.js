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
    let menuDropDownClasses = ["menu-dropdown"]
    if(this.state.active) 
      menuDropDownClasses.push('active')
    return (
      <header>
        <div className="menu">
          <ul>
            <li className="logo"><ImageLogo /></li>
          </ul>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products/">Products</Link></li>
            <li><Link to="/about/">About</Link></li>
          </ul>
        </div>
        <div className="menu-mobile">
          <div className="menuBody">
            <ul>
              <li>
                <ul>
                  <li className="logo"><ImageLogo /></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <button>Search</button>
                  </li>
                  <li>
                    <div className="menu-bars" onClick={ this.toggle.bind(this) }>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={menuDropDownClasses.join(' ')}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products/">Products</Link></li>
              <li><Link to="/about/">About</Link></li>
            </ul>
          </div>
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
