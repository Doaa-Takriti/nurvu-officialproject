import React from 'react'

const Imgwhoweare = (props) => {
  return (
    <div className="row p-3">
    {props.data.map(item => {
        return (
            <div key={item.id} className="col-lg-4 p-2">
            <img src={item.img} className="mw-100" alt=""/>
        </div>
        )
    })}
    </div>
  )
}

export default React.memo(Imgwhoweare)