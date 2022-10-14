import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles.css"
export default function CarouselNode(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <div className="carousel-card">
      
        <img src={props.imgurl} alt="city_image" />
        <Button
           onClick={handleShow}>Click here for Details</Button><br/>
          {props.city}
        <br />
          {props.state}
        <br />
        
    </div>
    <Modal show={show} onHide={handleClose}>
        <div className="modal-data" >
          <div className='organizer'>
            <div style={{fontSize:'1rem',paddingTop:'50px'}}> <strong>Organiser Details</strong></div>
            <br></br>
            {props.organizer}<br/>
            {props.number}
            <div style={{fontSize:'1rem',paddingTop:'50px'}}><a href={props.link} target="_blank"><button className='button-32'>Register</button></a></div>
          
          </div>
          
          <div className='others'>
            <strong>Location : </strong> {props.city}, {props.state}<br/>
            <strong>College: </strong> {props.college}<br/><br/>
            <strong>Day 1 </strong> <br/>
            <strong> Date: </strong> {props.topic1date}<br/>
            <strong>Workshop: </strong> {props.topic1name}<br/><br/>
            <strong>Day 2 </strong> <br/>
            <strong> Date: </strong> {props.topic2date}<br/>
            <strong>Workshop: </strong> {props.topic2name}

          </div>
        </div>
      </Modal>
    </>
  )
}
