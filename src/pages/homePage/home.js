import logo from "../../logo.png"
import ButtonComponent from "../../components/ButtonComponent";
import './home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="Top">
                <img src={logo} alt="EyeChoose" className="imageHome" />
                <br />
                <div className="containerSlogan">
                    <div className="sloganArea"><p className='slogan'>Are you indecisive? Ask me instead and I choose what you should do because I can </p></div>
                </div>
            </div>
            <div className='middle'>
                <Link to="selection"><ButtonComponent>Start</ButtonComponent></Link>
                <br /><br /><br />
                <Link to="rules"><ButtonComponent>How To</ButtonComponent></Link>
            </div>
        </>
    );
}

export default Home;