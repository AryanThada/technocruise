import React,{useState,useEffect,useRef} from "react";
import axios from "axios";
import './App.css';
import { FirebaseApp } from "../../../firebase";
import {onAuthStateChanged,signOut,getAuth} from "firebase/auth";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory()
  const nameRef= useRef();
  const collegeNameRef = useRef();
  const collegeCityRef = useRef()
  const phoneRef = useRef()
  const [currentUser, setCurrentUser] = useState();
  const [userData,setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  // valid === submitted 
  const [valid, setValid] = useState(false);
  const auth = getAuth(FirebaseApp());
  function logout(e) {
    e.preventDefault()
    signOut(auth).then((response)=>history.push("/home"))
  }
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user); 
  })
  
  return unsubscribe;
  },[auth])
  useEffect(()=>{
    setLoading(true)
    if(currentUser){
      axios.post("https://tosc.techkriti.org/technocruise/get-user-by-id",{firebaseuid: currentUser.uid})
      .then((response)=>{
        console.log(response.data)
        if(response.data.length!==0){
          setUser(response.data)
          setLoading(false)
          console.log(userData)
          setValid(true)
        }
        else{
          console.log("Here also")
          setLoading(false)
        }
      })
    }
  },[currentUser])
  function submit(e){
      e.preventDefault()
      setLoading(true)
      axios.post("https://tosc.techkriti.org/technocruise/post-details",{
        firebaseuid : currentUser.uid,
        name : nameRef.current.value,
        email : currentUser.email,
        collegeName: collegeNameRef.current.value,
        collegeCity: collegeCityRef.current.value,
        phone: phoneRef.current.value
      }).then((response)=>{
          alert("Details updated successfully.")
          console.log(response)
          setLoading(false)
          history.go(0)
      }).catch((err)=>{
          setLoading(false)
          console.log(err)
      })
  }

  return (
    loading?<h1 style={{marginTop:'200px',textAlign:'center'}}>Loading..</h1>:
    (currentUser===null || currentUser===undefined?<h1 style={{marginTop:'200px',textAlign:'center'}}>404! Not Found</h1>:
    (valid?
      <>
        <div className="container">
      <h1>Your Details</h1>
      <form>
        <div class="input">{userData[0].name}</div>
        <div class="input">{userData[0].email}</div>
        <div class="input">{userData[0].collegeName}</div>
        <div class="input">{userData[0].collegeCity}</div>
        <div class="input">{userData[0].phone}</div>
        <button className="btn" onClick={logout}>Logout</button>
      </form>
      {/* <img
        src="Techkriti_logo.png"
        className="logo"
        alt="hello"
      ></img> */}
    </div>
<br/><br/> </>
      :
    <>
    <div className="container">
      <h1>Your Details</h1>
      <form>
        <input name="name"  placeholder="Name" ref={nameRef}  />
        <input name="email"  placeholder="Email" defaultValue={currentUser.email}/>
        <input name="collegeName" placeholder="College Name" ref={collegeNameRef} />
        <input name="collegeCity"  placeholder="College City" ref={collegeCityRef}/>
        <input name="phoneNumber"  placeholder="Phone number" ref={phoneRef} />
        <button className="btn" type="submit" onClick={submit}> Submit details</button>
        <br />
        <button className="btn" onClick={logout}>Logout</button>
      </form>
      {/* <img
        src="Techkriti_logo.png"
        className="logo"
        alt="hello"
      ></img> */}
    </div>
<br/><br/>
  </>
  )))
}

export default App;
