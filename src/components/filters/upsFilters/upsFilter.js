import React, { Component } from "react"

class UpsFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: props.filter.node.frontmatter,
            index: props.filter.node.frontmatter.selected
        }
    }
    render() {
        let filter = this.state.filter
        let html
        if(filter.type === "radio") {
            html = <div className="radioBox">
                <label>{filter.label}</label>
                <ul>
                    <li>
                        <ul>
                            <li><input type="radio" value={-1} checked={this.state.index === -1} onChange={this.onChanged.bind(this, -1)} name={filter.name} /></li>
                            <li>All</li>
                        </ul>
                    </li>
                    {
                        filter.value.map(
                            (item, index) =>
                                <li key={index}>
                                    <ul>
                                        <li><input type="radio" value={index} checked={this.state.index === index} onChange={this.onChanged.bind(this, index)} name={filter.name} /></li>
                                        <li>{item}</li>
                                    </ul>
                                </li>
                        )
                    }
                </ul>
            </div>
        }
        else {
            html = <ul>
                <li><input type="text" name={filter.name} /></li>
            </ul>
        }
        return (
            <div className="ups-filter">
                { html }
            </div>
        )
    }
    onChanged(index, e) {
        this.props.onChange(e.currentTarget.name , index)
        this.setState({
            index: parseInt(index)
        })
    }
}

export default UpsFilter