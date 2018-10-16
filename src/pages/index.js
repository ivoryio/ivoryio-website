import React from 'react'
import Header from '../components/homeComponents/header'
import Presentation from '../components/homeComponents/ivoryPresentation'
import LaunchingSoon from '../components/homeComponents/launchingSoon'
import Footer from '../components/homeComponents/footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../customStyles/homeStyle/custom.styles.css'
import '../customStyles/homeStyle/presentation.css'
import '../customStyles/homeStyle/launchingSoonCSS.css'

const IndexPage = () => (
  <div>
    <Header />
    <Presentation />
    <LaunchingSoon />
    <Footer />
  </div>
)
export default IndexPage

