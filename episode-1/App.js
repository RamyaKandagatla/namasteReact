const heading = React.createElement(
    "h1",
    {id:"heading"}, // attributes to tag
    "hello world from react!"
  )
  
  console.log(heading); // object
  
  {/* <div id="parent">
    <div id="child">
      <h1>
        im h1 tag!!
      </h1>
      <h2>
        im h2 tag!!
      </h2>
    </div>
  </div> */}
  
  // if u want to create childs at same level u need to use array 
  //nested html structure using create element for the above code
  const abcd = React.createElement(
    "div",{id:"parent"},
    React.createElement(
      "div",{id:"child"},[
        React.createElement("h1",{},"im h1 tag!!"),
        React.createElement("h2",{},"im h2 tag!!"),
      ]
    )
    )
  
  // if more childs are there, then the code will become very complex, soo that's y "JSX" is there 
  
  console.log(abcd); // object
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(abcd);  // render method takes the (heading or abcd) object and convert into heading tag(h1) and put into the DOM.
                                  //while rendering into dom it will be converted to html which browser understands