import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
    // console.log("parent constructor")
    this.state = {}
  }

  async componentDidMount() {
    // console.log("parent component did mount");
  };

  render() {
    // console.log("parent render");
    return(
      <div>
        <h1>About us</h1>
        <h2> This is the food delivery app</h2>
        <UserClass />
      </div>
    )
  }
  
}

export default About;


/**
 * 
 *" render phase"
 * parent constructor
 - parent render 

 - child1 constructor
 - child1 render

 - child2 constructor
 - child2 render

 "commit phase"
 <dom updated in single batch> (all the parent and child components are updated)
 - child1 component did mount

 - child2 componentdidmount

 - parent componentdidmount
  **/