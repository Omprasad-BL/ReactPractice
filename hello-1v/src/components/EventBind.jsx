import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //   appraoch 3 binding in constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "good bye",
    });
    console.log(this);
    console.log(this.state.message);
  }

   clickHandler2=()=> {
    this.setState({
      message: "good bye",
    });
    console.log(this);
    console.log(this.state.message);
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1st approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* second approach   */}
        {/* <button onClick={()=>this.clickHandler()}>click2</button> */}
        {/* appraoch 3 */}
        {/* <button onClick={this.clickHandler}>click 3</button> */}

        {/* approach 4 class method as arrow function */}
        <button onClick={this.clickHandler2}>click 4</button>
      </div>
    );
  }
}
