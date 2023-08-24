import React from 'react'

const GroupImage = (props) => {
    console.log("prooops" ,props)
  return (
   
    <div className="apps">
    {props.data.map(item => {
            return (
                <div key={item.id}>
  <img src={item.img} alt="" />
                        <p>{item.name}</p>        
                          </div>
            )
        })}
        </div>
   
  )
}

export default React.memo(GroupImage)