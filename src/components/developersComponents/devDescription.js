import React, { Component } from "react";
import "../../customStyles/fonts.css";

import "../../customStyles/developerStyle/devDescription.css";
import DCONSTANTS from "../../constants/developerConstants";

import devOpenSource from "../../images/community_img@3x.png";
import pods from "../../images/pods_img@3x.png";
import serverless from "../../images/serverless_img@3x.png";
import security from "../../images/security_img@3x.png";
import ai from "../../images/ai_img@3x.png";
import blockchain from "../../images/blockchain_img@3x.png";
import quality from "../../images/quality_img@3x.png";

export default class DeveloperDescription extends Component {
  render() {
    return (
      <div className={"developerWrapper"}>
        <h3 className={"developerTitle"}>
          We're still building, but here's what we're aiming at:
        </h3>

        <div class="bigContainer">
          <div id='fixOnScroll'>
            <div class='scrollLinksWrapper'>
              <a href='#openSrc' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Open source community</div>
              </a>
              <div class='scrollLine' />
              <a href='#pods' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Pods</div>
              </a>
              <div class='scrollLine' />
              <a href='#serverless' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Serverless Solution</div>
              </a>
              <div class='scrollLine' />
              <a href='#speed' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Speed is a first class citizen</div>
              </a>
              <div class='scrollLine' />
              <a href='#security' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Security and privacy</div>
              </a>
              <div class='scrollLine' />
              <a href='#machine' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Machine learning and AI</div>
              </a>
              <div class='scrollLine' />
              <a href='#blockchain' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Blockchain</div>
              </a>
              <div class='scrollLine' />
              <a href='#continuous' class='scrollLink' >
                <div class='scrollOval' />
                <div class='linkText'>Continuous Delivery & Zero DevOps</div>
              </a>
              <div class='scrollLine' />
              <a href='#quality' class='scrollLink' >
                <div class='scrollOval' /><div class='linkText'>Quality</div>
              </a>
              {/* <div class='scrollLine' /> */}
            </div>
          </div>

          <div className={'squareWrapColumn'}>
            <div className='squareWrap'>
              <div id="openSrc" className='white divAlign' >
                <p className={'titleOnWhite'}>Open Source Community</p>
                <p className={'devText'}>{DCONSTANTS.OPEN_SOURCE_TEXT}</p>
              </div>
              <div className="blue">
                <img className={"devImages"} src={devOpenSource} />
              </div>
            </div>
            <div className='squareWrap'>
              <div id='pods' className='blue divAlign'>
                <p className={'titleOnWhite whiteDivAlign '}>Pods</p>
                <p className={'titleOnWhite devText'}>
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
                <img className={"devImages"} src={pods} />
              </div>
              <div className="blue divAlign">
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.PODS_BLUE2}
                </p>
              </div>
            </div>
            <div className='squareWrap'>
              <div id='serverless' className='blue divAlign'>
                <p className={'titleOnWhite whiteDivAlign '}>
                  Serverless solution
                </p>
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.SERVERLESS_TEXT1}
                </p>
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.SERVERLESS_TEXT2}
                </p>
              </div>
              <div className="white">
                <img className={"devImages"} src={serverless} />
              </div>
            </div>
            <div className="squareWrap">
              <div id='speed' className="white divAlign">
              <p className={"titleOnWhite"}>Speed is a first class citizen</p>
                <p className={"devText"}>{DCONSTANTS.SPEED_TEXT_WHITE}</p>
              </div>
              <div className="blue divAlign">
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.SPEED_TEXT_BLUE}
                </p>
              </div>
            </div>
            <div className="squareWrap">
              <div id='security' className="blue divAlign">
                <p className={"titleOnWhite whiteDivAlign "}>
                  Security and privacy
                </p>
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.SECURITY_TEXT_BLUE}
                </p>
              </div>
              <div className="white divAlign">
                <p className={"devText"}>{DCONSTANTS.SECURITY_TEXT_WHITE1}</p>
              </div>
            </div>
            <div className="squareWrap">
              <div className="white divAlign">
                <p className={"devText"}>{DCONSTANTS.SECURITY_TEXT_WHITE2}</p>
              </div>
              <div className="blue">
                <img className={"devImages"} src={security} />
              </div>
            </div>
            <div className="squareWrap">
              <div className="blue">
                <img className={"devImages"} src={ai} />
              </div>
              <div id='machine' className="white divAlign">
              <p className={"titleOnWhite"}>Machine Learning and AI</p>
                <p className={"devText"}>{DCONSTANTS.AI_TEXT_WHITE1}</p>
              </div>
            </div>
            <div className="squareWrap">
              <div className="white divAlign">
                <p className={"devText"}>{DCONSTANTS.AI_TEXT_WHITE2}</p>
              </div>
              <div id='blockchain' className="blue divAlign">
              <p className={"titleOnWhite whiteDivAlign "}>
              Blockchain
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
                <img className={"devImages"} src={blockchain} />
              </div>
            </div>
            <div className="squareWrap">
              <div className="white divAlign">
                <p className={"devText"}>{DCONSTANTS.BLOCKCHAIN_TEXT_WHITE3}</p>
              </div>
              <div className="blue divAlign">
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.BLOCKCHAIN_TEXT_BLUE4}
                </p>
              </div>
            </div>
            <div className="squareWrap">
              <div id='continuous' className="blue divAlign">
              <p className={"titleOnWhite whiteDivAlign "}>
              Continuous Delivery & Zero DevOps
                </p>
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.DEVOPS_TEXT_BLUE}
                </p>
              </div>
              <div className="white divAlign">
                <p className={"devText"}>{DCONSTANTS.DEVOPS_TEXT_WHITE}</p>
              </div>
            </div>
            <div className="squareWrap">
              <div className="white">
                <img className={"devImages"} src={quality} />
              </div>
              <div id='quality' className="blue divAlign">
              <p className={"titleOnWhite whiteDivAlign "}>
              Quality
                </p>
                <p className={"titleOnWhite devText"}>
                  {DCONSTANTS.QUALITY_TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
