import React from 'react'

const Events = () => {

function clickhandler(){
    console.log("button clicked ");
    
}
  return (
    <div>
      <button onClick={clickhandler()}>click here</button>
    </div>
  )
}

export default Events
