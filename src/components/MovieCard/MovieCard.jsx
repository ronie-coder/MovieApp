import React from 'react'
import './moviecard.css'
import { Link, useNavigate } from 'react-router-dom'
const MovieCard = ({m}) => {
    
const navigate = useNavigate() 
const handleClick = (score)=>{
    navigate(`/${score}`)
}
   
  return (
    <div className='moviecard'>
        <img className='movie-card-Image' src={m.show.image ? m.show.image.original : "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} alt="image" />
        <div className='movie-card-name'>{m.show.name}<div className='IMDB_REATING'>IMDB RATING : {m.show.rating.average ? m.show.rating.average : "NA"}⭐</div></div>
        <div className='movie-card-genre'>{m.show.genres.map((g)=>(
            g+"/"
        ))}</div>
        <div className='movie-card-language'>Language: {m.show.language}</div>
        <div onClick={()=>handleClick(m.show.id)} className='buttonContainer'><button className='moviecardbutton'>Details</button></div>
    </div>
  )
}

export default MovieCard