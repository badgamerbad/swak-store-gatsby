import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Product from "../components/product/product"
import './products.scss'

import { graphql } from "gatsby"
import get from "lodash/get"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: [],
      displayProducts: [],
      phase: -1,
      application: -1,
      power_rating: -1
    }
  }
  componentDidMount(){
    this.setState({
      allProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      ),
      displayProducts: get(this.props, "data.allMarkdownRemark.edges").map(
        edge => edge.node.frontmatter
      )
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Products" />
        <div className="products">
          <div className="filters">
            <label>Name:</label>
            <input type="text"/>
            <br/>
            <label>Phase:</label>
            <br/>
            All<input type="radio" value={-1} checked={this.state.phase === -1} onChange={this.onPhaseChanged.bind(this)} name="phase"/>
            single<input type="radio" value={0} checked={this.state.phase === 0} onChange={this.onPhaseChanged.bind(this)} name="phase"/>
            three<input type="radio" value={1} checked={this.state.phase === 1} onChange={this.onPhaseChanged.bind(this)} name="phase"/>
            <br/>
            <label>Application:</label>
            <br/>
            All<input type="radio" value={-1} checked={this.state.application === -1} onChange={this.onApplicationChanged.bind(this)} name="application"/>
            home<input type="radio" value={0} checked={this.state.application === 0} onChange={this.onApplicationChanged.bind(this)} name="application"/>
            Network and server<input type="radio" value={1} checked={this.state.application === 1} onChange={this.onApplicationChanged.bind(this)} name="application"/>
            Data Center<input type="radio" value={2} checked={this.state.application === 2} onChange={this.onApplicationChanged.bind(this)} name="application"/>
            <br/>
            <label>Power:</label>
            <br/>
            All<input type="radio" value={-1} checked={this.state.power_rating === -1} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            0-1<input type="radio" value={0} checked={this.state.power_rating === 0} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            1-10<input type="radio" value={1} checked={this.state.power_rating === 1} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            10-50<input type="radio" value={2} checked={this.state.power_rating === 2} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            50-500<input type="radio" value={3} checked={this.state.power_rating === 3} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            500-2000<input type="radio" value={4} checked={this.state.power_rating === 4} onChange={this.onPowerChanged.bind(this)} name="power_rating"/>
            <br/>
            <button onClick={ () => this.triggerSearch() }>Search</button>
          </div>
          <div className="content">
            <div className="count"></div>
            <div className="listing">
              { this.state.displayProducts.map( (elem, index) => <Product key={index} elem={elem}/> ) }
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  triggerSearch() {
    let finalList = this.state.allProducts.filter( elem => {
      let flag = true
      if(this.state.phase !== -1 && elem.phase !== this.state.phase)
        flag = false
      if(this.state.application !== -1 && elem.application !== this.state.application)
        flag = false
      if(this.state.power_rating !== -1 && elem.power_rating !== this.state.power_rating)
        flag = false
      return flag
    })

    this.setState({
      displayProducts: finalList
    })
  }
  onPhaseChanged(e) {
    this.setState({
      phase: parseInt(e.currentTarget.value)
    })
  }
  onApplicationChanged(e) {
    this.setState({
      application: parseInt(e.currentTarget.value)
    })
  }
  onPowerChanged(e) {
    this.setState({
      power_rating: parseInt(e.currentTarget.value)
    })
  }
}

export default Products

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/ups/" } }) {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            id
            name
            phase
            application
            power_rating
            power_rating_label
            voltage
            voltage_label
            frequency
            frequency_label
            form_factor
            topology
          }
        }
      }
    }
  }
`;