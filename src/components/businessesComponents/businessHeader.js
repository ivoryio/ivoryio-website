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
import $ from 'jquery'

export default class BusinessHeader extends Component {
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
      <div class='business-headerContainer'>
        <Grid>
          <Row>
            <Col >
              <Link to='/'>
                <Image className='business-ivory-logo' src={ivoryLogo} onClick='history.go(0)' responsive />
              </Link>
            </Col>
            
            <div class='business-navigation-wrapper'>
             <Col >
              <div class='business-navigationButtons'>
              <Link className='business-menuLinks' to='/' onClick='history.go(0)'>
                Home
              </Link>
              </div>
            </Col>

            <Col >
              <div class='business-navigationButtons'>
              <Link className='business-menuLinks' to='/businessPage'>
                For Business
              </Link>
              </div>
            </Col>

             <Col >
             <div class='business-navigationButtons'>
              <Link className='business-menuLinks' to='/developerPage'>
                For Developers
              </Link>
              </div>
             </Col>
            </div>

            <Col>
              <div class='business-navigationButtons-contact'>
              <Link className='business-menuLinks' to='/contact'>
                Contact
              </Link>
              </div>
            </Col>

          </Row>
          <div class='business-headerGroupRight'>
            <Row>
              <Col xs={10} sm={10} md={7} lg={7} />
              <Col xs={2} sm={2} md={5} lg={5}>
                <h1 class='business-headerTitle'>Ivory For Business</h1>
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
              <a href='#f0rm'> <Button className='business-headerButton' >Get in touch </Button> </a>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
