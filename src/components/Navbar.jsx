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
                    <a href=""><img src="/logo.svg" width="40" height="40" alt="Logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <li className="nav-item" style={customopacity} >
                            <a className="nav-link" href="#" style={customopacity}>Link</a>
                        </li>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" style={customtitle}><b>TextFun</b></a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" href="#" style={customopacity}>Lorem</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link active" href="#" style={customsize}>About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}