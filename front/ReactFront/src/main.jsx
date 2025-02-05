import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Landing/Home.jsx'
import './index.sass'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
)
const root = document.getElementById("root");