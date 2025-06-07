import Navbar from "../components/Navbar";

export default function About() {
    const customstyle = {
        width: "50rem",
        margin: "auto",
        marginTop: "20px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };
    return (
        <>
            <Navbar />
            <div className="card" style={customstyle}>
                <div className="card-body">
                    <h5 className="card-title">About Fun Text</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">by Adit Ghosh</h6>
                    <p className="card-text">This website was made with inspiration by <a href="https://www.youtube.com/@CodeWithHarry" target="_blank">Code with Harry</a>'s TextUtils project. <br/>The reason I built it was so to have a great brush up on my reactjs skills. Enjoy!</p>
                    <a href="https://github.com/adit-ghosh" target="_blank" className="card-link">My Github Profile</a>
                    {/* <a href="#" className="card-link">Another link</a> */} {/* Portfoilo website coming soon */ }
                </div>
            </div>
        </>
    )
};
