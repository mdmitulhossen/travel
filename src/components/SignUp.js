import { useState } from "react"
import "./SignupStyle.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = ()=>{
 const navigate= useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[userName,setUserName]=useState("");
  console.log(email);

  const handleSignup=async()=>{


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Your are signup as " +user.email);
    console.log(user)
    if(user){
        navigate('/login')
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

  }
  return(
     <div>
      <div>
         <div className="main-wrap">
           <div className="form-wrap">
               <h1>SIGN <span>UP</span></h1>
               <h6>Welcome to Ghura-ghuri</h6>
               

               <div className="form">
               <input type="username" onChange={(e)=>setUserName(e.target.value)} name="username" id="username" placeholder="username"/>
               <br/>
                   <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Email"/>
                    <br/>
                   <input type="password" onChange={(e)=>setPassword(e.target.value)} name="pass" id="pass" placeholder="Password"/>
                    <br/>
                   <input type="password" name="cpass" id="cpass" placeholder="Confirm Password"/>
                    <br/>
                   <button type="submit" onClick={handleSignup} className="form-btn">SIGN UP</button>
                   <br/>
                   <button type="submit" className="form-btn"><NavLink className="toHome" to="/">Home Page</NavLink></button>

               </div>
               {/* <span className="sign-up-with">Or sign up with</span> */}

               
               {/* <div className="social-logo">
                    <a href="#" title="Facebook">
                        <img src="../image/fb.png" alt="Facebook"/>
                    </a>
                    <a href="#" title="Google">
                        <img src="../image/google.png" alt="Google"/>
                    </a>
                    <a href="#" title="Twitter">
                        <img src="../image/twitter.png" alt="Twitter"/>
                    </a>
                    <a href="#" title="Twitter">
                        <img src="../image/linkedin.png" alt="linkedin"/>
                    </a>
               </div> */}
           </div>
       </div>
      </div>
     </div>
  )
}
export default SignUp