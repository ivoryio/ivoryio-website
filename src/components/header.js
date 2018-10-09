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
  render () {
    return (
      <div class='headerContainer'>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Link to='/'>
                <Image className='ivory-logo' src={ivoryLogo} responsive />
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
                Making 5 months project into <br /> 4 week project
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <Link to='/'>
                  <Button className='headerButton'>Get Started</Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
