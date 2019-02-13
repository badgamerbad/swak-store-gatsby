import React from "react"

import './upsFilter.scss'

const UpsFilter = ({filter}) => {
    return (
        <div className="ups-filter">
            <label>{filter.node.frontmatter.name}</label>
            <ul>
                <li>
                    <ul>
                        <li>All</li>
                        <li><input type="radio" value={-1} checked={isChecked.bind(this) === -1} onChange={onChanged.bind(this)} name={filter.node.frontmatter.name}/></li>
                    </ul>
                </li>
                {
                    filter.node.frontmatter.value.map( 
                        (item, index) => 
                        <li key={index}> 
                            <ul>
                                <li>{item}</li>
                                <li><input type="radio" value={index} checked={isChecked.bind(this) === index} onChange={onChanged.bind(this)} name={filter.node.frontmatter.name}/></li>
                            </ul>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const onChanged = (e) => {
    console.log('on changed')
    console.log(e)
    return parseInt(e.currentTarget.value)
}
const isChecked = (e) => {
    console.log('Is checked')
    console.log(e)
}

export default UpsFilter