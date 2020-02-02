import React from "react"

import './upsProduct.scss'

import UpsImageLoader from "../../../images/ups/upsImageLoader"

class UpsProduct extends React.Component {
  constructor (props){
    super(props)
    this.state = {}
  }
  render () {
    let ups = this.props.ups
    let filters = this.props.filters

    let upsUrl = ups.imageUrl;

    // when the file is uploaded from the netlify CMS
    // it gets uploaded in static/images/
    // and the ups md file url contains the prefix /static/images/
    upsUrl = upsUrl.replace("/static/images/", "")

    return (
      <div className="ups-product">
        <ul>
          <li className="image"><UpsImageLoader imageUrl={upsUrl}/></li>
          <li className="specification">
            <ul>
              <li className="name">{ups.name}</li>
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
                  <li className="value">{ups.powerRatingLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.voltage.label}</li>
                  <li className="value">{ups.voltageLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.frequency.label}</li>
                  <li className="value">{ups.frequencyLabel}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.formFactor.label}</li>
                  <li className="value">{filters.formFactor.value[ups.formFactor]}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.phase.label}</li>
                  <li className="value">{filters.phase.value[ups.phase]}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.topology.label}</li>
                  <li className="value">{filters.topology.value[ups.topology]}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">{filters.application.label}</li>
                  <li className="value">{filters.application.value[ups.application]}</li>
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

export default UpsProduct