import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter, Routes, Route  } from "react-router";
import ErrorPage from './pages/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
)
