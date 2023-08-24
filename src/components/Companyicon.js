import React from 'react'

const Companyicon = (props) => {
  return (
    <div className="row p-3 justify-content-center">
    <h4 className="sub-title mt-4 text-center"> Trusted By Companies</h4>

   {props.data.map(item => {
        return (
            <div key={item.id} className="col-lg-2 col-md-2 mt-3">
            <div className="det-sec">
                <img src={item.img} className="pt-company-logo" alt="" />
                <p className="pt-company-name">{item.name}</p>
            </div>
       </div>
        )
    })}
</div>
  )
}

export default React.memo(Companyicon)