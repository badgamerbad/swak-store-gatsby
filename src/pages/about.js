import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './about.scss'

import ServicesImageLoader from '../images/services/servicesImageLoader'

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about">
      <div className="main">
        <div className="text">
          <h1>ABOUT US</h1>
          <p>
            We feel proud in announcing that we are official partners for EATON. Our association
            with EATON is itself a certification of our commitment towards our work. We possess a
            team of skilled professionals who are well versed with the industry knowledge and quality 
            standards. This enables us to meet the requirements and specification of our customers. 
            Our personnel possess a perfect blend of logical and technical skills, which they
            implement to acquire utmost customer satisfaction.
          </p>
        </div>
        <div className="background-image"><ServicesImageLoader imageUrl="about_us" /></div>
        <div className="background-image-responsive"><ServicesImageLoader imageUrl="about_us_mobile" /></div>
      </div>
      <div className="services">
        <p>Our Services</p>
        <ul>
          <li className="cell">
            <div className="text">
              <p>Fire alarm system</p>
              <p>installation &amp; maintainace</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service1" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Site installation &amp;</p>
              <p>commissioning</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service2" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Panel designing &amp;</p>
              <p>wiring</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service3" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Embedded System</p>
              <p>designing</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service4" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Surveillance System</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service5" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Turnkey Solutions</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service6" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>Installation commisioning</p>
              <p>&amp; repairing of drives</p>
              <p>&amp; electronic cards</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service7" />
            </div>
          </li>
          <li className="cell">
            <div className="text">
              <p>PLC solution</p>
            </div>
            <div className="image">
              <ServicesImageLoader imageUrl="service8" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default About