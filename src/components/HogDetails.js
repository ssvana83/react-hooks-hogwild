import React from 'react'

function HogDetails({ specialty, weight, greased, medal }) {
 
  return (
    <div>
      <p>specialty: {specialty}</p>
      <p>weight: {weight}</p>
      <p>{greased ? "greased" : "not greased"}</p>
      <p>medal: {medal}</p>
    </div>
  )
}

export default HogDetails;
