import React from 'react'
// import '../../App.css';
import './Home.css';
import HeroSection from '../../components/HeroSection';
import Search from "./Search";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <div className="wave-seperator">
        <Search />
        
      </div>
      
      
    </React.Fragment>
  )
}

export default Home;