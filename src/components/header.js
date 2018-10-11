import React, { Component } from 'react'
import ivoryLogo from '../images/logo.png'
import { Link } from 'gatsby'
import {
  Image,
  Button,
  Col,
  Grid,
  Row
} from 'react-bootstrap'
import '../customStyles/custom.styles.css'

export default class Header extends Component {

  scrollBottom = () => {
    // window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({top: 3500, behavior: "smooth"})
  }

  render () {
    return (
      <div class='headerContainer'>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Link to='/'>
                <Image className='ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
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
