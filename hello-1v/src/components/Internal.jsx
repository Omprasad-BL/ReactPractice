import React from 'react'
 const  obj={
        color:'red'
    }
export default function Internal() {
 console.log(obj);
 
  return (
    <div>
      <p style={obj}>details added </p>
    </div>
  )
}
