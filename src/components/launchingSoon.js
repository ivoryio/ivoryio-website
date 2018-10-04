import React, {Component} from 'react'
import styled from 'styled-components'
export default class LaunchingSoon extends Component {
  render () {
    return (
      <LaunchingContainer>
        <Title>
              LAUNCHING SOON
        </Title>
        <SignUp>
            SIGN UP FOR THE IVORY MAILING LIST
        </SignUp>
      </LaunchingContainer>
    )
  }
}
const LaunchingContainer = styled.div`
  width:100%;
  height: 384px;
  background-color: #00adee;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.div`
width: 373px;
height: 49px;
font-family: Averta;
font-size: 40px;
font-weight: 500;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #ffffff;
margin-top: 88px;
`
const SignUp = styled.div`
width: 395px;
  height: 29px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -1.6px;
  color: #ffffff;
  margin-top: 193px;
`
