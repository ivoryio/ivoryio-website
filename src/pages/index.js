import React from 'react'
import Header from '../components/header'
import Presentation from '../components/ivoryPresentation'
import LaunchingSoon from '../components/launchingSoon'
import Footer from '../components/footer'
import {injectGlobal} from 'styled-components'
import Averta from '../fonts/AvertaDemo-Regular.otf'
import 'bootstrap/dist/css/bootstrap.css'
import '../customStyles/custom.styles.css'
import '../customStyles/presentation.css'
import '../customStyles/launchingSoonCSS.css'

const IndexPage = () => (
  <div>
    <Header />
    <Presentation />
    <LaunchingSoon />
    <Footer />
  </div>
)
export default IndexPage

injectGlobal`
  @font-face {
    font-family: Averta;
    src: url('${Averta}') format('opentype')
  }
`
