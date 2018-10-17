import React, { Component } from 'react'
import '../../customStyles/fonts.css'
import '../../customStyles/businessStyle/businessDescription.css'
import photo from '../../images/photo.png'
import { Button, Grid, Row, Col} from 'react-bootstrap'

export default class BusinessDescription extends Component {
render(){
    return (
        <div className={'businessWrapper'}>
        <h3 className={'businessTtile'}>
        We create digital experiences for corporate innovations and startups.</h3>
        <p className='d-flex justify-content-center businessText '>
        Our team will build upon Ivory to create a modern and scalable app in just a few weeks. The auxiliary features such as UserLogin, UserManagement and other necessary features come for free. Our focus will be on features that create value for your users.
        </p>
        <div className='d-flex justify-content-center'>
        <a href='https://www.thinslices.com/projects/' target='_blank' rel='noopener norefferer'>  <Button className='latestProjects'>Our Latest Projects</Button> </a>
        <a href='https://www.thinslices.com/team/' target='_blank' rel='noopener norefferer'>  <Button className='learnMore'>Learn more about us</Button> </a>
        </div>
        <div className={'businessLine'}></div>
        <h3 style={{marginBottom:14}}className={'businessTtile'}>
        Meet our talented dev team.</h3>
        <p style={{marginBottom:65}} className='d-flex justify-content-center businessText '>
        These heroes implemented more than 100 projects in the last few years,<br/>some of which you may use right now.
        </p>
        <Grid >
          <Row > 
            <Col sm={12} md={4} >
              <img alt='' className={'teamPhoto'}src={photo}/>
            </Col>
            <Col  sm={12} md={4} >
              <img alt='' className={'teamPhoto'} src={photo}/>
            </Col>
            <Col  sm={12} md={4} >
              <img alt='' className={'teamPhoto'} src={photo}/>
            </Col>  
          </Row>
          <Row>
            <Col  sm={12} md={4} >
              <img alt='' className={'teamPhoto'} src={photo}/>
            </Col>
            <Col sm={12} md={4} >
              <img alt='' className={'teamPhoto'} src={photo} />
            </Col>
            <Col  sm={12} md={4} >
              <img alt='' className={'teamPhoto'} src={photo}/>
            </Col>
          </Row>
          </Grid>
          <div style={{marginBottom:122}}></div>
        </div>
    )
}
}