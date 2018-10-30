import React, { Component } from 'react'
import '../../customStyles/fonts.css'

import '../../customStyles/developerStyle/devDescription.css'
// import "../../customStyles/businessStyle/businessDescription.css";
// import "../../customStyles/developerStyle/developerProject.css";

import DCONSTANTS from '../../constants/developerConstants'
import devOpenSource from '../../images/dev_open_source.png'

export default class DeveloperDescription extends Component {
  render () {
    return (
      <div className={'developerWrapper'}>
        <h3 className={'developerTitle'}>
          We're still building, but here's what we're aiming at:
        </h3>

        <div style={{ display: 'flex' }}>
          <div id='fixOnScroll'>
            <div class='scrollLinksWrapper'>
              <p class='scrollLink' style={{ marginBottom: 20 }}>
                <div class='scrollOval' />
                <div class='linkText'>Open source community</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />
                <div class='linkText'>Pods</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />
                <div class='linkText'>Serverless Solution</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />
                <div class='linkText'>Speed is a first class citizen</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />
                <div class='linkText'>Security and privacy</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />
                
                <div class='linkText'>Machine learning and AI</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                
                <div class='scrollOval' />
                <div class='linkText'>Blockchain</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' />

                <div class='linkText'>Continuous Delivery & Zero DevOps</div>
              </p>
              <div class='scrollLine' />
              <p class='scrollLink' style={{ marginBottom: 20, marginTop: 20 }}>
                <div class='scrollOval' /><div class='linkText'>Quality</div>
              </p>
              <div class='scrollLine' />
            </div>
          </div>

          <div className={'squareWrapColumn'}>
            <div className='squareWrap'>
              <div id='white' className={'divAlign'}>
                <p className={'titleOnWhite'}>Open Source Community</p>
                <p className={'devText'}>{DCONSTANTS.OPEN_SOURCE_TEXT}</p>
              </div>
              <div id='blue' className={'divAlign'}>
                <img className={'devImages'} src={devOpenSource} />
              </div>
            </div>
            <div className='squareWrap'>
              <div id='blue' className={'divAlign'}>
                <p className={'titleOnWhite whiteDivAlign '}>Pods</p>
                <p className={'titleOnWhite devText'}>
                  {DCONSTANTS.PODS_BLUE1}
                </p>
              </div>
              <div id='white' className={'divAlign'}>
                <p className={'devText'}>{DCONSTANTS.PODS_TEXT1}</p>
                <p className={'devText'}>{DCONSTANTS.PODS_TEXT2}</p>
              </div>
            </div>
            <div className='squareWrap'>
              <div id='white' className={'divAlign'}>
                {/* <img className={"devImages"} src={devOpenSource} /> */}
              </div>
              <div id='blue' className={'divAlign'}>
                <p className={'titleOnWhite devText'}>
                  {DCONSTANTS.PODS_BLUE2}
                </p>
              </div>
            </div>
            <div className='squareWrap'>
              <div id='blue' className={'divAlign'}>
                <p className={'titleOnWhite whiteDivAlign '}>
                  Serverless solution
                </p>
                <p className={'titleOnWhite devText'}>
                  {DCONSTANTS.SERVERLESS_TEXT1}
                </p>
                <p className={'titleOnWhite devText'}>
                  {DCONSTANTS.SERVERLESS_TEXT2}
                </p>
              </div>
              <div id='white' className={'divAlign'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
