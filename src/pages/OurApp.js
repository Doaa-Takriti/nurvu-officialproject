import React from 'react';
import data from "../Data.json"
import GroupImage from '../components/GroupImage';
import GroupImage2 from '../components/GroupImage2';


const OurApp = () => {
  return (
    <div className="main-section">
    <div className="container-fluid">
        <h3 className="head-title gradient-title text-center">Your Ultimate Solution To Asset Management</h3>
        <div className="row">
            <div className="col-lg-6">
                    <GroupImage data={data.grouponeimage} />
     
             
            </div>
            <div className="col-lg-6">
            <GroupImage data={data.grouptwoimage} />

            </div>
            <div className="col-lg-12">
            <GroupImage2 data={data.groupthreeimage} />

   
            </div>
        </div>
       
    </div>
</div>
  )
}

export default OurApp