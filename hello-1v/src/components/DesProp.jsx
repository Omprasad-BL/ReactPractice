import React from 'react'

export default function DesProp({name ,age}) {
  // DesProp({name,age,...props} )
  // or destructure here
  // const {name,age} =props
  return (
    <div>
    
      <h1> Details {name +" "+ age }  </h1>
    </div>
  )
}
