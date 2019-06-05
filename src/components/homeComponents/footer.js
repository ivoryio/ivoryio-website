import React, { Component } from "react"
import ivoryLogo from "../../images/logo.png"
import fbLogo from "../../images/facebook-logo.svg"
import twLogo from "../../images/twitter-logo-silhouette.svg"
import { Image, Grid, Col, Row } from "react-bootstrap"

import "../../customStyles/homeStyle/footer.css"
import "../../customStyles/fonts.css"
export default class Footer extends Component {
  render() {
    return (
      <div id="footerContainer">
        <Grid>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Image className="ivory-logoFooter" src={ivoryLogo} responsive />
              <div class="footerCopyright">
                © 2019 Ivory. <br />
                Ivory Framework is free and open-source.
              </div>
            </Col>

            <Col xs={6} sm={6} md={6} lg={6}>
              <Image className="facebook-logo" src={fbLogo} responsive />
              <Image className="twitter-logo" src={twLogo} responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
