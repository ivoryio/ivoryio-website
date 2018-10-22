import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import DevelopersHeader from '../components/developersComponents/developersHeader'
import DevProj from '../components/developersComponents/developersProj'
import DeveloperDescription from '../components/developersComponents/developersDescription'
import Footer from '../components/homeComponents/footer'

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
      <DevelopersHeader />
      <DeveloperDescription />
      <DevProj />
      <Footer />
    </div>
    )
  }
}

  export default DevelopersPage