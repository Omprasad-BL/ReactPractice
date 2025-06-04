import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      //  if you change it to false you will get guest interface
    };
  }

  render() {
    // 1st approach IF ELSE APPROACH
    // if else not work inside jsx so we placed , outside JSX
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Nivk</div>
    // }
    // else{
    //     return <div>Welcome Guest </div>
    // }

    // 2nd approach    VARIABLE APPROACH
    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Nivk </div>
    // }else{
    //     message=<div> Guest </div>
    // }

    // return <div>{message} </div>

    // 3rd approach     CONSITIONAL OPERATOR APPROACH
    // return this.state.isLoggedIn ? <div> Nivk boy </div> : <div>Guest </div>;

    // 4th approach
    return this.state.isLoggedIn && <div>Welcome Nivk Circuit approach </div>;

    //
    // return (
    //   <div>
    //     <h1>User greet</h1>
    //   </div>
    // )
  }
}

export default UserGreeting;
