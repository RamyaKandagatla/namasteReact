import { useState } from "react";
import {APP_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  
  const OnlineStatus = useOnlineStatus();

  return(
    <div className="flex justify-between p-4 bg-yellow-100 shadow-gray-100 shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={APP_LOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex font-bold">
          <li className="px-4">
            onlineStatus : {OnlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="px-4">
            <Link to='/about'>AboutUs</Link>
          </li>
          <li className="px-4">
            <Link to='/contact'>ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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