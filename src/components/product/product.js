import React from "react"

import './product.scss'

const Product = ({elem}) => (
    <div className="product">
        <ul>
            <li>{elem.name}</li>
        </ul>
    </div>
)

export default Product