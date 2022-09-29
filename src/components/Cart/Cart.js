import React from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ activity, handleAddToList }) => {
  const { img, age, details, name, time } = activity
  return (
    <div className="cart" data-aos="fade-up">
      <img src={img} alt="" />
      <div className="cart_details">
        <h3 className="cart_title">{name}</h3>
        <p className="cart_info">
          <small>{details}</small>
        </p>
        <p className="age">
          For Age : <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>{' '}
          <b>{age}</b>
        </p>
        <p className="time">
          Time required : <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>{' '}
          <strong className="timer">{time} Mins</strong>
        </p>
      </div>
      <button onClick={() => handleAddToList(time)} className="cart_btn">
        <p className="btn_text">Add to List</p>
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Cart
