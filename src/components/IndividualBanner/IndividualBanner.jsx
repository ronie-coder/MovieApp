import React from 'react'
import { MdDelete } from "react-icons/md";
import './individualbanner.css'
const IndividualBanner = ({b,allBookings,setAllBookings}) => {
    console.log(allBookings);
    var a = [];
    const handleDelete = ()=>{
        
        
        // Parse the serialized data back into an aray of objects
        a = JSON.parse(localStorage.getItem('session')) || [];
        let filter = a.filter((all)=>{
            return all.show.id != b.show.id
        })
        // Push the new data (whether it be an object or anything else) onto the array
        
        // Alert the array value
          // Should be something like [Object array]
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('session', JSON.stringify(filter));
        setAllBookings(filter)
    }
    
       
      
    
  return (
    <div className='banner'><img src={b.show.image ? b.show.image.original : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} alt=""/>{b.show.name} <MdDelete onClick={handleDelete} size={20} color='red'/></div>
  )
}

export default IndividualBanner