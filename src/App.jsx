import { Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './pages/About'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'

export default function App() {

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
