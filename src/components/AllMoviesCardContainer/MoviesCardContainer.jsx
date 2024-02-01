import React, { useEffect, useState } from 'react'
import './cardcontainer.css'
import MovieCard from '../MovieCard/MovieCard'
import axios from 'axios'
import HeroText from '../HeroText/HeroText'
const MoviesCardContainer = () => {
    const [moviesData, setMoviesData] = useState([])
    const [error,setError] = useState(false)
    useEffect(()=>{
        const getData = async()=>{
            try {
                const res =await axios.get("https://api.tvmaze.com/search/shows?q=all");
                setMoviesData(res.data)
                console.log(res.data);
            } catch (error) {
                setError(true)
                console.log(error);
            }
        }
        getData()
    },[])
  return (
    <div className='cardsContainer'>
        <HeroText></HeroText>
        {moviesData.map((m)=>(
            <MovieCard  m={m}></MovieCard>
        ))}
        
       
    </div>
  )
}

export default MoviesCardContainer