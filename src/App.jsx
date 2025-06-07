import About from './pages/About'
import Index from './pages/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect, createContext } from 'react'

// Create a context for dark mode
export const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("textfun-darkmode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("textfun-darkmode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.style.background = "#181c24";
      document.body.style.color = "#f8f9fa";
    } else {
      document.body.style.background = "#fff";
      document.body.style.color = "#181c24";
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </DarkModeContext.Provider>
  )
}

export default App
