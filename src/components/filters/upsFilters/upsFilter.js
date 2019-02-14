import React, { Component } from "react"
import './upsFilter.scss'


class UpsFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: props.filter.node.frontmatter,
            index: -1
        }
    }
    render() {
        return (
            <div className="ups-filter">
                <label>{this.state.filter.name}</label>
                <ul>
                    <li>
                        <ul>
                            <li>All</li>
                            <li><input type="radio" value={-1} checked={this.state.index === -1} onChange={this.onChanged.bind(this, -1)} name={this.state.filter.name}/></li>
                        </ul>
                    </li>
                    {
                        this.state.filter.value.map( 
                            (item, index) => 
                            <li key={index}> 
                                <ul>
                                    <li>{item}</li>
                                    <li><input type="radio" value={index} checked={this.state.index === index} onChange={this.onChanged.bind(this, index)} name={this.state.filter.name}/></li>
                                </ul>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    onChanged(e, i) {
        this.setState({
            index: parseInt(e)
        })
    }
}

export default UpsFilter