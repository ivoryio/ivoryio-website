import React from 'react'
import ContactFooter from '../components/contactComponents/contactFooter'
import ContactHeader from '../components/contactComponents/contactHeader'
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
          <ContactHeader />
          <ContactFooter />
    </div>
    )
  }
}

  export default DevelopersPage