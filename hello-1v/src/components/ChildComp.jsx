import React from 'react'

export default function ChildComp(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler(23)}>Greet parent</button>
    </div>
  )
}
