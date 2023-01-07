import React from 'react'
import "./HeroStyles.css";

export default function Hero(props) {
  return (
    // <>
    <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg}/>
    
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            
            <a href={props.url1} className={props.btnClass + " heroBTN"}>
                {props.btnText1}
            </a>
           
            <a href={props.url2} className={props.btnClass + " heroBTN"}>
                {props.btnText2}
            </a>
            
            
        </div>
    
    </div>
    // </>
  )
}
