import logo from "../../logo.png"
import './decide.css';
import { Link } from "react-router-dom";

function decide() {
    return (
        <>
            <div className="dTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <br />
                
            </div>
        </>
    );
}

export default decide;