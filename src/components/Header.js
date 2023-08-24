import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import Data from "../Data.json"


const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
        <header>
<div className="container-fluid">
    <div className="top-bar">
        <div className="logo">
            <Link className="navbar-brand" to="/">
                <img src="assest/logo-small.png" className="header-logo" alt="" />
            </Link>
        </div>
        <div className="header-right-buttons">
            <button className="btn demo-btn">Request Demo</button>
            <button className="btn login-btn">Login</button>
        </div>
        <div className="bar-icon">
            <i className="fa-solid fa-bars slider-btn" id="slide-menu-icon" onClick={handleToggle}></i>
        </div>
    </div>
    
</div>
<div  className={isActive ? ' menus active-slide' : 'menus'} id="slider-menu">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {Data.links.map(item => {
                        return(
                    
                                <li className="nav-item" key={item.id} onClick={handleToggle}>
                                <NavLink className="nav-link " to={item.linkto}  >
                                        {item.title}
                                    </NavLink>
                                </li>
                        )
                })}

        
      </ul>
</div>

</header>
    </div>
  )
}

export default Header