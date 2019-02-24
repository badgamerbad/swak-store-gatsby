import React, { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

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
        <div className="main-content">
          <div className="contact">
            <ul>
              <li className="title">Contact Us</li>
              <li>
                <div className="underLine" />
                <div className="underLine ul-width-s" />
              </li>
              <li>
                <ul className="field">
                  <li><FontAwesomeIcon icon="map-marked-alt" /></li>
                  <li>{this.props.contact.address}</li>
                </ul>
              </li>
              <li>
                <ul className="field">
                  <li><FontAwesomeIcon icon="envelope" /></li>
                  <li>{this.props.contact.email}</li>
                </ul>
              </li>
              <li>
                <ul className="field">
                  <li><FontAwesomeIcon icon="phone-square" /></li>
                  <li>{this.props.contact.phone}</li>
                </ul>
              </li>
              <li>
                <ul className="social-media-field">
                  <li>Follow us On</li>
                  <li>
                    <ul className="icons">
                      <li><a href="https://www.facebook.com/pg/swak.co.in/about/" target="_blank" tilte="SWAK | Facebook" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'facebook' })} /></a></li>
                      <li><a href="https://www.facebook.com/pg/swak.co.in/about/" target="_blank" tilte="SWAK | Twitter" rel="noopener noreferrer"><FontAwesomeIcon icon={icon({ prefix: 'fab', iconName: 'twitter' })} /></a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="enquiry">
            <form name="foo" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
              <ul>
                <li className="title">Enquiry Form</li>
                <li>
                  <div className="underLine" />
                  <div className="underLine ul-width-s" />
                </li>
                <li>
                  <ul className="field">
                    <li><label>Name</label></li>
                    <li><input name="name" placeholder="Name" type="text" required></input></li>
                  </ul>
                </li>
                <li>
                  <ul className="field">
                    <li><label>Email</label></li>
                    <li><input name="email" placeholder="Email" type="email" required></input></li>
                  </ul>
                </li>
                <li>
                  <ul className="field">
                    <li><label>Phone</label></li>
                    <li><input name="phone" placeholder="Phone" type="text"></input></li>
                  </ul>
                </li>
                <li>
                  <ul className="field">
                    <li><label>Message</label></li>
                    <li><textarea name="message" cols="30" rows="5" required></textarea></li>
                  </ul>
                </li>
                <li><button>Submit</button></li>
              </ul>
            </form>
          </div>
        </div>
        <div className="developer">
          <div className="content">
            © {new Date().getFullYear()}, Built By BadGAMERbaD with
            {` `}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer