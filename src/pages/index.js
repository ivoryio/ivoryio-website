import React from 'react'
import Header from '../components/homeComponents/header'
import Presentation from '../components/homeComponents/ivoryPresentation'
import LaunchingSoon from '../components/homeComponents/launchingSoon'
import Footer from '../components/homeComponents/footer'
import {Link} from 'gatsby'
import {Image} from 'react-bootstrap'
import Sidebar from '../components/pageAssets/hamburgerMenu/hamburgerMenu'
import ivoryLogo from '../images/logo.png'

import 'bootstrap/dist/css/bootstrap.css'
import '../customStyles/homeStyle/custom.styles.css'
import '../customStyles/homeStyle/presentation.css'
import '../customStyles/homeStyle/launchingSoonCSS.css'

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
        <div>
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

