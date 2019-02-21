import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageLogo from "../../images/logo"
import "./header.scss"

import SearchIcon from "../../images/searchIcon"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      showSearch: false,
    }
  }
  render() {
    let menuDropDownClasses = ["menu-dropdown"]
    let menuBarsClasses = ["menu-bars"]
    let menuItemsClasses = ["menu-items"]
    if(this.state.active) {
      menuDropDownClasses.push('active')
      menuBarsClasses.push("active")
    }
    if(this.state.showSearch) {
      menuItemsClasses.push("showSearch")
    }
    return (
      <header>
        <div className="menu">
          <ul>
            <li className="logo"><ImageLogo /></li>
          </ul>
          <ul>
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="/products/">Products</Link></li>
            <li className="link"><Link to="/about/">About</Link></li>
          </ul>
        </div>
        <div className="menu-mobile">
          <div className="menuBody">
            <ul>
              <li className="logo"><ImageLogo /></li>
              <li className={menuItemsClasses.join(' ')}>
                <ul>
                  <li className="searchText">
                    <input type="text" />
                  </li>
                  <li>
                    <button onClick={ this.toggleSearch.bind(this) } className="searchButton"><SearchIcon /></button>
                  </li>
                  <li>
                    <div className={menuBarsClasses.join(' ')} onClick={ this.toggle.bind(this) }>
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
  toggleSearch() {
    this.setState( {showSearch: !this.state.showSearch} )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
