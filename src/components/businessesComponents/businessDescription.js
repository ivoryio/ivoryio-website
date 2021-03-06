import React, { Component } from 'react'
import '../../customStyles/fonts.css'
import '../../customStyles/businessStyle/businessDescription.css'
import bogdan from '../../images/bogdan.png'
import lucian from '../../images/lucian.png'
import paula from '../../images/paula.png'
import andrei from '../../images/andrei.png'
import ilie from '../../images/ilie.png'
import stefan from '../../images/stefan.png'
import { Button, Grid, Row, Col } from 'react-bootstrap'

export default class BusinessDescription extends Component {
  render() {
    return (
      <div className={'businessWrapper'}>
        <h1 className={'businessTtile'}>
          We create digital experiences for corporate innovation groups and
          startups.
        </h1>
        <h2 className="d-flex justify-content-center businessText ">
          Our team will build upon Ivory to create a modern and scalable app in
          just a few weeks. The auxiliary features such as UserLogin,
          UserManagement and other necessary features come for free. Our focus
          will be on features that create value for your users.
        </h2>
        <div className="d-flex justify-content-center">
          <a
            href="https://www.thinslices.com/projects/"
            target="_blank"
            rel="noopener norefferer"
          >
            {' '}
            <Button className="latestProjects">Our Latest Projects</Button>{' '}
          </a>
          <a
            href="https://www.thinslices.com/team/"
            target="_blank"
            rel="noopener norefferer"
          >
            {' '}
            <Button className="learnMore">Learn more about us</Button>{' '}
          </a>
        </div>
        <div className={'businessLine'} />
        <h3 style={{ marginBottom: 14 }} className={'businessTtile'}>
          Meet our talented dev team.
        </h3>
        <p
          style={{ marginBottom: 65 }}
          className="d-flex justify-content-center businessText "
        >
          These heroes implemented more than 100 projects in the last few years,
          <br />
          some of which you may use right now.
        </p>
        <Grid>
          <Row>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={bogdan} />
            </Col>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={lucian} />
            </Col>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={paula} />
            </Col>
          </Row>
          <Row>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={andrei} />
            </Col>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={ilie} />
            </Col>
            <Col id="gr1d" sm={12} md={4}>
              <img alt="" className={'teamPhoto'} src={stefan} />
            </Col>
          </Row>
        </Grid>
        <div style={{ marginBottom: 122 }} />
      </div>
    )
  }
}
