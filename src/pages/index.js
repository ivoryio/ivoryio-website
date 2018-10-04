import React from 'react'
import Presentation from '../components/ivoryPresentation'
import LaunchingSoon from '../components/launchingSoon'
import styled from 'styled-components'
const IndexPage = () => (
  <Container>
    <Presentation />
    <LaunchingSoon />
  </Container>
)

export default IndexPage
const Container = styled.div`
margin-right: 10em;
margin-left: 10em;
margin-top: 2em;
width: 1024px;
height: 2581px;
`
