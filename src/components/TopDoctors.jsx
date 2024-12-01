import React from 'react'
import { doctors } from '../assets/assets'
const TopDoctors = () => {
  return (
    <div>
        <h1>Top Doctors</h1>
        <p>Easily book appointments with highly rated specialists in just a few clicks.</p>
        <div>
            {doctors.slice(0,10).map}
        </div>
    </div>
  )
}

export default TopDoctors