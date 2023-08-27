import {APP_LOGO} from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  )
}

export default Header;