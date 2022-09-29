import React, { useEffect, useState } from 'react'
import Calculate from '../Calculate/Calculate'
import Cart from '../Cart/Cart'
import './Container.css'
const Container = () => {
  const [activities, setActivities] = useState([])
  const [time, setTime] = useState([])

  const handleAddToList = (times) => {
    const newCount = time + times
    console.log(newCount)
    setTime([...time, newCount])
  }

  useEffect(() => {
    console.log(time)
  }, [time])

  useEffect(() => {
    fetch('activities.json')
      .then((res) => res.json())
      .then((data) => setActivities(data))
  }, [])
  return (
    <div className="parent_container">
      <div className="cart_container">
        {activities.map((activity) => console.log(activity))}
        {activities.map((activity) => (
          <Cart
            time={time}
            activity={activity}
            key={activity.id}
            handleAddToList={handleAddToList}
          ></Cart>
        ))}
      </div>
      <div className="calculate_container">
        <Calculate time={time} handleAddToList={handleAddToList}></Calculate>
      </div>
    </div>
  )
}

export default Container
