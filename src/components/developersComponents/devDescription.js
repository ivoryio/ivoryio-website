import React, { Component } from "react";
import "../../customStyles/fonts.css";
import VisibilitySensor from "react-visibility-sensor";

import "../../customStyles/developerStyle/devDescription.css";
import DCONSTANTS from "../../constants/developerConstants";

import devOpenSource from "../../images/community_img@3x.png";
import pods from "../../images/pods_img@3x.png";
import serverless from "../../images/serverless_img@3x.png";
import security from "../../images/security_img@3x.png";
import ai from "../../images/ai_img@3x.png";
import blockchain from "../../images/blockchain_img@3x.png";
import quality from "../../images/quality_img@3x.png";

export default class DevDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: null,
      id: null
    };
  }
  componentDidMount() {
    var newS = document.createElement("style");
    var newC = document.createTextNode(`html {scroll-behavior: smooth;}`);
    newS.appendChild(newC);
    document.head.appendChild(newS);
  }
  pickClass = (id) => {
    return this.state.currentSection === id
      ? "scrollOval changescrollOval"
      : "scrollOval"; 
  }
  visibility = (key) => {
    this.setState({ currentSection: key });
  }
  render() {
    return (
      <div className={"developerWrapper"}>
        <h3 className={"developerTitle"}>{DCONSTANTS.DEV_TITLE}</h3>
        <div class="bigContainer">
          <div id="fixOnScroll">
            <div class="scrollLinksWrapper">
              <a href="#openSrc" class="scrollLink">
                <div className={this.pickClass("openSrc")} />
                <div class="linkText">{DCONSTANTS.OPEN_SOURCE_TITLE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#pods" class="scrollLink">
                <div className={this.pickClass("pods")} />
                <div class="linkText">{DCONSTANTS.PODS_TITILE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#serverless" class="scrollLink">
                <div className={this.pickClass("serverless")} />
                <div class="linkText">{DCONSTANTS.SERVERLESS_TITILE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#speed" class="scrollLink">
                <div className={this.pickClass("speed")} />
                <div class="linkText">{DCONSTANTS.SPEED_TITILE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#security" class="scrollLink">
                <div className={this.pickClass("security")} />
                <div class="linkText">{DCONSTANTS.SECURITY_TITILE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#machine" class="scrollLink">
                <div className={this.pickClass("machine")} />
                <div class="linkText">{DCONSTANTS.MACHINE_TITILE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#blockchain" class="scrollLink">
                <div className={this.pickClass("blockchain")} />
                <div class="linkText">{DCONSTANTS.BLOCKCHAIN_TITLE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#continuous" class="scrollLink">
                <div className={this.pickClass("continuous")} />
                <div class="linkText">{DCONSTANTS.CONTINOUS_TITLE}</div>
              </a>
              <div class="scrollLine" />
              <a href="#quality" class="scrollLink">
                <div className={this.pickClass("quality")} />
                <div class="linkText">{DCONSTANTS.QUALITY_TITLE}</div>
              </a>
              <div class="scrollLine" />
            </div>
          </div>

          <div className={"squareWrapColumn"}>
            <VisibilitySensor onChange={() => this.visibility("openSrc")}>
              {() => {
                return (
                  <div className="squareWrap">
                    <div id="openSrc" className={"white divAlign"}>
                      <p className={"titleOnWhite"}>
                        {DCONSTANTS.OPEN_SOURCE_TITLE}
                      </p>
                      <p className={"devText"}>{DCONSTANTS.OPEN_SOURCE_TEXT}</p>
                    </div>

                    <div className="blue">
                      <img
                        alt="Open Source Community"
                        className={"devImages"}
                        src={devOpenSource}
                      />
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor onChange={() => this.visibility("pods")}>
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div id="pods" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.PODS_TITILE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.PODS_BLUE1}
                        </p>
                      </div>
                      <div className="white divAlign">
                        <p className={"devText"}>{DCONSTANTS.PODS_TEXT1}</p>
                        <p className={"devText"}>{DCONSTANTS.PODS_TEXT2}</p>
                      </div>
                    </div>
                    <div className="squareWrap">
                      <div className="white">
                        <img alt="Pods" className={"devImages"} src={pods} />
                      </div>
                      <div className="blue divAlign">
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.PODS_BLUE2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor
              onChange={() => this.visibility("serverless")}
            >
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div id="serverless" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.SERVERLESS_TITILE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.SERVERLESS_TEXT1}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.SERVERLESS_TEXT2}
                        </p>
                      </div>
                      <div className="white">
                        <img
                          alt="Serverless solution"
                          className={"devImages"}
                          src={serverless}
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor onChange={() => this.visibility("speed")}>
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div id="speed" className="white divAlign">
                        <p className={"titleOnWhite"}>
                          {DCONSTANTS.SPEED_TITILE}
                        </p>
                        <p className={"devText"}>
                          {DCONSTANTS.SPEED_TEXT_WHITE}
                        </p>
                      </div>
                      <div className="blue divAlign">
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.SPEED_TEXT_BLUE}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor onChange={() => this.visibility("security")}>
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div id="security" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.SECURITY_TITILE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.SECURITY_TEXT_BLUE}
                        </p>
                      </div>
                      <div className="white divAlign">
                        <p className={"devText"}>
                          {DCONSTANTS.SECURITY_TEXT_WHITE1}
                        </p>
                      </div>
                    </div>
                    <div className="squareWrap">
                      <div className="white divAlign">
                        <p className={"devText"}>
                          {DCONSTANTS.SECURITY_TEXT_WHITE2}
                        </p>
                      </div>
                      <div className="blue">
                        <img
                          alt="Security and privacy"
                          className={"devImages"}
                          src={security}
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
        
            <VisibilitySensor onChange={() => this.visibility("machine")}>
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div className="blue">
                        <img
                          alt="Machine Learning and AI"
                          className={"devImages"}
                          src={ai}
                        />
                      </div>
                      <div id="machine" className="white divAlign">
                        <p className={"titleOnWhite"}>
                          {DCONSTANTS.MACHINE_TITILE}
                        </p>
                        <p className={"devText"}>{DCONSTANTS.AI_TEXT_WHITE1}</p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor
              onChange={() => this.visibility("blockchain")}
            >
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div className="white divAlign">
                        <p className={"devText"}>{DCONSTANTS.AI_TEXT_WHITE2}</p>
                      </div>
                      <div id="blockchain" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.BLOCKCHAIN_TITLE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.BLOCKCHAIN_TEXT_BLUE1}
                        </p>
                      </div>
                    </div>
                    <div className="squareWrap">
                      <div className="blue divAlign">
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.BLOCKCHAIN_TEXT_BLUE2}
                        </p>
                      </div>
                      <div className="white">
                        <img
                          alt="Blockchain"
                          className={"devImages"}
                          src={blockchain}
                        />
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor
              onChange={() => this.visibility("blockchain")}
            >
              {() => {
                return (
                  <div>
                  <div className="squareWrap">
                  <div className="white divAlign">
                    <p className={"devText"}>
                      {DCONSTANTS.BLOCKCHAIN_TEXT_WHITE3}
                    </p>
                  </div>
                  <div className="blue divAlign">
                    <p className={"titleOnWhite devText"}>
                      {DCONSTANTS.BLOCKCHAIN_TEXT_BLUE4}
                    </p>
                  </div>
                </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor
              onChange={() => this.visibility("continuous")}
            >
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div id="continuous" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.CONTINOUS_TITLE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.DEVOPS_TEXT_BLUE}
                        </p>
                      </div>
                      <div className="white divAlign">
                        <p className={"devText"}>
                          {DCONSTANTS.DEVOPS_TEXT_WHITE}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
            <VisibilitySensor onChange={() => this.visibility("quality")}>
              {() => {
                return (
                  <div>
                    <div className="squareWrap">
                      <div className="white">
                        <img
                          alt="quality"
                          className={"devImages"}
                          src={quality}
                        />
                      </div>
                      <div id="quality" className="blue divAlign">
                        <p className={"titleOnWhite whiteDivAlign "}>
                          {DCONSTANTS.QUALITY_TITLE}
                        </p>
                        <p className={"titleOnWhite devText"}>
                          {DCONSTANTS.QUALITY_TEXT}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    );
  }
}
