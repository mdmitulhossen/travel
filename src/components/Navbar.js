import React, { useState } from 'react';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = ()=>{
const[user,setUser]=useState('');
const auth=getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
      setUser(user.email)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const handleSignOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signout successfull")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
  }
  return(
     <div>
      <nav className="NavbarItems">
            <h1 className='navbar-logo'>Ghura Ghuri</h1>

            <div className="menu-icons">
                <i className="fas fa-times"></i>
                {/* <i className="fas fa-times"></i> */}
            </div>

            <ul className="nav-menu active">
                {/* {MenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <Link className={item.cName}  to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}</Link>
                        </li>
                    )
                })} */}
                <li><Link className='nav-links' to="/"> <i className='fa-solid fa-house-user'></i> Home</Link></li>
                <li><Link className='nav-links' to="/about"> <i className='fa-solid fa-circle-info'></i>About</Link></li>
                <li><Link className='nav-links' to="/contact"> <i className='fa-solid fa-address-book'></i>Contact</Link></li>
                {
                    user?<li><Link className='nav-links' to="/login">{user}</Link></li>:<li><Link className='nav-links' to="/login"> <i className='fa-solid fa-right-to-bracket'></i>Login</Link></li>
                }
                {
                    user? <li><Link className='nav-links' to="/login" onClick={handleSignOut}> <i className='nav-links nav-links-mobile'></i>Log Out</Link></li>: <li><Link className='nav-links' to="/signup"> <i className='nav-links nav-links-mobile'></i>Sign Up</Link></li>
                }
               
               
                {/* <button>Sign Up</button> */}
            </ul>
        </nav>
     </div>
  )
}
export default Navbar