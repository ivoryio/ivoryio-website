import React, {Component} from 'react'
import styled from 'styled-components'
export default class Footer extends Component {
  render () {
    return (
      <Container>
        <TextContainer>
          <Title>
          Built With Love
          </Title>
          <Text>
      Quis malis no usu, in eos commodo ponderum periculis. Nonumes facilisi perpetua ei vel, tale animal facilis ea sed. Vim eu integre iudicabit corrumpit. Ex civibus maiestatis argumentum vis, scripta scribentur id vis.
          </Text>
        </TextContainer>
      </Container>)
  }
}
const Container = styled.div`
  width:100%;
  height:284px;
  background-color: #394952;
`
const TextContainer = styled.div`
margin-left: 10em;
width: 25%;
`
const Title = styled.p`
font-family: Averta;
font-size: 16px;
font-weight: 600;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
color: #ffffff;
`
const Text = styled.p`
font-family: Averta;
font-size: 16px;
font-weight: 600;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
color: #ffffff;
`
