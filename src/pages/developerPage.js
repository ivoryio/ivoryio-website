import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Footer from '../components/homeComponents/footer'

class ForDevelopers extends React.Component {
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
      <Footer />
    </div>
    )
  }
}

  export default ForDevelopers