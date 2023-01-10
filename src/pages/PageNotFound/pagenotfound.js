import logo from "../../logo.png"
// import './howto.css';
import "./pagenotfound.css"
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <div className="pnfTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <p className = "htTopText">Test</p>
                <br />
            </div>
        </>
    );
}

export default PageNotFound;