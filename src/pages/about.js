import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './about.scss'

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about">
      <h1>ABOUT US</h1>
      <p>
        We feel proud in announcing that we are official partners for EATON. Our association
        with EATON is itself a certification of our commitment towards our work. We possess a
        team of skilled professionals who are well versed with the industry knowledge and qual-
        ity standards. This enables us to meet the requirements and specification of our cus-
        tomers. Our personnel possess a perfect blend of logical and technical skills, which they
        implement to acquire utmost customer satisfaction.
      </p>
    </div>
  </Layout>
)

export default About