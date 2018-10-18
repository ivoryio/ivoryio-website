import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import BusinessHeader from '../components/businessesComponents/businessHeader'
import BusinessDescription from '../components/businessesComponents/businessDescription'
import BusinessForm from '../components/businessesComponents/businessForm'
import FAQ from '../components/businessesComponents/FAQ'
import Footer from '../components/homeComponents/footer'

class ForBusiness extends React.Component {
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
      <BusinessHeader />
      <BusinessDescription />
      <BusinessForm />
      <FAQ />
      <Footer />
    </div>
    )
  }
}

  export default ForBusiness
  
  