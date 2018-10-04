import React, { Component } from 'react'
import headerLogo from '../images/header.png'
import ivoryLogo from '../images/logo.png'
import styled, { injectGlobal } from 'styled-components'
import Averta from '../fonts/AvertaDemo-Regular.otf'
import { Link } from 'gatsby'

export default class Header extends Component {
  render(){
    return(

      <HeaderContainer >
        <HeaderImg src = {headerLogo}/>
        <Link to = '/' ><IvoryLogo src={ivoryLogo} /></Link>
        <HeaderTitle>Ivory</HeaderTitle>
        <HeaderText>Turning 5 months project into 4 weeks project</HeaderText>
        <Link to = '/page-2'><GetStarted>Get Started</GetStarted></Link>
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
  
   object-fit: contain;
   

`

const HeaderTitle = styled.h1`
  position: absolute;
  top: 300px;
  right: 300px;
  font-size: 52px;
  color: white;
  font-family: Averta;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  
  
`

const HeaderText = styled.h3`
  position: absolute;
  top: 370px;
  right: 85px;
  font-size: 30px;
  color: white;
  width: 330px;
  height: 58px;
  font-size: 24px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  family-text: Averta;
  
  
`
const GetStarted = styled.button`
  position: absolute;
  top: 440px;
  right: 308px;
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
`
const IvoryLogo = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 190px;
  height: 130px;
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
