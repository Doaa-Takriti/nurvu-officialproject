import React from 'react'

const DescFeatures = (props) => {
  return (
    <div className="col-lg-6 demo-content-sec">
    <h3 className="head-title gradient-title">Get Free Demo</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa ratione esse, excepturi veniam
        facere necessitatibus asperiores fuga nam nesciunt eveniet animi sunt consequuntur nostrum impedit
        consequatur, rem libero. Reprehenderit.</p>

    <div className="feature-content">
        <h4 className="sub-title">Features</h4>
        <div className="row">
            
{props.data.map(item => {
return (

<div key={item.id} className="col-lg-6 mt-3">
<div className="feature-list">
    <img src={item.img} className="feature-icon" alt="" />
    <p>{item.name}</p>
</div>
</div>
)
})}
        
        </div>
    </div>
</div>
  )
}

export default DescFeatures