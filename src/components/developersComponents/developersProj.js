import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'
import photo from '../../images/photo.png'

import '../../customStyles/developerStyle/developerProject.css'

export default class DevProject extends Component {
  render () {
    return (
      <div class='proj-container'>
        <Grid>
          <Row>
            <div class='proj-wrapper'>
              <Col>
                <h3 class='proj-title'>
                  TELL US ABOUT YOUR PROJECT
                </h3>

                <div class='proj-text1'>
                  Let’s build this together! Everybody can help in this project. Here are some ways in which you can help build it further:
                  <br />
                </div>
                <div class='proj-text2'>
                  1. Open issues on our GitHub Page; <br />
                  2. Contact the devs working on the projects; <br />
                  3. Test it out for yourselves; <br />
                  4. Be a part of our community, join our slack group. <br />
                </div>
              </Col>
              <Col>
                <img alt='' class='proj-photo' src={photo} width='230' height='230'/>
              </Col >
            </div>
          </Row>
        </Grid>

      </div>
    )
  }
}
