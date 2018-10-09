import React, {Component} from 'react'
import { Row, Grid, Col, FormControl } from 'react-bootstrap'
import styled from 'styled-components'
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
const La = styled.div`
  display: flex;
justify-content: center;
flex-direction: column;
`
const LaunchingContainer = styled.div`
  width:100%;
  height: 384px;
  background-color: #00adee;
  margin-top: 3em;
`

const FormContainer = styled.div`
display: flex;
justify-content: center;
`
const Title = styled.p`
font-family: Averta;
font-size: 40px;
font-weight: 500;
text-align: center;
color: #ffffff;
margin-top: 88px;
`
const SignUp = styled.p`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: -1.6px;
  text-align: center;
  color: #ffffff;
  font-family: Averta;
`
const SmallText = styled.p`
font-family: Averta;
font-size: 14px;
font-weight: 100;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #ffffff;
`
const Input = styled.input`
width: 200px;
  height: 35px;
  background-color: #ffffff;
  font-size: 12px;
  margin-right: 10px;
  border: none;
`
const Subscribe = styled.input`
width: 125px;
  height: 35px;
  background-color: #394952;
  color: #ffffff;
  font-family: Averta;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  border: none;
`
