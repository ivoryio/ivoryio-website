import React, {Component} from 'react'
import { Row, Grid, Col, FormControl, Button } from 'react-bootstrap'

import './launchingSoonCSS.css'
import constants from '../constants/constants'

export default class LaunchingSoon extends Component {
  render () {
    return (
      <div className={'containerLaunching'}>
        <Grid >
          <Row >
            <Col sm={12} md={12} >
              <h1 className={'h1Style'}> {constants.LAUNCHING_SOON}</h1>
            </Col>
          </Row>
          <Row >
            <Col sm={12} md={12} >
              <h3 className={'h3Style'}>{constants.SIGN_UP}</h3>
            </Col>
          </Row>
          <Row >
            <Col sm={12} md={12} >
              <p className={'pStyle'}> {constants.SMALL_TEXT}</p>
            </Col>
          </Row>
          <div className='d-flex justify-content-center'>
            <Row >
              <Col sm={12} md={4} >
                <FormControl
                  type='text'
                  placeholder='Name'
                  className={'inputMailing'}
                />
                <div style={{ marginBottom: 5 }} />
              </Col>
              <Col sm={12} md={4} >
                <FormControl
                  type='text'
                  placeholder='Email address'
                  className={'inputMailing'}
                />
                <div style={{ marginBottom: 6 }} />
              </Col>
              <Col sm={12} md={4} >
                <Button className={'subscribeMailing'}>SUBSCRIBE</Button>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}
