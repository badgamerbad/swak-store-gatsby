import React from "react"

import './mdcProduct.scss'

import UpsImageLoader from "../../../images/ups/upsImageLoader"

class MdcProduct extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let mdc = this.props.mdc
    let filters = this.props.filters
    return (
      <div className="mdc-product">
        <ul>
          <li className="image"><UpsImageLoader imageUrl={mdc.imageUrl} /></li>
          <li className="specification">
            <ul>
              <li className="name">{mdc.name}</li>
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
                  <li className="title">{filters.powerRating.label}</li>
                  <li className="value">{mdc.powerRatingLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.frequency.label}</li>
                  <li className="value">{mdc.frequencyLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.voltage.label}</li>
                  <li className="value">{mdc.voltageLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.formFactor.label}</li>
                  <li className="value">{filters.formFactor.value[mdc.formFactor]}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">Weight Capacity</li>
                  <li className="value">{mdc.weight}</li>
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

export default MdcProduct