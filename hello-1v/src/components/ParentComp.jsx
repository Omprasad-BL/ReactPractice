import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent "
      }
      this.greetParent=this.greetParent.bind(this)
    }
    
    greetParent(age){
        // drill up from child components event handlers
        alert(`hello ${ this.state.parentName , age}`)
    }
    
  render() {
    return (
      <div>
      {/* drill down */}
        <ChildComp greetHandler={this.greetParent}/>
      </div>
    )
  }
}
