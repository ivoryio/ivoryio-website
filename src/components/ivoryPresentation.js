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
import '../customStyles/presentation.css'

export default class Presentation extends Component {
  render () {
    return (
      <div className='wrapper'>
        <h3 className='d-flex justify-content-center bigTitle'>
          {constants.TITLE}</h3>
        <p className='d-flex justify-content-center textFromTitle '>
        Built by developers with over 100 B2B products, Ivory aims to significantly reduce costs <br /> and time to market for digital products.
Ivory aims to provide developers build-ready "Pods" <br /> or modules, filled with features that are required, but don't bring value, <br />allowing developers to focus on value-creating features.
        </p>
        <Grid >
          <Row >
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={database} />
              <h3 className={'title'} > {constants.DATABASE_TITLE}</h3>
              <p className={'text'}>{constants.DATABASE_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={speed} />
              <h3 className={'title'}> {constants.SPEED_TITLE}</h3>
              <p className={'text'}>{constants.SPEED_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={machineLearning} />
              <h3 className={'title'}> {constants.MACHINE_LEARNING_TITLE}</h3>
              <p className={'text'}>{constants.MACHINE_LEARNING_TEXT}</p>
            </Col>
          </Row>
          <Row>
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={secure} />
              <h3 className={'title'}> {constants.SECURE_TITLE}</h3>
              <p className={'text'}>{constants.SECURE_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={blockchain} />
              <h3 className={'title'}> {constants.BLOCKCHAIN_TITLE}</h3>
              <p className={'text'}>Ivory aims to accelerate the development of a typical Blockchain MVP by a factor of 10x. Ivory has native support for Blockchain and significantly accelerates Blockchain development in 3 areas: <br />
1) Devops <br />
2) Solidity contract development <br />
3) Monitoring</p>
            </Col>
            <Col className={'column'} sm={12} md={4} >
              <img alt='' className={'image'} src={devops} />
              <h3 className={'title'}> {constants.DEVOPS_TITLE}</h3>
              <p className={'text'}>{constants.DEVOPS_TEXT}</p>
            </Col>
          </Row>
          <Row>
            <Col className={'column'} sm={12} md={4}>
              <img alt='' className={'image'} src={quality} />
              <h3 className={'title'}> {constants.QUALITY_TITLE}</h3>
              <p className={'text'}>{constants.QUALITY_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4}>
              <img alt='' className={'image'} src={pods} />
              <h3 className={'title'}> {constants.PODS_TITLE}</h3>
              <p className={'text'}>{constants.PODS_TEXT}</p>
            </Col>
            <Col className={'column'} sm={12} md={4}>
              <img alt='' className={'image'} src={openSource} />
              <h3 className={'title'}> {constants.OPENSOURCE_TITLE}</h3>
              <p className={'text'}>{constants.OPENSOURCE_TEXT}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
