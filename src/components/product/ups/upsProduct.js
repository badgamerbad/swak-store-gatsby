import React from "react"

import './upsProduct.scss'

import UpsImageLoader from "../../../images/ups/upsImageLoader"

class UpsProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        let ups = this.props.ups
        let filters = this.props.filters
        return (
            <div className="upsProduct">
                <ul>
                    <li><UpsImageLoader imageUrl={ups.imageUrl}/></li>
                    <li>
                        <ul>
                            <li>Name : {ups.name}</li>
                            <li>{filters.powerRating.label}: {ups.powerRatingLabel}</li>
                            <li>{filters.voltage.label}: {ups.voltageLabel}</li>
                            <li>{filters.frequency.label}: {ups.frequencyLabel}</li>
                            <li>{filters.formFactor.label}: {filters.formFactor.value[ups.formFactor]}</li>
                            <li>{filters.phase.label}: {filters.phase.value[ups.phase]}</li>
                            <li>{filters.topology.label}: {filters.topology.value[ups.topology]}</li>
                            <li>{filters.application.label}: {filters.application.value[ups.application]}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UpsProduct