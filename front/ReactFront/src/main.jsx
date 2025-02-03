import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Lead from './component/Lead.jsx';
import Geek from './component/Geek.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="lead" element={<Lead />}/>
      <Route path="geek" element={<Geek />}/>
    </Routes>
  </BrowserRouter>
)
const root = document.getElementById("root");