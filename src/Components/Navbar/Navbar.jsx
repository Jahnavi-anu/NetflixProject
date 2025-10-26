import React, { useState ,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [searchToggle , setSearchToggle] = useState("false")

  function toggleState(){
     setSearchToggle(prevtoggle => !prevtoggle)
  }
  useEffect(()=>{
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  },[]);
  const handleLogout = async()=>{
    try{
      await fetch("http://localhost:3000/api/auth/logout",{
        method:"POST",
        credentials:"include",
      });
    }catch(err){
      console.error("Logout error:",err);
    }

    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
            <div className="navbar">
              <div className="navbar-left">
                    <img src={logo} alt="" />
                    <ul>
                            <li>Home</li>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>New & Popular</li>
                            <li>My List</li>
                            <li>Browse by Languages</li>
                    </ul>
              </div>
              <div className="navbar-right">
                   {searchToggle ?<input type="text"  className='searchbar'/>:null}
                     <img src={search} className='icons' onClick={toggleState} />
                     <p>Children</p>
                     <img src={bell_icon} className='icons'  />

                     <div className="navbar-profile">
                      <img src={profile_icon} className='profile'  />
                      <img src={caret_icon} alt="" className='dropProfile' />
                      <div className="dropdown">
                         {isLoggedIn ?(<button onClick={handleLogout}>Logout</button>) : <button onClick={()=>navigate("/login")}>Sign Up Of Netflix</button>}
                      </div>
                     </div>
              </div>
            </div>
  )
}

export default Navbar