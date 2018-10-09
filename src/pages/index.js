import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Presentation from '../components/ivoryPresentation'
import LaunchingSoon from '../components/launchingSoon'

const IndexPage = () => (
  <body style={{margin: 0, padding: 0}}>
    <div>
      <Presentation />
      <LaunchingSoon />
    </div>
  </body>
)
export default IndexPage
