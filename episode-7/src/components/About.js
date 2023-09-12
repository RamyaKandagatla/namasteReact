import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
  };

  render() {
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
