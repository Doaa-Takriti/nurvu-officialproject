import React from 'react'
import Data from "../Data.json"
import DescFeatures from "../components/DescFeatures"
import Formcontact from '../components/Formcontact'


const Contactus = () => {
  

  return (
    <div className="contact-page">
    <div className="container-fluid">
        <div className="row">
            <DescFeatures data={Data.features}/>
         
           <Formcontact />
        </div>
    </div>
</div>
  )
}

export default Contactus