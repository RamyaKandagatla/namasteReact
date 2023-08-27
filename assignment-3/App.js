import React from "react";
import  ReactDOM from "react-dom";

const NavBar = () => (
  <>
    <div>
      <ul>
        <li>
          <img src="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg" alt="forest" height="100px"></img>
        </li>
        <li>
          <form>
            <input type="text" placeholder="Search"></input>
            <button><img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" height="50px" width="40px"></img></button>
          </form>
        </li>
        <li>
          <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" height="100px"></img>
        </li>
      </ul>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NavBar />)