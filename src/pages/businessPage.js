import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import BusinessHeader from '../components/businessesComponents/businessHeader'
import BusinessDescription from '../components/businessesComponents/businessDescription'
import BusinessForm from '../components/businessesComponents/businessForm'
import FAQ from '../components/businessesComponents/FAQ'
import Footer from '../components/homeComponents/footer'

const ForBusiness = () => (
    <div>
      <BusinessHeader />
      <BusinessDescription />
      <BusinessForm />
      <FAQ />
      <Footer />
    </div>
  )
  export default ForBusiness
  
  