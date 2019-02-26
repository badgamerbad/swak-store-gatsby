import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import ImageLogo from "../../images/logo"
import "./header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from '../../images/logo.svg'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: false,
      showSearch: false,
    }
  }
  componentDidUpdate() {
    if(document.body.offsetWidth < 1000) 
      document.querySelector(".menu-mobile .searchText input").focus()
    else
      document.querySelector(".menu .searchText input").focus()
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
              <li className="logo"><Link to="/"><img src={logo} alt="SWAK Logo"></img></Link></li>
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
                      <Link to="/"><li>Home</li></Link>
                      <Link to="/products/"><li>Products</li></Link>
                      <Link to="/about/"><li>About</li></Link>
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
              <li className="logo"><Link to="/"><img src={logo} alt="SWAK Logo"></img></Link></li>
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
              <Link to="/"><li>Home</li></Link>
              <Link to="/products/"><li>Products</li></Link>
              <Link to="/about/"><li>About</li></Link>
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
