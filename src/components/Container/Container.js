import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import './Container.css'
const Container = () => {
  const [activities, setActivities] = useState([])
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
          <Cart activity={activity} key={activity.id}></Cart>
        ))}
      </div>
      <div className="calculate_container">
        <h2>This is Calculate container</h2>
      </div>
    </div>
  )
}

export default Container
