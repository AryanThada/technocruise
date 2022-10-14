import React, { useState ,useEffect} from "react";
import "./styles.css";
import logo from "./logo.json"
import Lottie from "lottie-react"
import { FirebaseApp } from "../../firebase";
import {onAuthStateChanged,signOut,getAuth} from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const auth = getAuth(FirebaseApp());
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user); 
  })
  return unsubscribe;
  },[auth])
  return (
    
      <div id="navbar">
      <Lottie animationData={logo} style={{width:"360px", height:"45px", marginLeft:"10px"}}  />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/Sponsors">Sponsors</a>
        <a href="/cities">Cities</a>
        <a href="/contact">Contact Us</a>
        {currentUser?<a href="/Forms">Dashboard</a>:null}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      </div>
      
   
    

    
  );
};
export default Navbar;
