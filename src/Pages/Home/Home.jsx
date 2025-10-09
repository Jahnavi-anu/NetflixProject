import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer  from '../../Components/Footer/Footer.jsx'
import HeroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards  from '../../Components/TitleCards/TitleCards.jsx'
    //  ./ current Folder 
    //  .. one folder up
    //  ../.. two folders up(go up two levels from the current folder)

 const Home = () => {
  return (
   
    <div className="home">

        <Navbar />
        <div className="Hero">
          <img src={HeroBanner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={heroTitle} alt="" className='caption-img'/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eligendi accusantium </p>
            <div className="heroBtns">
                <button className='btn'><img src={play_icon} alt="" />play</button>
                 <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
            </div>
            <TitleCards />
          </div>
        </div>
        <div className="more-cards">
             <TitleCards title={"Blockbuster Movies"}/>
             <TitleCards title={"Only on Netflix"} />
             <TitleCards title={"Upcomimg"}/>
             <TitleCards title={"Top pics for You"}/>
        </div>
        <Footer />
    </div>
    
  
  )
}
export default Home;