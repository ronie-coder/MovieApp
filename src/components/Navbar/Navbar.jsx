import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import Bookings from '../Bookings/Bookings'
import { IoMdArrowRoundBack } from "react-icons/io";
const Navbar = ({allBookings, setAllBookings}) => {
  const navigate = useNavigate()
  const handlePrevious = () =>{
    navigate(-1)
  }
  return (
    <div  className='navbar'>
      <IoMdArrowRoundBack onClick={handlePrevious} color='white' size={27}/>
        <img onClick={handlePrevious} className='logoImg'  src="https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/88/72/bd/8872bd6a-3b1e-f75c-ddc3-e0208691b51d/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/256x256bb.jpg" alt="" />
        <div onClick={handlePrevious} className='logoName'>MOVIES APP</div>
        <Bookings allBookings={allBookings} setAllBookings={setAllBookings}></Bookings>
    </div>
  )
}

export default Navbar