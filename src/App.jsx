import './App.css'
import { Routes ,Route , Router , BrowserRouter} from "react-router-dom"
import Home from "./components/Home"
import UserLoginPage  from './components/Users/UserLoginPage'
import DriverLoginPage from "./components/Drivers/DriverLoginPage"

import Admin from "./components/Admin/Admin"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path='user' element={<UserLoginPage/>}/>
        <Route path='driver' element = {<DriverLoginPage/>}/>
        <Route path='admin' element={<Admin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
