import logo from "../../logo.png"
import './howto.css';
import { Link } from "react-router-dom";

function HowTo() {
    return (
        <>
            <div className="htTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <p className = "htTopText">Clicking on the logo will always take you to the home page</p>
                <br />
            </div>
        </>
    );
}

export default HowTo;