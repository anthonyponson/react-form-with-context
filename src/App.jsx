import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Form from './Form'
import { stateContext } from './Context'

const App = () => {
  return (
    <>
      <stateContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </BrowserRouter>
      </stateContext.Provider>
    </>
  )
}

export default App
