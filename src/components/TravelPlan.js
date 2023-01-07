import React from 'react'

import Navbar from './Navbar'
import './travelPlan.css'
import { NavLink } from 'react-router-dom';


export default function TravelPlan(props) {
  // const card=[{title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"},
  // {title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"},
  // {title:"pakage 1",destination:"sujek",time:"2 days 3 night",hotel:"premimum hotel"}]
  return (
    <div className='travelPlanC'>
      <div className='travelPlanCard'>
        
      
      <Navbar />
      <div className='cardHolder'>

        {props.card.map((card) => {
          return <div key={card} class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img className='c_image' src={card.image}/>
                </div>
              </div>
            </div>
            <div class="text-container">
              {/* <h2>{card.title}</h2> */}
              <h3>{card.destination}</h3>
              <p><span className='C-time'>{card.time}</span></p>
              <div className='C-details'>
                This a demo experiment to skew image container. It looks good.
              </div>
              <NavLink to={`/travelplan/details/${card.id}`} > <button className='C-btn'>Details</button></NavLink>
            </div>
          </div>
        })}

        {/* {props.card.map((card) => { return <div key={card}>
            <div className='card'>
             <div className='travelCard'>
              <h2>{card.title}</h2>
              <h3>{card.destination}</h3>
              <p>{card.time}</p>
              <p>{card.hotel}</p>
              <NavLink to={`/travelplan/details/${card.id}`} > <button>Details</button></NavLink>
             
             </div>
             </div>
            </div>})} */}
      </div>
    </div>
    </div>
  )
}
