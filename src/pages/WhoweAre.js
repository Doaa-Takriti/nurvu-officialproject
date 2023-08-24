import React from 'react'
import Data from "../Data.json"
import DescWhoweare from "../components/DescWhoweare"
import Imgwhoweare  from "../components/Imgwhoweare"
import Companyicon from "../components/Companyicon"

const WhoweAre = () => {
  return (
    <div>
            <div className="container p-60">
                <DescWhoweare />
                <Imgwhoweare data={Data.imgwhoweare} />
                <Companyicon data={Data.iconcompany} />




</div>
    </div>
  )
}

export default WhoweAre