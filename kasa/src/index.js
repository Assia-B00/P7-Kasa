import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import A_propos from './pages/A_propos/A_propos'
import Appartment from './pages/Appartment/Appartment'
import Error_page from './pages/Error_page/Error_page'
import Banner from './components/Banner'
import "@fontsource/montserrat";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error_page />} />
        <Route path="/A_propos" element={<A_propos />} errorElement={<Error_page />} />
        <Route path="/Appartment/:id" element={<Appartment />} errorElement={<Error_page />}/>
        <Route path="/Error_page" element={<Error_page />} />
        <Route path="*" element={<Error_page />} errorElement={<Error_page />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
