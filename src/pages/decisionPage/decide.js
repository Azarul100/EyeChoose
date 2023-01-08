import logo from "../../logo.png"
import './decide.css';
import { Link } from "react-router-dom";




function decide() {
    var sessionString = sessionStorage.getItem("theArray");
    var testss = JSON.parse(sessionString)
    console.log(testss)
    let show = testss[Math.floor(Math.random() * testss.length)];
    console.log(show.name)

    return (
        <>
            <div className="dTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <br />
                <p>{show.name}</p>
            </div>
        </>
    );
}

export default decide;