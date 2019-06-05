import React, { Component } from "react"
import { Row, Grid, Col } from "react-bootstrap"

import database from "../../images/database.svg"
import speed from "../../images/speed.svg"
import machineLearning from "../../images/machine_learning.svg"
import secure from "../../images/secure.svg"
import blockchain from "../../images/blockchain.svg"
import devops from "../../images/devops.svg"
import quality from "../../images/quality.svg"
import pods from "../../images/pods.svg"
import openSource from "../../images/open_source.svg"

import constants from "../../constants/homeConstants"
import "../../customStyles/homeStyle/presentation.css"
import "../../customStyles/fonts.css"

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <h2 className={"bigTitle"}>
          Ivory is a open source and mobile app development platform <br />
          that accelerates the development of complex Blockchain and AI
          products.
        </h2>
        <div className={"wrapperPresentation"}>
          <h3 className="d-flex justify-content-center textFromTitle ">
            Built by developers with over 100 B2B products, Ivory aims to
            significantly reduce costs and time to market <br /> for digital
            products. Ivory aims to provide developers build-ready "pods" or
            modules, filled with features that <br /> are required, but don't
            bring value, allowing developers to focus on value-creating
            features.
          </h3>
          <div className={"gridAlign"}>
            <Grid>
              <Row>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={database} />
                  <h3 className={"title"}> {constants.DATABASE_TITLE}</h3>
                  <p className={"text"}>{constants.DATABASE_TEXT}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={speed} />
                  <h3 className={"title"}> {constants.SPEED_TITLE}</h3>
                  <p className={"text"}>{constants.SPEED_TEXT}</p>
                </Col>

                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={machineLearning} />
                  <h3 className={"title"}>
                    {" "}
                    {constants.MACHINE_LEARNING_TITLE}
                  </h3>
                  <p className={"text"}>{constants.MACHINE_LEARNING_TEXT}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={secure} />
                  <h3 className={"title"}> {constants.SECURE_TITLE}</h3>
                  <p className={"text"}>{constants.SECURE_TEXT}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={blockchain} />
                  <h3 className={"title"}> {constants.BLOCKCHAIN_TITLE}</h3>
                  <p className={"text"}>{constants.BLOCKCHAIN_TEXT}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={devops} />
                  <h3 className={"title"}> {constants.DEVOPS_TITLE}</h3>
                  <p className={"text"}>{constants.DEVOPS_TEXT}</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: 150 }}>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={quality} />
                  <h3 className={"title"}> {constants.QUALITY_TITLE}</h3>
                  <p className={"text"}>{constants.QUALITY_TEXT}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={pods} />
                  <h3 className={"title"}> {constants.PODS_TITLE}</h3>
                  <p className={"text"}>{constants.PODS_TEXT}</p>
                </Col>
                <Col sm={12} md={4}>
                  <img alt="" className={"image"} src={openSource} />
                  <h3 className={"title"}> {constants.OPENSOURCE_TITLE}</h3>
                  <p className={"text"}>{constants.OPENSOURCE_TEXT}</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}
