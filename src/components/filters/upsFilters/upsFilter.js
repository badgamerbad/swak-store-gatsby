import React, { Component } from "react"

class UpsFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: props.filter.node.frontmatter,
            index: -1
        }
    }
    render() {
        let html
        if(this.state.filter.type === "radio") {
            html = <ul>
                <li>
                    <ul>
                        <li>All</li>
                        <li><input type="radio" value={-1} checked={this.state.index === -1} onChange={this.onChanged.bind(this, -1)} name={this.state.filter.name} /></li>
                    </ul>
                </li>
                {
                    this.state.filter.value.map(
                        (item, index) =>
                            <li key={index}>
                                <ul>
                                    <li>{item}</li>
                                    <li><input type="radio" value={index} checked={this.state.index === index} onChange={this.onChanged.bind(this, index)} name={this.state.filter.name} /></li>
                                </ul>
                            </li>
                    )
                }
            </ul>
        }
        else {
            html = <ul>
                <li><input type="text" name={this.state.filter.name} /></li>
            </ul>
        }
        return (
            <div className="ups-filter">
                <label>{this.state.filter.label}</label>
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