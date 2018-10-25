import React from 'react'
import Header from '../components/homeComponents/header'
import Presentation from '../components/homeComponents/ivoryPresentation'
import LaunchingSoon from '../components/homeComponents/launchingSoon'
import Footer from '../components/homeComponents/footer'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/pageAssets/hamburgerMenu/hamburgerMenu'
import ivoryLogo from '../images/logo.png'

import 'bootstrap/dist/css/bootstrap.css'
import '../customStyles/homeStyle/custom.styles.css'
import '../customStyles/homeStyle/presentation.css'
import '../customStyles/homeStyle/launchingSoonCSS.css'
import '../customStyles/pageAssets/hamburgerMenu.css'

  class IndexPage extends React.Component {
    componentDidMount() {
      var newS = document.createElement('link');
      newS.setAttribute('rel', 'icon');
      newS.setAttribute('href', '/ivory_favicon.png');
      newS.setAttribute('type', 'image/gif');
      newS.setAttribute('type', 'image/gif');
      newS.setAttribute('size', '16x16');
      document.head.appendChild(newS);
    }
    render(){
      return(
        <div id='outer-container'>
        
          <Helmet>
            <meta charSet='utf-8'/>
            <title>Ivory | Cloud and Mobile App Platform</title>
            <meta name='description' content='Ivory is a open source and mobile app development platform that accelerates the development of complex Blockchain and AI products.' />
            <link rel = 'canonical' href='https://www.ivory.io/' />
          </Helmet>

          <div class='navbar-mobile'>
          <Link to='/'>
            <Image
              className='mobile-ivory-logo'
              src={ivoryLogo}
              onClick='history.go(0)'
              responsive width='116' height='44'
            />
          </Link>
          <Sidebar/>

        </div>
        <Header />
        <Presentation />
        <LaunchingSoon />
        <Footer />
      </div>
      )
    }

  }
export default IndexPage

