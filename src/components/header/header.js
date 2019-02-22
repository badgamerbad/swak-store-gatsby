import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageLogo from "../../images/logo"
import "./header.scss"

import SearchIcon from "../../images/searchIcon"
import CloseIcon from "../../images/closeIcon"

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: false,
      showSearch: false,
    }
  }
  render() {
    let menuDropDownClasses = ["menu-dropdown"]
    let menuBarsClasses = ["menu-bars"]
    let menuBodyClasses = ["menu-body"]
    if(this.state.active) {
      menuDropDownClasses.push('active')
      menuBarsClasses.push("active")
    }
    if(this.state.showSearch) {
      menuBodyClasses.push("showSearch")
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
          <div className={menuBodyClasses.join(' ')}>
            <ul>
              <li className="logo"><ImageLogo /></li>
              <li className="menu-items">
                <ul>
                  <li>
                    <button onClick={ this.closeSearch.bind(this) } className="searchButton">
                      <CloseIcon />
                    </button>
                  </li>
                  <li className="searchText">
                    <input type="text" placeholder="Search" onKeyDown={ this.submitProduct.bind(this) }/>
                  </li>
                  <li>
                    <button onClick={ this.openSearch.bind(this) } className="searchButton">
                      <SearchIcon />
                    </button>
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
  openSearch() {
    this.setState( {showSearch: true} )
  }
  closeSearch() {
    this.setState( {showSearch: false} )
  }
  submitProduct(e) {
    if(e.key === "Enter") {
      window.location = '/products?searchText=' + e.currentTarget.value
    }
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
