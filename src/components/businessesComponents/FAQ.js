import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import '../../customStyles/businessStyle/faqStyle.css'

export default class FAQ extends Component {
  render () {
    return (
      <div class='faq-container'>
      <Grid>
        <Row>
          <div class='faq-wrapper'>
            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='faq'>FAQ</div>
              <div class='faq-subtitle'>Why should I work with you instead of hiring my own team?</div>
              <div class='faq-content'>Since your business is at the beginning, it’s best to start with someone who has done this dozens of times before. We’ll help you get market validation before you need to look for the right people.</div>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='faq'>FAQ</div>
              <div class='faq-subtitle'>How will we work when we are not in the same office?</div>
              <div class='faq-content'>We’ll have daily calls to ensure that your project is on track and other updates will be sent via email at least twice a week. You’re also in charge of reviewing our work at the end of every milestone.</div>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='faq'>FAQ</div>
              <div class='faq-subtitle'>What if it will take more than the planned time?</div>
              <div class='faq-content'>Our offers are fixed budget. If you are involved, participate in Skype calls & team meetings, provide constant feedback and still, your project takes more than the agreed time frame, we will support all the consequences of going over budget.</div>
            </Col>

            <Col xs={3} sm={3} md={3} lg={3}>
              <div class='faq'>FAQ</div>
              <div class='faq-subtitle'>Who can help me develop the app once I have the Design Prototype?</div>
              <div class='faq-content'>The nice thing about our Design & Prototyping Sprints is that the end result is ready for development. You can develop it with whom you’ll find fit (hire experts, work with external providers, etc.). FYI - we’ve delivered over 60 development projects.</div>
            </Col>
          </div>
        </Row>
      </Grid>
      </div>
    )
  }
}
