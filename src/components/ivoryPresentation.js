import React, {Component} from 'react'
import styled from 'styled-components'
import database from '../images/database.svg'
import speed from '../images/speed.svg'
import machineLearning from '../images/machine_learning.svg'
import secure from '../images/secure.svg'
import blockchain from '../images/blockchain.svg'
import devops from '../images/devops.svg'
import quality from '../images/quality.svg'
import pods from '../images/pods.svg'
import openSource from '../images/open_source.svg'
import constants from '../constants/constants'
export default class Presentation extends Component {
  render () {
    return (
      <Container>
        <TextFromTitle>
          <BigTitle>
            {constants.TITLE}<br /></BigTitle>
            Lorem ipsum dolor sit amet, tantas cetero option cu cum. <br />Tu esse debet vim, facete peopriae adversarium id qui, has in quodsi tractatos. <br />Te duo semper offendit, ne deseruisse necessitatibus conclusionemque nec. Et dolore consequat <br />usu. His prima dicunt detraxit ut.
        </TextFromTitle>
        <PictureContainer>
          <TextPictureContainer>
            <Picture src={database} />
            <Text>
              <Title>
                {constants.DATABASE_TITLE}
              </Title>
              {constants.DATABASE_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={speed} />
            <Text>
              <Title>
                {constants.SPEED_TITLE}
              </Title>
              {constants.SPEED_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={machineLearning} />
            <Text>
              <Title>
                {constants.MACHINE_LEARNING_TITLE}
              </Title>
              {constants.MACHINE_LEARNING_TEXT}
            </Text>
          </TextPictureContainer>
        </PictureContainer>
        <PictureContainer>
          <TextPictureContainer>
            <Picture src={secure} />
            <Text>
              <Title>
                {constants.SECURE_TITLE}
              </Title>
              {constants.SECURE_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={blockchain} />
            <Text>
              <Title>
                {constants.BLOCKCHAIN_TITLE}
              </Title>
              {constants.BLOCKCHAIN_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={devops} />
            <Text>
              <Title>
                {constants.DEVOPS_TITLE}
              </Title>
              {constants.DEVOPS_TEXT}
            </Text>
          </TextPictureContainer>
        </PictureContainer>
        <PictureContainer>
          <TextPictureContainer>
            <Picture src={quality} />
            <Text>
              <Title>
                {constants.QUALITY_TITLE}
              </Title>
              {constants.QUALITY_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={pods} />
            <Text>
              <Title>
                {constants.PODS_TITLE}
              </Title>
              {constants.PODS_TEXT}
            </Text>
          </TextPictureContainer>
          <TextPictureContainer>
            <Picture src={openSource} />
            <Text>
              <Title>
                {constants.OPENSOURCE_TITLE}
              </Title>
              {constants.OPENSOURCE_TEXT}
            </Text>
          </TextPictureContainer>
        </PictureContainer>
      </Container>
    )
  }
}
const Container = styled.div`
margin-right: 10em;
margin-left: 10em;
margin-top: 2em;
width: 1024px;
height: 2581px;
`
const Text = styled.div`
  font-family: Averta;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #394952;
`
const TextFromTitle = styled.div`
font-family: Averta;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #394952;
  margin-bottom: 1.5em;
`
const Title = styled.div`
  font-family: Averta;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #394952;
  margin-bottom: 0.5em;
`
const BigTitle = styled.div`
font-family: Averta;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #394952;
  margin-bottom: 0.7em;
`
const Picture = styled.img`
width: 85px;
height: 96.8px;
margin-top: 1em;
margin-bottom: 0.3em;
`
const PictureContainer = styled.div`
display: flex;
justify-content: space-between;
`
const TextPictureContainer = styled.div`
display: flex;
flex-direction: column;
width: 11em;
`
