import React, {Component} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
export default class Footer extends Component {
  render () {
    return (
      <Container>
        <Wrapp>
          <TextContainer>
            <TextTitle>
              <Text>
                <Title>
          Built With Love
                </Title>
      Quis malis no usu, in eos commodo ponderum periculis. Nonumes facilisi perpetua ei vel, tale animal facilis ea sed. Vim eu integre iudicabit corrumpit. Ex civibus maiestatis argumentum vis, scripta scribentur id vis.
              </Text>
            </TextTitle>
            <TextTitle>
              <Text>
                <Title>
          Ivory
                </Title>
                What is Ivory? <br /> Community <br /> News <br /> For business
              </Text>
            </TextTitle>
            <TextTitle>
              <Text>
                <Title>
          About
                </Title>
                Our company <br /> Security <br /> Legal <br /> Logos/artwork
              </Text>
            </TextTitle>
            <TextTitle>
              <Text>
                <Title>
          Help
                </Title>
                Get started<br /> Documentation <br /> Contribute <br /> Take a class
              </Text>
            </TextTitle>
          </TextContainer>
          <WrappPictureCredit>
            <Picture src={logo} />
            <Credit>
            © 2018 Ivory. <br /> Ivory framework is free and open-source
            </Credit>
          </WrappPictureCredit>
        </Wrapp>
      </Container>)
  }
}
const Container = styled.div`
  width:100%;
  height:384px;
  background-color: #394952;
  
`
const Wrapp = styled.div`
margin-left: 13em;
margin-right: 15em;
`
const WrappPictureCredit = styled.div`
display: flex;
flex-direction: column;
`
const Picture = styled.img`
  width:104px;
  height:70px;
  margin-bottom: 0px;
`
const Credit = styled.div`
  width: 228px;
  height: 15px;
  font-family: Averta;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`
const TextContainer = styled.div`
display: flex;
justify-content: space-between;
`
const TextTitle = styled.div`
display: flex;
flex-direction: column;
max-width: 266px;
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
padding-top: 97px;
margin-bottom: 0px;
padding-bottom: 10px;
`
const Text = styled.p`
font-family: Averta;
font-size: 13px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1.31;
letter-spacing: normal;
text-align: left;
color: #ffffff;
`
