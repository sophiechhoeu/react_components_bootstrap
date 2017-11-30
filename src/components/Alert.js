import React from 'react'

const Alert = (props) => {
  console.log(props)
  return(
    <div className={`alert alert-${props.variation}`}>
    <p>{props.message}</p>
    <p>{props.children}</p>
    </div>
  )
}


export default Alert
