import React from 'react'
import './Question.css'

const Question = () => {
  return (
    <div>
      <h2 className="question_title">Questions</h2>
      <div className="question_main_container">
        <div className="question">
          <h3>How does react work?</h3>
          <h5>
            Ans :{' '}
            <small className="ans">
              ReactJS divides the UI into isolated reusable pieces of code known
              as components. React components work similarly to JavaScript
              functions as they accept arbitrary inputs called properties or
              props
            </small>
          </h5>
        </div>
        <div className="question">
          <h3>What are the differences between props and state?</h3>
          <h5>
            Ans :{' '}
            <small className="ans">
              Props are used to pass data from one component to another. The
              state is a local data storage that is local to the component only
              and cannot be passed to other components.
            </small>
          </h5>
        </div>
        <div className="question">
          <h3>What is the use of useEffect without loading data?</h3>
          <h5>
            Ans :{' '}
            <small className="ans">
              By using this Hook, you tell React that your component needs to do
              something after render. React will remember the function you
              passed (we'll refer to it as our “effect”), and call it later
              after performing the DOM updates.
            </small>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Question
