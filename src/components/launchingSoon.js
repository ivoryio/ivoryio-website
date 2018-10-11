import React, { Component } from "react";
import { Row, Grid, Col, FormControl, Button } from "react-bootstrap";

import "../customStyles/launchingSoonCSS.css";
import constants from "../constants/constants";

export default class LaunchingSoon extends Component {
  render() {
    return (
      <div className={"containerLaunching"}>
        <Grid>
          <Row>
            <Col sm={12} md={12}>
              <h1 className={"h1Style"}> {constants.LAUNCHING_SOON}</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <h3 className={"h3Style"}>{constants.SIGN_UP}</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12}>
              <p className={"pStyle"}> {constants.SMALL_TEXT}</p>
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <Row>
              <Col sm={12} md={12}>
                <div
                  class="ml-form-embed"
                  data-account="1292624:y2g6q7x8c8"
                  data-form="1071240:d2n8x2"
                />
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}
