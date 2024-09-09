import Home from "./pages/Home/Home"
import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login"

const App = () => {
  return (
    <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/> 
      </Routes>
      
    </main>
  )
}

export default App
