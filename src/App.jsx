import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import RandomUser from './Components/RandomUser/RandomUser'
import RandomJokes from './Components/RandomJokes/RandomJokes'
import CatsListing from './Components/CatsListing/CatsListing'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/random-user"/>}></Route>
        <Route path='/random-user' element={<RandomUser/>}></Route>
        <Route path="/random-jokes" element={<RandomJokes />} />
        <Route path="/cats-listing" element={<CatsListing />} />
      </Routes>
    </Router>
  )
}

export default App