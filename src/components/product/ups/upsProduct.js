import React from "react"

import './upsProduct.scss'

const UpsProduct = ({elem}) => (
    <div className="product">
        <ul>
            <li>{elem.name}</li>
        </ul>
    </div>
)

export default UpsProduct