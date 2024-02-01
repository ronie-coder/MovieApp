import React, { useEffect, useState } from 'react'
import './bookings.css'
import IndividualBanner from '../IndividualBanner/IndividualBanner'
import { GiCrossMark } from "react-icons/gi";
const Bookings = ({allBookings,setAllBookings}) => {
    const[bookOpen, setBookOpen] = useState(false)
    const[allBookings1,setAllBookings1] = useState(false)
    const handleBookingOpen = () =>{
        setBookOpen(!bookOpen)
    }
   
  return (
    <>
    <div onClick={handleBookingOpen} className='booking'>Bookings </div>
    <div className={bookOpen ? "bookingsContainer" : "bookingsContainer1"}>
        <div className='logoBook' style={{fontSize:"18px",fontWeight:800}}>YOUR BOOKINGS <GiCrossMark onClick={()=>setBookOpen(false)}/></div>
        <div className="bookingBannerContainer">
            {allBookings.length === 0 && <h3  style={{color:"white",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>No Bookings.</h3>}
            {allBookings?.map((b)=>(
                 <IndividualBanner b={b} allBookings={allBookings} setAllBookings={setAllBookings}></IndividualBanner>
            ))}
           
            
        </div>
    </div>
    </>
  )
}

export default Bookings