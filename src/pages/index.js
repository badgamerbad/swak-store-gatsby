import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Slider from "../components/slider/slider"

import SEO from "../components/seo"

import './index.scss'

import ImageSinglePhase from '../images/1-phase'
import ImageThreePhase from '../images/3-phase'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
    <div className="products-linker">
      <p>Find out your Power Solution</p>
      <div className="links">
        <div className="link">
          <div className="text">
            <Link to={'/products/?phase=0'}>Single Phase UPS</Link>
          </div>
          <div className="image"><ImageSinglePhase /></div>
        </div>
        <div className="link">
          <div className="text">
            <Link to={'/products/?phase=1'}>Three Phase UPS</Link>
          </div>
          <div className="image"><ImageThreePhase /></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
