import React from 'react'
import { NavLink } from 'react-router-dom'
import Data from "../Data.json"

const Sidemenufixed = () => {
  return (
   
    <div className="side-nav-menu">
        <ul>
                {Data.links.map(item => {
                        return(
                                <li key={item.id}>
                                <NavLink to={item.linkto}  >
                                        <img src={item.img} className="menus-icon" alt=""/>
                                        <p className="m-0">{item.title}</p>
                                    </NavLink>
                                </li>
                        )
                })}
      
        </ul>
    </div>
  )
}

export default Sidemenufixed