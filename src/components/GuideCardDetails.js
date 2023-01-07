import React from 'react';
import './GuideCardDetails.css'
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
const GuideCardDetails = ({data}) => {
    const {id}=useParams();
    
    const detail = data.filter((data)=>{
        if(data.id===id) return true;
       })

       console.log(id,detail ,data);
    return (
        <div>
            
        
        <div className='imageGuidedetails'>
            <Navbar/>
        <div className='GuidCardDetails'>
            <div className='GuideCard'>
            
            <div class="card mb-3" style={{ maxWidth: "100%",background:"rgba(255, 255, 255, 0.727)" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={detail[0].image} class="img-fluid guideDetailsImage rounded-start" alt="..." />
                        <h3 className='text-center'>{detail[0].title}</h3>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="card-title">{detail[0].title}</h2>
                            <p class="card-text">{detail[0].details}</p>
                         
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default GuideCardDetails;