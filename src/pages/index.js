import React from "react"
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
      <p>Find your Power Solution</p>
      <div className="links">
        <a className="link" href={'/products/?phase=0'}>
          <div className="text">
            <p>Single Phase UPS</p>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
          </div>
          <div className="image"><ImageSinglePhase /></div>
        </a>
        <a className="link" href={'/products/?phase=1'}>
          <div className="text">
            <p>Three Phase UPS</p>
            <div className="underLine"/>
            <div className="underLine ul-width-s"/>
          </div>
          <div className="image"><ImageThreePhase /></div>
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
