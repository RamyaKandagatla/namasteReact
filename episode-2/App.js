import React from "react";
import ReactDOM from "react-dom/client";

const abcd = React.createElement(
  "div",{id:"parent"},
  React.createElement(
    "div",{id:"child"},[
      React.createElement("h1",{},"im h1 tag!!"),
      React.createElement("h2",{},"im h2 tag!!"),
    ]
  )
  )


console.log(abcd); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(abcd);