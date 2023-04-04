import React from 'react'
import { BrowserRouter,Navigation,Routes, Route,  } from "react-router-dom"; 
import Home from './pages/Home'
import Login from './pages/Login'
import Registrar from './pages/Registrar'
import ListaPaciente from './pages/ListaPaciente'


const App = () => {

  

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/registrar" element={<Registrar></Registrar>}></Route>
                <Route path="/lista" element={<ListaPaciente></ListaPaciente>}></Route>
            </Routes>
       </BrowserRouter>
      )
}

export default App