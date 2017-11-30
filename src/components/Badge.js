import React from 'react'

const Badge = ({title,message}) => {
  return (
  <div className={`badge badge-${title}`}>
  {message}
  </div>
  )
}

export default Badge
