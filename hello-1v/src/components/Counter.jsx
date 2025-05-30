import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // appraoch
    // this.state.count=this.state.count+1;

    // approach
    // this.setState({count:this.state.count+1},()=>{
    //   console.log("here " + this.state.count);
    // })

    // approach
    this.setState(
      (prev) => ({
        count:prev.count+1
      })
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>hello {this.state.count} </h1>
        <button onClick={() => this.increment()}> increment </button>
      </div>
    );
  }
}

export default Counter;
