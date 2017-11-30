import React from 'react'

const style = {width:'20rem'}

const Card = ({title, message, type, btnMessage, imgSrc, href}) => {
  return (
    <div className="card" style={style}>
      <img className="card-img-top" src="{imgSrc}" alt="Card image cap"/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{message}</p>
        <a href={href} className={`btn btn-${type}`}>{btnMessage}</a>
      </div>
    </div>


)
}





export default Card
