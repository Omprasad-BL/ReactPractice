import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      message: "Welcome visitor ",
    };
  }
  changeMethod() {
    this.setState({
      message:"thank you "
    })
    // this.setState((prev) => (prev.message = "thank you for subscribe "));
  }
  render() {
    return (
      <>
        <h1 style={{ color: "red " }}>
          Hello Class Component {this.props.name} {this.state.message}{" "}
        </h1>
        <button onClick={() => this.changeMethod()}>Subscribe </button>
      </>
    );
  }
}

export default Welcome;
