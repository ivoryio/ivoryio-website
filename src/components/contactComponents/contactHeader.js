import React, { Component } from 'react'
import ivoryLogo from '../../images/logo.png'
import { Link } from 'gatsby'
import { Image, Col, Grid, Row } from 'react-bootstrap'

import '../../customStyles/contactStyle/contactHeader.css'
import '../../customStyles/fonts.css'
import $ from 'jquery'

export default class ContactHeader extends Component {
  componentDidMount () {
    var newScript = document.createElement('script')
    var newContent = document.createTextNode(
      `(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){ 
          var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
          f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
          var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
          _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
          
          var ml_account = ml('accounts', '1292624', 'y2g6q7x8c8', 'load');`
    )
    newScript.appendChild(newContent)
    document.head.appendChild(newScript)
  }

  function () {
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault()
        var hash = this.hash
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function () {
            window.location.hash = hash
          }
        )
      }
    })
  }
  render () {
    return (
      <div class='contact-headerContainer'>
        <Grid>
          <Row>
            <Col>
              <Link to='/'>
                <Image
                  className='contact-ivory-logo'
                  src={ivoryLogo}
                  onClick='history.go(0)'
                  responsive
                />
              </Link>
            </Col>

            <div class='contact-navigation-wrapper'>
              <Col>
                <div class='contact-navigationButtons'>
                  <Link
                    className='contact-menuLinks'
                    to='/'
                    onClick='history.go(0)'
                  >
                    Home
                  </Link>
                </div>
              </Col>

              <Col>
                <div class='contact-navigationButtons'>
                  <Link className='contact-menuLinks' to='/businessPage'>
                    For Business
                  </Link>
                </div>
              </Col>

              <Col>
                <div class='contact-navigationButtons'>
                  <Link className='contact-menuLinks' to='/developerPage'>
                    For Developers
                  </Link>
                </div>
              </Col>
            </div>

            <Col>
              <div class='contact-navigationButtons-contact'>
                <Link className='contact-menuLinks' to='/contact'>
                  Contact
                </Link>
              </div>
            </Col>
          </Row>
          <div class='contact-headerGroupRight'>
            <Row>
              <Col>
                <h1 class='contact-headerTitle'>Contact</h1>
              </Col>

            </Row>
            <Row>
              <div class='contact-form-wrap'>
                <Col>
                  <h6 class='label-wrap'>First & Last Name</h6>
                  <h6 class='label-wrap'>Phone no.</h6>
                  <h6 class='label-wrap'>Email address</h6>
                  <h6 class='label-wrap'>Your message</h6>
                </Col>
                <Col>
                  <div
                    class='ml-form-embed'
                    data-account='1292624:y2g6q7x8c8'
                    data-form='1087000:z1m9m1'
                  />
                </Col>
              </div>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
