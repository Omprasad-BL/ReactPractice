import React from 'react'

export default function FuncitonClick() {
    function clickHandler(){
        console.log("event handler button clicked  ");
        
    }
  return (
    <div>
    {/* its a funciton not funciton call */}
      <button onClick={clickHandler}>click</button>
    </div>
  )
}
