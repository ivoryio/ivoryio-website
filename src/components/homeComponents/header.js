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

import '../../customStyles/homeStyle/custom.styles.css'
import '../../customStyles/fonts.css'

export default class Header extends Component {

  scrollBottom = () => {
   
    window.scrollTo({top: 3500, behavior: "smooth"})
  }

  render () {
    return (
      <div class='headerContainer'>
        <Grid>
          <Row>
            <Col xs={7} sm={7} md={7} lg={7}>
              <Link to='/'>
                <Image className='ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='navigationButtons'>
              <Link className='menuLinks' to='/businessPage'>
                For Business
              </Link>
          
              <Link className='menuLinks' to='/'>
                For Developers
              </Link>
              </div>
            </Col>

            <Col xs={2} sm={2} md={2} lg={2}>
              <div class='navigationButtons-contact'>
              <Link className='menuLinks' to='/'>
                Contact
              </Link>
              </div>
            </Col>

          </Row>
          <div class='headerGroupRight'>
            <Row>
              <Col xs={10} sm={10} md={7} lg={7} />
              <Col xs={2} sm={2} md={5} lg={5}>
                <h1 class='headerTitle'>Ivory</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <p class='headerText'>
                Open Source Cloud & Mobile App <br />Development Platform
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <Button className='headerButton' onClick={this.scrollBottom}>
                  Get Started
                </Button>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
