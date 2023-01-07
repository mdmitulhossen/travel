import React from 'react'
// import Hero from './Hero'
// import AboutImg from "../assets/night.jpg"
import Navbar from './Navbar'
// import './travelPlan.css'
import "./travelplanDetails.css"
// import { NavLink } from 'react-router-dom';
import TravelDetailsCard from './TravelDetailsCard'
import { useParams } from 'react-router-dom'
import Details from "./../Helper/Details";
import Details2 from '../Helper/Details2'
import Details3 from '../Helper/Details3'
import Details4 from "./../Helper/Details4";

export default function TravelPlanDetails() {
  const card = [
    { id: 1, title: "pakage 1", destination: "Saint Martin", time: "From 19 jan TO 23 jan", hotel: "Event FEE:3950", details:<Details/> },
    { id: 2, title: "pakage 2", destination: "Sajek Vally", time: "2 days 3 night", hotel: "premimum hotel", details:<Details2/>},
    { id: 3, title: "pakage 3", destination: "s", time: "2 days 3 night", hotel: "premimum hotel", details: <Details3/> },
    { id: 4, title: "pakage 4", destination: "s", time: "2 days 3 night", hotel: "premimum hotel", details: <Details4/> }
  ]

  const { id } = useParams();


  return (
    <div className='TravelDetails'>
      <div className='TravelDetailsOpacity'>
      <Navbar />
      <TravelDetailsCard card={card} id={id} key={id} />
      </div>
      
    </div>
  )
}
