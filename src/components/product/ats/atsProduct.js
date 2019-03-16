import React from "react"

import './atsProduct.scss'

import AtsImageLoader from "../../../images/ats/atsImageLoader"

class AtsProduct extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let ats = this.props.ats
    return (
      <div className="ats-product">
        <ul>
          <li className="image"><AtsImageLoader imageUrl={ats.imageUrl} /></li>
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
                  <li className="title">Frequency</li>
                  <li className="value">{ats.freq}</li>
                </ul>
              </li>
              <li>
                <ul className="attribute">
                  <li className="title">Nomient Current</li>
                  <li className="value">{ats.current}</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>   
      </div>
    )
  }
}

export default AtsProduct