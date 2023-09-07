import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(`${this.props.name} constructor`)

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // }
    this.state = {
      userInfo : {
        name : 'Ramya',
        location : 'Bangalore',
        avatar_url : '',
      }
    }
  }

  async componentDidMount() {
    // const { name, location } = this.props;
    // console.log(`${name} componentDidMount`);
    const data = await fetch('https://api.github.com/users/RamyaKandagatla');
    const json = await data.json();
    console.log(json,"json");
    this.setState({
      userInfo : json
    })
  }

  render() {
    const { userInfo: { name, location, avatar_url }} = this.state;
    // console.log(`${name} render`);

    // const {count, count2 } = this.state;
    return (
      <div className="user-cont">
        <img src={avatar_url} alt='avatar'/>
        {/* <h2>Count: {count}</h2>
        <button onClick={() => {
          this.setState({count: count+1})
        }}>increase count</button> */}
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h3>Contact: Kandagatla Ramya</h3>
      </div>
    );
  }
}

export default UserClass;


/**
 * Mounting cycle:
      * constructor
      * render
      *  html 
      * component did mount
      * api call
      * this.setstate
  * updating cycle
      * render with api data
      * html loaded with api data
      * component did update
  * unmounting
      * componentWillUnmount
 */