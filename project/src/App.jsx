import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './Todo'
import { Route, Routes } from 'react-router-dom'
import Form from './Form'
import FetchData from './FetchData'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/FetchData" element={<FetchData/>}/>
        <Route path="/Todo" element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App
