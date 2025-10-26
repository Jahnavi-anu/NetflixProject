
import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/logo.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Login =()=>{
    const [signState , setSignState] = useState("Sign In")
    const [form,setForm] = useState({name:"",email:"" ,password:""});
   const navigate = useNavigate();
   const handleChnage=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
   }
   
   const handleSubmit = async(e)=>{
    e.preventDefault();
    const url = signState === "Sign Up" ? "http://localhost:3000/api/auth/signup"
    :"http://localhost:3000/api/auth/login";
    
    try{
        const {data} = await axios.post(url, form,{withCredentials:true});
        alert(data.message);
        if(data.message === "Signup successful" || data.message === "Login successful")
            {
                localStorage.setItem("isLoggedIn","true");
                    navigate("/home");
            }
    }catch(err)
     {
        alert(err.response?.data?.message || "Error occurred");
     }
   };
    // function ChangeState(){
    //     setSignState("Sign Up");
    // }
    return (
      
        <div className="Login">
           
               <img src={logo} className="loginlogo" alt="" /> 
               <div className="login-form">
               <h1>{signState} </h1>
               <form  onSubmit={handleSubmit}>
                     {signState === "Sign Up" &&   
                     (<input 
                     type="text"
                     name="name" 
                     placeholder="Your Name" 
                     onChange={handleChnage}
                     />
                    ) }
                   
                    <input type="email" 
                            name="email"
                           placeholder="Email" 
                           onChange={handleChnage} 
                    />
                    <input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    onChange={handleChnage}
                     />
                    <button>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                   {signState === "Sign In" ? <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sing Up Now</span></p> :  <p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sing In Now</span></p>}
                   
                </div>
                </div>
               </div>
              
        
       
    )
      
};
export default Login;