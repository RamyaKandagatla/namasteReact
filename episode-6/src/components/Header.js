import { useState } from "react";
import {APP_LOGO} from "../utils/constants";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO}></img>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
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