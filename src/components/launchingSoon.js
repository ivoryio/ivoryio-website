import React, {Component} from 'react'
import { Row, Grid, Col } from 'react-bootstrap'

import './launchingSoonCSS.css'
import constants from '../constants/constants'

export default class LaunchingSoon extends Component {
  render () {
    return (
      <div className={'containerLaunching'}>
        <Grid className='d-flex justify-content-center'>
          <Row className='d-flex justify-content-center'>
            <Col sm={12} md={12} >
              <h1 className={'h1Style'}> {constants.LAUNCHING_SOON}</h1>
              <h3 className={'h3Style'}>{constants.SIGN_UP}</h3>
              <p className={'pStyle'}> {constants.SMALL_TEXT}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
