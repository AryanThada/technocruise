import React,{useState} from "react";
import axios from "axios";
import './App.css';
// const { body, validationResult } = require('express-validator');


function App() {
  const [input, setInput] = useState({
    name: '',
    email:'',
    collegeName:'',
    collegeCity:'',
    phoneNumber:''
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(preInput => {
      return {
        ...preInput,
        [name]: value
      }
    })
  }
  // const errors = validationResult();
  
  function handleClick(event) {
    event.preventDefault();
    const Formnote = {
      name: input.name,
      email: input.email,
      collegeName: input.collegeName,
      collegeCity: input.collegeCity,
      phoneNumber: input.phoneNumber

    }

    axios.post('http://localhost:3001/App', Formnote);
    console.log(input);
    // if(!errors.isEmpty()){
      // alert("Please enter valid data");
    // }else{
      alert("Your Data has been Updated Successfully");
    // }
    
  }
  return (
    <>
    <div className="container">
      <h1>Your Details</h1>
      <form>
        <input name="name" onChange={handleChange} placeholder="Name"  />
        <input name="email" onChange={handleChange} placeholder="Email" />
        <input name="collegeName" onChange={handleChange} placeholder="College Name" />
        <input name="collegeCity" onChange={handleChange} placeholder="College City" />
        <input name="phoneNumber" onChange={handleChange} placeholder="Phone number" />
        <button className="btn" type="submit" onClick={handleClick} >Update Details</button>
        <br />
        <button className="btn">Logout</button>
      </form>
      <img
        src="techkriti.svg"
        className="logo"
        alt="hello"
      ></img>
    </div>
  </>
  );
}

export default App;
