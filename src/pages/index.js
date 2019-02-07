import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider/slider"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
  </Layout>
)

export default IndexPage
