import React from "react"

import './upsFilter.scss'

const UpsFilter = ({filter}) => {
    <div className="ups-filter">
        <label>{filter.name}</label>
        <ul>
            <li>
                <ul>
                    <li>All</li>
                    <li><input type="radio" value={-1} checked={this.state.phase === -1} onChange={this.onChanged.bind(this)} name="phase"/></li>
                </ul>
            </li>
            {
                filter.value.map( 
                    (item, index) => 
                    <li>
                        <ul>
                            <li>{item}</li>
                            <li><input type="radio" value={index} checked={this.state.phase === index} onChange={this.onChanged.bind(this)} name="phase"/></li>
                        </ul>
                    </li>
                )
            }
        </ul>
    </div>
}

export default UpsFilter