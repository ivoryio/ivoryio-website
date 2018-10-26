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

import '../../customStyles/developerStyle/developerHeader.css'
import '../../customStyles/fonts.css'
import $ from 'jquery'

export default class DevelopersHeader extends Component {
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
      <div class='dev-headerContainer'>
    <span role="img" aria-label="[Open Source Development Framework]"></span>
        <Grid>
          <Row>
            <Col >
              <Link to='/'>
                <Image className='dev-ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
            </Col>
            
            <div class='dev-navigation-wrapper'>
             <Col >
              <div class='dev-navigationButtons'>
              <Link className='dev-menuLinks' to='/' onClick='history.go(0)'>
                Home
              </Link>
              </div>
            </Col>

            <Col >
              <div class='dev-navigationButtons'>
              <Link className='dev-menuLinks' to='/businessPage'>
                For Business
              </Link>
              </div>
            </Col>

             <Col >
             <div class='dev-navigationButtons'>
              <Link className='dev-menuLinks' to='/developerPage'>
                For Developers
              </Link>
              </div>
             </Col>
            </div>

            <Col>
              <div class='dev-navigationButtons-contact'>
              <Link className='dev-menuLinks' to='/contact'>
                Contact
              </Link>
              </div>
            </Col>

          </Row>
          <div class='dev-headerGroupRight'>
            <Row>
              <Col xs={10} sm={10} md={7} lg={7} />
              <Col xs={2} sm={2} md={5} lg={5}>
                <h1 class='dev-headerTitle'>Ivory For Developers</h1>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
                <p class='dev-headerText'>
                Build, Contribute and Enjoy <br /> the Ivory Community
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={8} sm={8} md={7} lg={7} />
              <Col xs={4} sm={4} md={5} lg={5}>
              <Link to='/contact'> <Button className='dev-headerButton' >Get in touch </Button> </Link>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
