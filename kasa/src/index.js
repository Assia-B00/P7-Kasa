import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import A_propos from './pages/A_propos/A_propos'
import Appartment from './pages/Appartment/Appartment'
import Banner from './components/Banner'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<A_propos />} />
        <Route path="/Appartment/:id" element={<Appartment />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)