import React, { useEffect, useState } from 'react'
import './moviedetails.css'
import { useParams } from 'react-router-dom'
import parse from  'html-react-parser'
import axios from 'axios';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const parser = new DOMParser()
import { RxCross1 } from "react-icons/rx";
import Navbar from '../../components/Navbar/Navbar';
const Moviedetails = ({moviesData,setAllBookings}) => {
  const[name, setName] = useState("")
  const[email,setEmail] = useState("")
  const[formOpen, setFormOpen] = useState(false)
   console.log(moviesData);
   const[success, setSuccess] = useState(false)
    const {moviename} = useParams();
    const one = moviesData.find((e)=>{
      return e.show.id == moviename
    })
    const handleFormSubmit = (one)=>{
      handleBook(one)
    }
    const handleBook = (one) =>{
      var a = [];
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem('session')) || [];
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(one);
      // Alert the array value
      
      // Re-serialize the array back into a string and store it in localStorage
      localStorage.setItem('session', JSON.stringify(a));
      setAllBookings(a)
      setFormOpen(false);
      setSuccess(true)
    }
    console.log(one);
    
  return (
   
    <>
   
     <div className="container">
        <div className="detailsImg">
    <img src={one.show.image ? one.show.image.original : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} alt="Movie Image" className="movie-image"/></div>
    <div className="movie-details">
      <h1 className="movie-name">{one.show.name}</h1>
      <div className="rating-and-book">
        <div className="movie-rating">Rating: <span>{one.show.rating.average ? one.show.rating.average : "NA"}/10</span></div>
        <button onClick={()=>{setFormOpen(true)}} className="book-button">Book Now</button> {success && <IoCheckmarkDoneCircleSharp style={{marginLeft:"15px"}} size={30} color='lightgreen'/>}
      </div>
      <div className="descCon">
      <div className="movie-description">{parse(one.show.summary)}</div>
      </div>
    </div>
    <div className="formPopUp">
      {formOpen &&  <div class="form">
      <div class="title">Book A Show. <RxCross1 onClick={()=>setFormOpen(false)} size={20} color='red'/></div>
      <div class="subtitle">Fill up the details.</div>
      <div class="input-container ic1">
        <input disabled value={one.show.name} id="firstname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Movie name</label>
      </div>
      <div class="input-container ic2">
        <input onChange={(e)=>setName(e.target.value)} id="lastname" class="input" type="text" placeholder=" " />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">User name</label>
      </div>
      <div class="input-container ic2">
        <input onChange={(e)=>setEmail(e.target.value)} id="email" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <button onClick={()=>handleFormSubmit(one)} type="text" class="submit">submit</button>
    </div>}
   
  </div>
  </div>
  </>
  )
}

export default Moviedetails