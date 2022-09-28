import React from 'react'
import './Cart.css'

const Cart = ({ activity }) => {
  const { img, age, details, name, time } = activity
  return (
    <div className="cart">
      <img src={img} alt="" />
      <div className="cart_details">
        <h3 className="cart_title">{name}</h3>
        <p className="cart_info">
          <small>{details}</small>
        </p>
        <p className="age">
          For Age : <b>{age}</b>
        </p>
        <p className="time">
          Time required : <strong className="timer">{time}</strong>
        </p>
      </div>
    </div>
  )
}

export default Cart
