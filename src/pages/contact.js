import React from 'react'
import ContactFooter from '../components/contactComponents/contactFooter'
import ContactHeader from '../components/contactComponents/contactHeader'
import { Link } from 'gatsby'
import { Image } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/pageAssets/hamburgerMenu/hamburgerMenu'
import ivoryLogo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.css'



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
            <title>Ivory Contact</title>
            <link rel = 'canonical' href='https://www.ivory.io/contact' />
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
          <ContactHeader />
          <ContactFooter />
    </div>
    )
  }
}

  export default DevelopersPage