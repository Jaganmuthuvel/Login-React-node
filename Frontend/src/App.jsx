import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Sucess from './Pages/Sucess'
import Failure from './Pages/Failure'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Sucess' element={<Sucess />}></Route>
          <Route path='/Failure' element={<Failure />}></Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
