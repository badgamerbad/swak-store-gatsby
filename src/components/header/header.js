import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImageLogo from "../../images/logo"
import "./header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: false,
      showSearch: false,
    }
  }
  componentDidUpdate() {
    document.querySelector(".menu-mobile .searchText input").focus()
  }
  render() {
    let menuDropDownClasses = ["menu-dropdown"]
    let menuNamesClasses = ["menu-name"]
    let menuBodyClasses = ["menu-body"]
    if(this.state.active) {
      menuDropDownClasses.push('active')
      menuNamesClasses.push("active")
    }
    if(this.state.showSearch) {
      menuBodyClasses.push("showSearch")
    }
    return (
      <header>
        <div className="menu">
          <div className={menuBodyClasses.join(' ')}>
            <ul>
              <li className="logo"><ImageLogo /></li>
              <li className="menu-items">
                <ul>
                  <li className="menu-search">
                    <ul>
                      <li>
                        <button onClick={ this.closeSearch.bind(this) } className="closeButton">
                          <FontAwesomeIcon icon="window-close" />
                        </button>
                      </li>
                      <li className="searchText">
                        <input type="text" placeholder="Search" onKeyDown={ this.submitProduct.bind(this) }/>
                      </li>
                      <li>
                        <button onClick={ this.openSearch.bind(this) } className="searchButton">
                          <FontAwesomeIcon icon="search" />
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-name">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/products/">Products</Link></li>
                      <li><Link to="/about/">About</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-mobile">
          <div className={menuBodyClasses.join(' ')}>
            <ul>
              <li className="logo"><ImageLogo /></li>
              <li className="menu-items">
                <ul>
                  <li className="menu-search">
                    <ul>
                      <li>
                        <button onClick={ this.closeSearch.bind(this) } className="closeButton">
                          <FontAwesomeIcon icon="window-close" />
                        </button>
                      </li>
                      <li className="searchText">
                        <input type="text" placeholder="Search" onKeyDown={ this.submitProduct.bind(this) }/>
                      </li>
                      <li>
                        <button onClick={ this.openSearch.bind(this) } className="searchButton">
                          <FontAwesomeIcon icon="search" />
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className={menuNamesClasses.join(' ')} onClick={ this.toggle.bind(this) }>
                    <div></div>
                    <div></div>
                    <div></div>
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
    if(this.state.showSearch){
      let searhText = document.querySelector(".menu-mobile .searchText input").value.trim()
      window.location = '/products?searchText=' + searhText
    }
    else {
      this.setState( {showSearch: true} )
    } 
  }
  closeSearch() {
    this.setState( {showSearch: false} )
  }
  submitProduct(e) { 
    if(e.key === "Enter") {
      window.location = '/products?searchText=' + e.currentTarget.value.trim()
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
