import React from "react"

import './atsProduct.scss'

import UpsImageLoader from "../../../images/ups/upsImageLoader"

class AtsProduct extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let ats = this.props.ats
    let filters = this.props.filters
    return (
      <div className="ats-product">
        <ul>
          <li className="image"><UpsImageLoader imageUrl={ats.imageUrl} /></li>
          <li className="specification">
            <ul>
              <li className="name">{ats.name}</li>
              <div className="underline underline-large">
                <hr/>
                <hr/>
              </div>
              <li className="spec-header">Product Snapshot</li>
              <div className="underline underline-medium">
                <hr/>
                <hr/>
              </div>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.frequency.label}</li>
                  <li className="value">{ats.frequencyLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">Nominal Current</li>
                  <li className="value">{ats.current}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.voltage.label}</li>
                  <li className="value">{ats.voltageLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">Weight</li>
                  <li className="value">{ats.weight}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">Switching Time</li>
                  <li className="value">{ats.switchingTime}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <a href={ats.url} target="_blank" tilte="SWAK | Facebook" rel="noopener noreferrer"><li className="button">More Details</li></a>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr className="seperator"/> 
      </div>
    )
  }
}

export default AtsProduct