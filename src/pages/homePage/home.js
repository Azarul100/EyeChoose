import logo from "../../logo.png"
import ButtonComponent from "../../components/ButtonComponent";
import './home.css';
import { Link, useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate(); 


    function homeSelection()
    {
        let pathHome = "/selection/";
        navigate(pathHome);

    }

    function ruleSelection()
    {
        let pathRule = "/rules/";
        navigate(pathRule);
    }

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
                {/* <Link to="/selection"><ButtonComponent>Start</ButtonComponent></Link> */}
                <ButtonComponent onClick={homeSelection}>Start</ButtonComponent>
                <br /><br /><br />
                {/* <Link to="/rules"><ButtonComponent>How To</ButtonComponent></Link> */}
                <ButtonComponent onClick={ruleSelection}>How To</ButtonComponent>
            </div>
        </>
    );
}

export default Home;