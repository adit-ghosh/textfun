import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../App";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const customopacity = {
    opacity: "0"
  }
  const customsize = {
    fontSize: "20px",
  }
  const customtitle = {
    fontSize: "21px",
  }
  const navStyle = {
    background: darkMode ? "#181c24" : "#f8f9fa",
    color: darkMode ? "#f8f9fa" : "#181c24",
    transition: "background 0.3s, color 0.3s"
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid">
          <Link to="/"><img src="/logo.svg" width="40" height="40" alt="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <li className="nav-item" style={customopacity} >
              <h1 className="nav-link" style={customopacity}>Link</h1>
            </li>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ ...customtitle, color: darkMode ? "#f8f9fa" : "#181c24" }}><b>TextFun</b></Link>
              </li>
              <li className="nav-item" >
                <h1 className="nav-link" style={customopacity}>Lorem</h1>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to="/about" style={{ ...customsize, color: darkMode ? "#f8f9fa" : "#181c24" }}>About</Link>
              </li>
            </ul>
            <button
              className="btn"
              style={{
                background: darkMode ? "#23272f" : "#e2e8f0",
                color: darkMode ? "#f8f9fa" : "#181c24",
                border: "1px solid #ccc",
                borderRadius: "20px",
                fontWeight: "bold",
                padding: "6px 18px",
                marginLeft: "10px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                transition: "background 0.3s, color 0.3s",
              }}
              onClick={() => setDarkMode((d) => !d)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}