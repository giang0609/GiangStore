import React from 'react'

const PolicyCard = (props) => {
  return (
    <div className="policy">
        <div className="policy__icon">
            <i className={props.icon}></i>
        </div>
        <div className="policy__info">
           <h5>{props.name}</h5>
           <p>{props.description}</p>
        </div>
    </div>
  )
}

export default PolicyCard