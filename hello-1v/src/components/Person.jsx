import React from 'react'

function Person({person}) {
  return (
    <div>
      <li style={{textAlign:"center"}}>
            {person.name}
      </li>
    </div>
  )
}

export default Person
