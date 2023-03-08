import { BrowserRouter, Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <Header />
      <Navbar />
    </div>
  )
}

export default App
