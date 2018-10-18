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
import $ from 'jquery'

export default class Header extends Component {
  function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    })
  }
  render () {
    return (
      <div class='headerContainer'>
        <Grid>
          <Row>
            <Col>
              <Link to='/'>
                <Image className='ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
            </Col>
            
            <div class='navigation-wrapper'>
             <Col >
              <div class='navigationButtons'>
              <Link className='menuLinks' to='/'>
                Home
              </Link>
              </div>
            </Col>

            <Col>
              <div class='navigationButtons'>
              <Link className='menuLinks' to='/businessPage'>
                For Business
              </Link>
              </div>
            </Col>

            <Col>
            <div class='navigationButtons'>
              <Link className='menuLinks' to='/'>
                For Developers
              </Link>
              </div>
            </Col>
            </div>

            <Col>
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
              <a href='#f0rm'> <Button className='headerButton' >Get in touch </Button> </a>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
