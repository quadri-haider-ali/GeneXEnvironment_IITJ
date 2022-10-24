import React from 'react'
// import '../../App.css';
import './Home.css';
import HeroSection from '../../components/HeroSection';
import Search from "./Search";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <div className="wave-seperator">
        <Search />
        <SearchBar/>
      </div>
      
      
    </React.Fragment>
  )
}

export default Home;