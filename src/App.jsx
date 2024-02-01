
import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Moviedetails from './pages/Moviedetails/Moviedetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar/Navbar'
import Dummy from './components/Dummy'

function App() {
  const [moviesData,setMoviesData] = useState([])
  const[allBookings, setAllBookings] = useState([])
  useEffect(()=>{
      setAllBookings(JSON.parse(localStorage.getItem('session')))
      console.log(JSON.parse(localStorage.getItem('session')));
  },[localStorage,setAllBookings])
  useEffect(()=>{
    const getData = async()=>{
        try {
            const res =await axios.get("https://api.tvmaze.com/search/shows?q=all");
            setMoviesData(res.data)
            console.log(res.data);
        } catch (error) {
            
            console.log(error);
        }
    }
    getData()
},[axios])
  return (
    <Router>
      <Dummy></Dummy>
      <Navbar allBookings={allBookings} setAllBookings={setAllBookings}></Navbar>
      <Routes>
      <Route path='/' element={<Home allBookings={allBookings}/>}/>
      <Route path='/:moviename' element={<Moviedetails moviesData={moviesData} setAllBookings={setAllBookings}/>}/>
      </Routes>
    </Router>
  )
}

export default App
