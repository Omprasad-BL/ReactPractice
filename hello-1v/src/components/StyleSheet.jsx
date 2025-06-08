import React from 'react'
import './myStyles.css'
function StyleSheet(props) {
    const className=props.primary?"primary":"";
    return (
    <div>
      <h1 className= {`${className} }`}>Hello style sheet</h1>
    </div>
  )
}
export default StyleSheet
