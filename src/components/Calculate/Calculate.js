import React from 'react'
import './Calculate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Calculate = () => {
  return (
    <div>
      <div className="introduction">
        <img src="../../images/logo.webp" alt="" />
        <article className="names_blog">
          <h3>Md.Rifat</h3>
          <p>Dhaka, Bangladesh</p>
        </article>
      </div>
      <div className="about_me">
        <article>
          <h3>
            58 <small>kg</small>
          </h3>
          <p>Weight</p>
        </article>
        <article>
          <h3>
            5.4 <small>feet</small>
          </h3>
          <p>Height</p>
        </article>
        <article>
          <h3>
            25 <small>yrs</small>
          </h3>
          <p>Age</p>
        </article>
      </div>
      <h2 className="break">Add A Break</h2>
      <div className="break_time">
        <button className="break_btn">
          <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
          <p>10 Mins</p>
        </button>
        <button className="break_btn">
          <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
          <p>20 Mins</p>
        </button>
        <button className="break_btn">
          <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
          <p>30 Mins</p>
        </button>
        <button className="break_btn">
          <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
          <p>40 Mins</p>
        </button>
        <button className="break_btn">
          <FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon>
          <p>50 Mins</p>
        </button>
      </div>
      <h3 className="exercise_title">Exercise Details</h3>
      <div className="exercise_time_container">
        <h3 className="exercise_time">Exercise time :</h3>
        <h3 className="time_break">Break time :</h3>
      </div>
      <button className="btn_activity">
        <p>Activity Completed</p>
        <FontAwesomeIcon
          className="check_icon"
          icon={faCheck}
        ></FontAwesomeIcon>
      </button>
    </div>
  )
}

export default Calculate
