import Home from "./pages/Home/Home"
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "./firebase"

const App = () => {

  const navigate = useNavigate();
  
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if (user){
        console.log("User is logged in: ", user.email)
        navigate('/')
      } else{
        console.log("User is logged out")
        navigate('/login')
        // Redirect to login page here
        // history.push("/login") // or any other route you want to redirect to when the user is logged out
      }
    })
  },[])
  return (
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/player/:id" element={<Player/>}/>

      </Routes>
      
    </main>
  )
}

export default App
