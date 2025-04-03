import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Result from './pages/Result'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-white to-green-100'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy-credits" element={<BuyCredits/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </div>
  )
}

export default App
