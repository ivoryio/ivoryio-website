import React, { Component } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'

import database from '../images/database.svg'
import speed from '../images/speed.svg'
import machineLearning from '../images/machine_learning.svg'
import secure from '../images/secure.svg'
import blockchain from '../images/blockchain.svg'
import devops from '../images/devops.svg'
import quality from '../images/quality.svg'
import pods from '../images/pods.svg'
import openSource from '../images/open_source.svg'

import constants from '../constants/constants'
import './presentation.css'

export default class Presentation extends Component {
  render () {
    return (
      <div className='wrapper'>
        <h3 className='d-flex justify-content-center bigTitle'>
          {constants.TITLE}</h3>
        <p className='d-flex justify-content-center textFromTitle '>
          Lorem ipsum dolor sit amet, tantas cetero option cu cum. <br />Tu esse debet vim, facete peopriae adversarium id qui, has in quodsi tractatos. <br />Te duo semper offendit, ne deseruisse necessitatibus conclusionemque nec. Et dolore consequat <br />usu. His prima dicunt detraxit ut.
        </p>
        <Grid >
          <Row className='d-flex justify-content-around'>
            <Col className={'column'} sm={12} md={4} >
              <img className={'image'} src={database} />
              <h3 className={'title'} > {constants.DATABASE_TITLE}</h3>
              <p className={'text'}>{constants.DATABASE_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img className={'image'} src={speed} />
              <h3 className={'title'}> {constants.SPEED_TITLE}</h3>
              <p className={'text'}>{constants.SPEED_TEXT}</p>
            </Col>
            <Col className={'lastColumn'} sm={12} md={4} >
              <img className={'image'} src={machineLearning} />
              <h3 className={'title'}> {constants.MACHINE_LEARNING_TITLE}</h3>
              <p className={'text'}>{constants.MACHINE_LEARNING_TEXT}</p>
            </Col>
          </Row>
          <Row className='d-flex justify-content-around'>
            <Col className={'column'} sm={12} md={4} >
              <img className={'image'} src={secure} />
              <h3 className={'title'}> {constants.SECURE_TITLE}</h3>
              <p className={'text'}>{constants.SECURE_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img className={'image'} src={blockchain} />
              <h3 className={'title'}> {constants.BLOCKCHAIN_TITLE}</h3>
              <p className={'text'}>{constants.BLOCKCHAIN_TEXT}</p>
            </Col>
            <Col className={'lastColumn'} sm={12} md={4} >
              <img className={'image'} src={devops} />
              <h3 className={'title'}> {constants.DEVOPS_TITLE}</h3>
              <p className={'text'}>{constants.DEVOPS_TEXT}</p>
            </Col>
          </Row>
          <Row className='d-flex justify-content-around'>
            <Col className={'column'} sm={12} md={4}>
              <img className={'image'} src={quality} />
              <h3 className={'title'}> {constants.QUALITY_TITLE}</h3>
              <p className={'text'}>{constants.QUALITY_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4}>
              <img className={'image'} src={pods} />
              <h3 className={'title'}> {constants.PODS_TITLE}</h3>
              <p className={'text'}>{constants.PODS_TEXT}</p>
            </Col>
            <Col className={'lastColumn'} sm={12} md={4}>
              <img className={'image'} src={openSource} />
              <h3 className={'title'}> {constants.OPENSOURCE_TITLE}</h3>
              <p className={'text'}>{constants.OPENSOURCE_TEXT}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
