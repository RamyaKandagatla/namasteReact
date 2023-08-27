import { useState } from "react";
import {APP_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO}></img>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>AboutUs</Link>
          </li>
          <li>
            <Link to='/contact'>ContactUs</Link>
          </li>
          <li>Cart</li>
          <button className="btn-cont" onClick={() => 
            { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header;