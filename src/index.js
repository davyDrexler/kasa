import React from 'react'
import { createRoot } from 'react-dom/client' // Importez depuis react-dom/client
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import LogementDetail from './pages/Logement' // Importez la page des détails du logement
import Error from './components/Error'
import './styles/global.css'

// Utilisez createRoot au lieu de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Logement/:id" element={<LogementDetail />} />
        <Route path="/Logement/*" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
