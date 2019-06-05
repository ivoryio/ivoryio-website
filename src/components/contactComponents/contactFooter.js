import React, { Component } from "react"
import ivoryLogo from "../../images/logo.png"
import fbLogo from "../../images/facebook-logo.svg"
import twLogo from "../../images/twitter-logo-silhouette.svg"
import { Image, Grid, Col, Row } from "react-bootstrap"

import "../../customStyles/contactStyle/contactFooter.css"
import "../../customStyles/fonts.css"
export default class ContactFooter extends Component {
  render() {
    return (
      <div class="contact-footerContainer">
        <Grid>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Image
                className="contact-ivory-logoFooter"
                src={ivoryLogo}
                responsive
              />
              <div class="contact-footerCopyright">
                © 2019 Ivory. <br />
                Ivory Framework is free and open-source.
              </div>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6}>
              <Image
                className="contact-facebook-logo"
                src={fbLogo}
                responsive
              />
              <Image className="contact-twitter-logo" src={twLogo} responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
