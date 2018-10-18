import React, { Component } from 'react'
import ivoryLogo from '../../images/logo.png'
import { Link } from 'gatsby'
import {
  Image,
  Button,
  Col,
  Grid,
  Row
} from 'react-bootstrap'

import '../../customStyles/businessStyle/businessHeader.css'
import '../../customStyles/fonts.css'

export default class BusinessHeader extends Component {

  scrollBottom = () => {
   
    window.scrollTo({top: document.body.scrollHeight / 2, behavior: "smooth"})
  }
  render () {
    return (
      <div class='business-headerContainer'>
        <Grid>
          <Row>
            <Col xs={7} sm={7} md={7} lg={7}>
              <Link to='/'>
                <Image className='business-ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='business-navigationButtons'>
              <Link className='business-menuLinks' to='/businessPage'>
                For Business
              </Link>
          
              <Link className='business-menuLinks' to='/'>
                For Developers
              </Link>
              </div>
            </Col>

            <Col xs={2} sm={2} md={2} lg={2}>
              <div class='business-navigationButtons-contact'>
              <Link className='business-menuLinks' to='/'>
                Contact
              </Link>
              </div>
            </Col>

          </Row>
          <div class='business-headerGroupRight'>
            <Row>
              <Col xs={10} sm={10} md={7} lg={7} />
              <Col xs={2} sm={2} md={5} lg={5}>
                <h1 class='business-headerTitle'>Ivory for Business</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <p class='business-headerText'>
                Build fast scalable apps <br />with our team
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <Button className='business-headerButton' onClick={this.scrollBottom}>
                  Get in touch
                </Button>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
