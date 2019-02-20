import React, { Component } from "react"

class UpsFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: props.filter.node.frontmatter,
            index: props.filter.node.frontmatter.selected,
            showRadioValues: false,
        }
    }
    render() {
        let filter = this.state.filter
        let html
        if(filter.type === "radio") {
            let radioValuesClasses = ["label"]
            if(this.state.showRadioValues)
                radioValuesClasses.push("active")
            html = <div className="radioBox">
                <ul>
                    <li className={radioValuesClasses.join(' ')}>
                        <ul>
                            <li><label>{filter.label}</label></li>
                            <li><button onClick={ this.showRadioValues.bind(this)  }>V</button></li>
                        </ul>
                    </li>
                    <li className="values">
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
                    </li>
                </ul>
                <hr/>
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
    showRadioValues() {
        this.setState({
            showRadioValues: !this.state.showRadioValues
        })
    }
    onChanged(index, e) {
        this.props.onChange(e.currentTarget.name , index)
        this.setState({
            index: parseInt(index)
        })
    }
}

export default UpsFilter