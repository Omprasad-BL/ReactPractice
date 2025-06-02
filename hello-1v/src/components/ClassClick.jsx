import React, { Component } from 'react'

export default class ClassClick extends Component {

    clickHandler(){
        console.log("class event clicked ");
        
    }
  render() {


    return (
      <div>
        <button onClick={this.clickHandler}>click me two </button>
      </div>
    )
  }
}
