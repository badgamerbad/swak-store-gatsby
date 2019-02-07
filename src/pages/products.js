import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './products.scss'

const Products = () => (
  <Layout>
    <SEO title="Produts" />
    <div className="products">
      <div className="filters">
        <label>Name:</label>
        <input type="text"/>
      </div>
      <div className="content">
        <div className="count"></div>
        <div className="listing">

        </div>
      </div>
    </div>
  </Layout>
)

export default Products
