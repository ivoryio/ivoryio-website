import React, { Component } from 'react'
import '../../customStyles/fonts.css'

import photo from '../../images/photo.png'
import openSource from '../../images/open_source.svg'
import pods from '../../images/pods.svg'
import database from '../../images/database.svg'
import speed from '../../images/speed.svg'
import secure from '../../images/secure.svg'
import machine_learning from '../../images/machine_learning.svg'
import blockchain from '../../images/blockchain.svg'
import devops from '../../images/devops.svg'
import quality from '../../images/quality.svg'

import constants from '../../constants/homeConstants'
import DCONSTANTS from '../../constants/developerConstants'

import '../../customStyles/developerStyle/developersDescription.css'
import '../../customStyles/businessStyle/businessDescription.css'

import { Grid, Row, Col} from 'react-bootstrap'


export default class DeveloperDescription extends Component {
render(){
    return (<div className={'developerWrapper'}>
    <h3 className={'developerTitle'}>
    We’re still building, but here’s what we’re aiming at:
    </h3>
    <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={openSource} />
              <h3 className={'titleD'} > {constants.OPENSOURCE_TITLE}</h3>
            </Col>
            </Row>
            <Row>
            <Col  sm={3} md={3} >
              <img alt='' className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={9} md={9} >
              <p className={'textD'}> {DCONSTANTS.DEVELOPER_OPEN_SOURCE}</p>
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={pods} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_PODS_TITLE}</h3>
            </Col>
            </Row>
            <Row className='d-flex justify-content-between '>
            <Col  sm={6} md={6} >
              <p className={'textDReverse'}> {DCONSTANTS.DEVELOPER_PODS_TEXT1}</p>
              <p className={'textSpaceReverse'}> {DCONSTANTS.DEVELOPER_PODS_TEXT2}</p>
              <p className={'textSpaceReverse'}> {DCONSTANTS.DEVELOPER_PODS_TEXT3}</p>
            </Col>
            <Col  sm={3} md={3} />
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:150,marginLeft:-50}} className={'teamPhoto'} src={photo} />
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={database} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_DATABASE_TITLE}</h3>
            </Col>
            </Row>
            <Row>
            <Col  sm={3} md={3} >
              <img alt='' className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={9} md={9} >
              <p className={'textD'}> {DCONSTANTS.DEVELOPER_DATABASE_TEXT1}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_DATABASE_TEXT2}</p>
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={speed} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_SPEED_TITLE}</h3>
            </Col>
            </Row>
            <Row className='d-flex justify-content-between '>
            <Col  sm={6} md={6} >
              <p className={'textDReverse'}> {DCONSTANTS.DEVELOPER_SPEED_TEXT1}</p>
              <p className={'textSpaceReverse'}> {DCONSTANTS.DEVELOPER_SPEED_TEXT2}</p>
            </Col>
            <Col  sm={3} md={3} />
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:90,marginLeft:-50}} className={'teamPhoto'} src={photo} />
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={secure} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_SECURE_TITLE}</h3>
            </Col>
            </Row>
            <Row>
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:120}} className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={9} md={9} >
              <p className={'textD'}> {DCONSTANTS.DEVELOPER_SECURE_TEXT1}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_SECURE_TEXT2}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_SECURE_TEXT3}</p>
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={machine_learning} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_MACHINE_LEARNING_TITLE}</h3>
            </Col>
            </Row>
            <Row className='d-flex justify-content-between '>
            <Col  sm={6} md={6} >
              <p className={'textDReverse'}> {DCONSTANTS.DEVELOPER_MACHINE_LEARNING_TEXT1}</p>
              <p className={'textSpaceReverse'}> {DCONSTANTS.DEVELOPER_MACHINE_LEARNING_TEXT2}</p>
            </Col>
            <Col  sm={3} md={3} />
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:100,marginLeft:-50}} className={'teamPhoto'} src={photo} />
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={blockchain} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_BLOCKCHAIN_TITLE}</h3>
            </Col>
            </Row>
            <Row>
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:130}} className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={9} md={9} >
              <p className={'textD'}> {DCONSTANTS.DEVELOPER_BLOCKCHAIN_TEXT1}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_BLOCKCHAIN_TEXT2}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_BLOCKCHAIN_TEXT3}</p>
              <p className={'textSpace'}> {DCONSTANTS.DEVELOPER_BLOCKCHAIN_TEXT4}</p>
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={devops} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_DEVOPS_TITLE}</h3>
            </Col>
            </Row>
            <Row className='d-flex justify-content-between '>
            <Col  sm={6} md={6} >
              <p className={'textDReverse'}> {DCONSTANTS.DEVELOPER_DEVOPS_TEXT1}</p>
              <p className={'textSpaceReverse'}> {DCONSTANTS.DEVELOPER_DEVOPS_TEXT2}</p>
            </Col>
            <Col  sm={3} md={3} />
            <Col  sm={3} md={3} >
              <img alt='' style={{marginTop:90,marginLeft:-50}} className={'teamPhoto'} src={photo} />
            </Col>
            </Row>
            <div className={'lineD'}/>
        </Grid>
        <Grid >
          <Row> 
            <Col  sm={12} md={12} >
              <img alt='' className={'imageD'} src={quality} />
              <h3 className={'titleD'} > {DCONSTANTS.DEVELOPER_QUALITY_TITLE}</h3>
            </Col>
            </Row>
            <Row>
            <Col  sm={3} md={3} >
              <img alt='' className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={9} md={9} >
              <p className={'textD'}> {DCONSTANTS.DEVELOPER_QUALITY_TEXT}</p>
            </Col>
            </Row>
        </Grid>
    </div>
    )
}}