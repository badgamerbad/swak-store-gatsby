import React, { Component } from "react"

import "./footer.scss"

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date().getFullYear()
        }
    }
    render() {
        return (
            <footer className="footer">
                © { this.state.date }, Built with
                {` `}
                <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
            </footer>
        )
    }
}

export default Footer