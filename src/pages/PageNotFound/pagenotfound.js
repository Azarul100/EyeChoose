import logo from "../../logo.png"
// import './howto.css';
import "./pagenotfound.css"
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <div className="pnfTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: "70vw", height: "40vw", margin: 0, padding: 0 }} /></Link>
                <p className = "pnfText">Page Not Found! Click above to go to the home page</p>
                <br />
            </div>
        </>
    );
}

export default PageNotFound;