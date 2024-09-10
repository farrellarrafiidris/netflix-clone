import './Login.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import {login,signUp} from '../../firebase'
const Login = () => {

  const [signState,setSignState] = useState("Sign In")
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/; // Regex sederhana untuk validasi email
    return re.test(email);
  };
  
  const user_auth = async (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

  return (
    <div className='login'>
      <img src={logo} className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"? 
          <input type="text" placeholder='Your name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>:<></>}
          
          <input type="email" placeholder='Your email' required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Your password' required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type='submit'>
            {signState}
          </button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState==="Sign In"?  <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> : <p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
         
          
        </div>
      </div>
    </div>
  )
}

export default Login
