import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Nav from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Sidebar/>      
    </div>
  )
}

export default App
