import React, { Component } from 'react'
import ivoryLogo from '../images/logo.png'
import fbLogo from '../images/facebook-logo.svg'
import twLogo from '../images/twitter-logo-silhouette.svg'
import { Image, Grid, Col, Row } from 'react-bootstrap'

import '../customStyles/footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footerContainer'>
        <Grid>

          <div className='footerTitles'>
            <Row>
              <Col xs={6} sm={6} md={6} lg={6}>
                <div className='low-res-align-title1'>
                  Built With Love
                </div>
                <div className='footerDescription'>
                  Quis malis no usu, in eos commodo ponderum periculis. Nonumes facilisi perpetua ei vel, tale animal facilis ea sed. Vim eu integre iudicabit corrumpit. Ex civibus maiestatis argumentum vis, scripta scribentur id vis.
                </div>
              </Col>
              {/* <Col xs={2} sm={2} md={2} lg={2}>
              <div className='low-res-align-container'>
                <div className='low-res-align-titles'>
                  Ivory
                </div>
                <div className='low-res-align-footer'>
                  <Link className='footerLinks' to='\'>What is Ivory?</Link>
                  <Link className='footerLinks' to='\'>Community</Link>
                  <Link className='footerLinks' to='\'>News</Link>
                  <Link className='footerLinks' to='\'>For Business</Link>
                </div>
              </div>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <div className='low-res-align-titles'>
                  About
                </div>
                <div className='low-res-align-footer'>
                  <Link className='footerLinksSecondary' to='\'>Our company</Link>
                  <Link className='footerLinksSecondary' to='\'>Security</Link>
                  <Link className='footerLinksSecondary' to='\'>Legal</Link>
                  <Link className='footerLinksSecondary' to='\'>Legal/artwork</Link>
                </div>
              </Col>
              <Col xs={2} sm={2} md={2} lg={2}>
                <div className='low-res-align-titles'>
                  Help
                </div>
                <div className='low-res-align-footer'>
                  <Link className='footerLinksTertiary' to='\'>Get Started</Link>
                  <Link className='footerLinksTertiary' to='\'>Security</Link>
                  <Link className='footerLinksTertiary' to='\'>Legal</Link>
                  <Link className='footerLinksTertiary' to='\'>Legal/artwork</Link>
                </div>
              </Col> */}
            </Row>
          </div>

          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Image className='ivory-logoFooter' src={ivoryLogo} responsive />
              <div className='footerCopyright'>
                © 2018 Ivory. <br />
                Ivory Framework is free and open-source.
              </div>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <Image className='facebook-logo' src={fbLogo} responsive />
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <Image className='twitter-logo' src={twLogo} responsive />
            </Col>
          </Row>

        </Grid>
      </div>
    )
  }
}
