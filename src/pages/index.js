import React from 'react'
import Presentation from '../components/ivoryPresentation'
import LaunchingSoon from '../components/launchingSoon'
import Footer from '../components/footer'
import styled from 'styled-components'
import Header from '../components/header'
const IndexPage = () => (
  <Container>
    <Header />
    <Presentation />
    <LaunchingSoon />
    <Footer />
  </Container>
)

export default IndexPage
const Container = styled.div`
width: 100%;
height: 2581px;
margin:0;
padding:0;
`
