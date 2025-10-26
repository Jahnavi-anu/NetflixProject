import React from 'react'
import Home from './Pages/Home/Home.jsx'
import {Routes,Route,Navigate} from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'
const App = () => 
  {
  return (
    
    <div>
      <Routes>
          {/* ✅ Default route — when app opens, go to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* / means Home */}
         <Route  path='/login' element={ <Login />}  />
        <Route  path='/home' element={ <Home />}  />
       
      </Routes>
     
    </div>
  ) 
}

export default App