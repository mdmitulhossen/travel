import React from 'react'
import "./traveldetails.css"

export default function TravelDetailsCard({card,id}) {
// const name =[{h:"s",s:"f"},{h:"r",s:"f"},{h:"q",s:"n"}]
 const detail = card.filter((card)=>{
  if(card.id===parseInt(id)) return true;
 })
console.log(card, id)
console.log(detail)
  return (
      
        <div className='detailsCard2'>
        <div className='details2'>
         <h1 style={{marginBottom:"30px"}}>{detail[0].destination}</h1>
         <h4>{detail[0].details}</h4>
         <h4>For Booking call this Number</h4>
        </div>
       
            
       {/* <div className='detailsCard'>
        <div className='details'>
         <h1>sr</h1>
         <p>fger</p>
         <h4>For Booking call this Number</h4>
        </div>
        </div> */}
      </div>
  )
}
