import React, { useState } from 'react'
import './Calculate.css'
// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const breakTimes = [10, 20, 30, 40, 50]

const Calculate = ({ time }) => {
  const notify = () => toast('Yay!! We have done it.')
  let total = 0
  for (const product of time) {
    console.log(product)
    total = total + product
  }
  const [breakTime, setBreakTime] = useState(0)

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
            14 <small>yrs</small>
          </h3>
          <p>Age</p>
        </article>
      </div>
      <h2 className="break">Add A Break</h2>
      <div className="break_time">
        {breakTimes.map((breakTime) => {
          return (
            <button
              key={breakTime}
              onClick={() => setBreakTime(breakTime)}
              className="break_btn"
            >
              <FontAwesomeIcon
                className="icon"
                icon={faClock}
              ></FontAwesomeIcon>
              <p>{breakTime} Mins</p>
            </button>
          )
        })}
      </div>
      <h3 className="exercise_title">Exercise Details</h3>
      <div className="exercise_time_container">
        <h3 className="exercise_time">Exercise time : {total}Mins</h3>
        <h3 className="time_break">Break time : {breakTime} Mins</h3>
      </div>
      <ToastContainer />
      <button onClick={notify} className="btn_activity">
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
