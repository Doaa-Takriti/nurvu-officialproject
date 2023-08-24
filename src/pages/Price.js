import React from 'react'
import BoxPlan from "../components/BoxPlan"
import ChoosePackage from "../components/ChoosePackage"

const Price = () => {

  
  return (
    <div>
            <div className="container">
        <h3 className="head-title gradient-title text-center">Pricing plan</h3>
        <div className="row plan-sec">
          <BoxPlan />
          <ChoosePackage />
          
           
        </div>
        

    </div>
    </div>
  )
}

export default Price