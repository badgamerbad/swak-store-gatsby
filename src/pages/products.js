import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './products.scss'

import ImageUps from '../images/imageUps'
import ImageAts from '../images/imageAts'

class Products extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className="products-linker">
            <p>Find your Power Solution</p>
            <div className="links">
              <a className="link" href={'/upsProducts/'}>
                <div className="text">
                  <p>UPS</p>
                  <div className="underLine"/>
                  <div className="underLine ul-width-s"/>
                </div>
                <div className="image"><ImageUps /></div>
              </a>
              <a className="link" href={'/atsProducts/'}>
                <div className="text">
                  <p>ATS</p>
                  <div className="underLine"/>
                  <div className="underLine ul-width-s"/>
                </div>
                <div className="image"><ImageAts /></div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Products