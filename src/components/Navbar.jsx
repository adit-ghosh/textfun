import { Link } from "react-router-dom";

export default function Navbar() {
    const customopacity = {
        opacity: "0"
    }
    const customsize = {
        fontSize: "20px",
    }
    const customtitle = {
        fontSize: "21px",
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/"><img src="/logo.svg" width="40" height="40" alt="Logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <li className="nav-item" style={customopacity} >
                            <h1 className="nav-link" style={customopacity}>Link</h1>
                        </li>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" style={customtitle}><b>TextFun</b></Link>
                            </li>
                            <li className="nav-item" >
                                <h1 className="nav-link" style={customopacity}>Lorem</h1>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link active" to="/about" style={customsize}>About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}