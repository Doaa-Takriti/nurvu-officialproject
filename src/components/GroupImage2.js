import React from 'react'

const GroupImage2 = (props) => {
  return (
    <div className="apps">
    {props.data.map(item => {
return (
    <div key={item.id}>
<img src={item.img} alt="" />
            <p>{item.name1} <br/> {item.name2}</p>       
              </div>
)
})}
     
    </div>
  )
}

export default React.memo(GroupImage2)