import React, { Component } from "react";

export default class Events2 extends Component {
  clickHandler(num) {
    console.log("class comp clicked " + num);
  }

  render() {
    return (
      <div>
        {/*         simple way to call without args 
      <button onClick={this.clickHandler}>Click here </button>
        */}
        <button onClick={this.clickHandler.bind(null, 23)}>Click here </button>
      </div>
    );
  }
}
