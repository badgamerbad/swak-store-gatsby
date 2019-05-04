import React from "react"

import Layout from '../components/layout'
import SEO from "../components/seo"

import "./clients.scss"

import ClientsImageLoader from "../images/clients/clientsImageLoader"

const Client = () => (
  <Layout>
    <SEO title="Our Clients" />
    <div className="container">
      <div className="title">
        <p>Our Clients</p>
        <hr />
      </div>
      <div className="clients">
        <div className="client">
          <div className="image">
            <ClientsImageLoader imageUrl="airport" />
          </div>
          <div className="text">Chatrapati Shivaji International Airport</div>
        </div>
        <div className="client">
          <div className="image">
            <ClientsImageLoader imageUrl="barc" />
          </div>
          <div className="text">BARC</div>
        </div>
        <div className="client">
          <div className="image">
            <ClientsImageLoader imageUrl="dynalog" />
          </div>
          <div className="text">Dynalog</div>
        </div>
        <div className="client">
          <div className="image">
            <ClientsImageLoader imageUrl="oil" />
          </div>
          <div className="text">Indian Oil</div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Client