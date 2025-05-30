import React, { Children } from 'react'

const Props = (props) => {
    console.log(props)
  return (
    <div>
    {/* note here have to use braces for using javascript inside html */}
      <h1>Props components {props.name}</h1>
      {props.children}
    </div>
  )
}

export default Props