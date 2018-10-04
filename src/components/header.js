import React, { Component } from 'react'
import headerLogo from '../images/headerSmall.png'
import ivoryLogo from '../images/logo.png'
import styled, { injectGlobal } from 'styled-components'
import Averta from '../fonts/AvertaDemo-Regular.otf'
import { Link } from 'gatsby'

export default class Header extends Component {
  render () {
    return (

      <HeaderContainer >
        <HeaderImg src={headerLogo} />
        <Link to='/' ><IvoryLogo src={ivoryLogo} /></Link>
        <HeaderTitle>Ivory</HeaderTitle>
        <HeaderText>Turning 5 months project into 4 weeks project</HeaderText>
        <Link to='/'><GetStarted>Get Started</GetStarted></Link>
      </HeaderContainer>
    )
  }
}

injectGlobal`
  @font-face {
    font-family: Averta;
    src: url('${Averta}') format('opentype')
  }
`

const HeaderContainer = styled.div`
  position: relative;
  object-fit: contain;

`

const HeaderImg = styled.img`
   
   height: 768;
   width: 100%;

   @media only screen and (max-width: 360px){
     width: 100%;
   }

`

const HeaderTitle = styled.h1`
  position: absolute;
  top: 390px;
  left: 755px;
  bottom: 411px;
  font-size: 52px;
  color: white;
  font-family: Averta;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  
  @media only screen and (max-width: 1024px){
    position: absolute;
    top: 350px;
    left: 650px;
    font-size: 42px;
    color: white;
    font-family: Averta;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;

  }

  @media only screen and (max-width: 768px){
    position: absolute;
    top: 250px;
    left: 450px;
    font-size: 42px;
    color: white;
    font-family: Averta;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;

  }

  @media only screen and (max-width: 414px){
    position: absolute;
    top: 150px;
    left: 230px;
    font-size: 28px;
    color: white;
    font-family: Averta;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;

  }

  @media only screen and (max-width: 360px){
    position: absolute;
    top: 120px;
    left: 230px;
    font-size: 24px;
    color: white;
    font-family: Averta;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;

  }

`

const HeaderText = styled.h3`
  position: absolute;
  top: 460px;
  left: 755px;
  font-size: 24px;
  color: white;
  width: 320px;
  height: 48px;
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  family-text: Averta;
  
  @media only screen and (max-width: 1024px){
    position: absolute;
    top: 410px;
    left: 650px;
    font-size: 24px;
    color: white;
    width: 320px;
    height: 48px;
    font-size: 18px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    family-text: Averta;
  }

  @media only screen and (max-width: 768px){
    position: absolute;
    top: 310px;
    left: 450px;
    font-size: 24px;
    color: white;
    width: 250px;
    height: 48px;
    font-size: 18px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    family-text: Averta;
  }

  @media only screen and (max-width: 414px){
    position: absolute;
    top: 185px;
    left: 230px;
    color: white;
    width: 120px;
    height: 28px;
    font-size: 10px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    family-text: Averta;

  }

  @media only screen and (max-width: 360px){
    position: absolute;
    top: 150px;
    left: 230px;
    color: white;
    width: 120px;
    height: 28px;
    font-size: 10px;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    family-text: Averta;

  }

`
const GetStarted = styled.button`
  position: absolute;
  top: 540px;
  left: 755px;
  width: 107px;
  height: 41px;
  background-color: white;
  border: none;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #00adee;
  font-family: Averta;
  font-size: 14px;

  @media only screen and (max-width: 1024px){
    position: absolute;
    top: 470px;
    left: 650px;
    width: 97px;
    height: 35px;
    background-color: white;
    border: none;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00adee;
    font-family: Averta;
    font-size: 10px;
  }
  @media only screen and (max-width: 768px){
    position: absolute;
    top: 370px;
    left: 450px;
    width: 87px;
    height: 35px;
    background-color: white;
    border: none;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00adee;
    font-family: Averta;
    font-size: 10px;
  }

  @media only screen and (max-width: 414px){
    position: absolute;
    top: 220px;
    left: 230px;
    width: 50px;
    height: 20px;
    background-color: white;
    border: none;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00adee;
    font-family: Averta;
    font-size: 6px;
  }

  @media only screen and (max-width: 360px){
    position: absolute;
    top: 180px;
    left: 230px;
    width: 50px;
    height: 20px;
    background-color: white;
    border: none;
    font-weight: 200;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #00adee;
    font-family: Averta;
    font-size: 6px;
  }

`

const IvoryLogo = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20%;
  height: 18%;

  
  
`

// const LogoButton = styled.button`
//   position: absolute;
//   background-color: white;
//   border: none;
//   top: 0px;
//   left: 0px;
//   height: 100px;
//   width: 300px;

// `

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: 'rebeccapurple',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '1.45rem 1.0875rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <div
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//           }}
//         >

//         </div>
//       </h1>
//     </div>
//   </div>
// )

// export default Header
