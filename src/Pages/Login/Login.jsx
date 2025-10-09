
import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/logo.png'
const Login =()=>{
    const [signState , setSignState] = useState("Sign In")
    
    function ChangeState(){
        setSignState("Sign Up");
    }
    return (
      
        <div className="Login">
           
               <img src={logo} className="loginlogo" alt="" /> 
               <div className="login-form">
               <h1>{signState} </h1>
               <form action="">
                     {signState === "Sign Up" ?  <input type="text" placeholder="Your Name" />:<></>}
                   
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="fomr-switch">
                   {signState === "Sign In" ? <p>New to Netflix? <span onClick={ChangeState}>Sing Up Now</span></p> :  <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sing In Now</span></p>}
                   
                </div>
                </div>
               </div>
              
        
       
    )
      
};
export default Login;