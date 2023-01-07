import React from 'react'
import "./TripStyles.css";

export default function TripData(props) {
  return (
    <div className="t-card">
        
        <div className='t-image'>
        <span className='t-head-title'>

</span>
            <img src={props.image} alt='trip1'/>
        </div>
        <h4>
            {props.heading}
        </h4>
        <p>
            {props.text}
        </p>
    </div>
  )
}
