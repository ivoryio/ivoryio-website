import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import DevelopersHeader from '../components/developersComponents/developersHeader'
import DevProj from '../components/developersComponents/developersProj'
import DevDescription from '../components/developersComponents/devDescription'
import Footer from '../components/homeComponents/footer'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/pageAssets/hamburgerMenu/hamburgerMenu'
import ivoryLogo from '../images/logo.png'



class DevelopersPage extends React.Component {
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
        <Helmet>
            <meta charSet='utf-8'/>
            <title>Open Source Development Framework</title>
            <link rel = 'canonical' href='https://www.ivory.io/developerPage' />
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

      <DevelopersHeader />
      {/* <DeveloperDescription /> */}
      <DevDescription />
      <DevProj />
      <Footer />
    </div>
    )
  }
}

  export default DevelopersPage