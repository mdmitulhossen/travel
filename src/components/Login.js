import "./loginStyle.css"
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { queryAllByAttribute } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const navigate= useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    console.log(email);
  
    const handleSignIn=async()=>{
  
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("Your are "+user.email);
          if(user){
            navigate('/');
          }
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  return (
    <div className="main-wrap">
       <div className="outer-wrap">
          <h1>GHURA-GHURI</h1>
            <h3>Log in</h3>
            <hr/>
            {/* <div className="social-login">
                <a href="#">
                    <img src="../image/fb.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/google.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/twitter.png" alt=""/>
                </a>
                <a href="#">
                    <img src="../image/linkedin.png" alt=""/>
                </a>
            
            </div> */}

            

            <div className="form">
                <label htmlFor="email">Email</label>
                <br/>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} id="email" placeholder="Email"/>
                <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password"/>
                <br/>
                <input type="checkbox" name="check" id="check"/>
                <span className="rm-me">Remember Me</span>
                <a href="#" className="fg-pa">Forgot Password?</a>
                <br/>
                <button type="submit" className="btn" onClick={handleSignIn}>Log in</button>
            </div>
            <div className="terms">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div> 
    </div>
  )
}
