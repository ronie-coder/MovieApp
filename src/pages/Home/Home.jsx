import React from 'react'
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroText from '../../components/HeroText/HeroText'
import MoviesCardContainer from '../../components/AllMoviesCardContainer/MoviesCardContainer'
const Home = () => {
  return (
    <div className='home'>
        
        <HeroText></HeroText>
        <MoviesCardContainer></MoviesCardContainer>
    </div>
  )
}

export default Home