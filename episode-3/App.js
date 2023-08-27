import React from "react";
import ReactDOM from "react-dom/client";

// JSX => react.createElement => react element (js object) => htmlElement(render)
//    babel        element understood by react           reactDOM
// babel transpiles jsx to react.createElement(babel does many things this is one of it)
const JSXheading = <h1 id="heading">hello from JSX</h1> // react element


// react functional component

// const Componets = () => {
//   return(
//     <>
//       <h1>heading</h1>
//       <div>Hellooo!!!!!!!!</div>
//     </>
    
//   )
// }

// const HeadingComponent = () => {
//   return <h1>hello from functional component</h1>
// }

// if it is one line it can be returned like this also in the arrow functions
//const HeadingComponent2 = () => <h1>hello from functional component</h1> 

const Title = () => (
  <h1 id="heading">
    hello from title component
  </h1>
)

const HeadingComponent3 = () => (
  <div id="container">
    <Title />
    {Title()}
    <h1>hello from functional component</h1>
  </div>
)
// component composition : composing 2 components into one another in the above title 
//component in headingcomponent.
// jsx will sanitize everything which is present in the curly braces {} before rendering.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(JSXheading); // way of rendering the react element

root.render(<HeadingComponent3 />) //way of rendering the component

// render wont understands the jsx - it understands react (react.createElement which is js object).
// jsx is converted to react.createElement/js object by babel.

//root.render converts everything into html then browser will render the html to u.