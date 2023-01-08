import logo from "../../logo.png"
import './decide.css';
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";


///Add Page Not Found 


function decide() {
    var sessionString = sessionStorage.getItem("theArray");
    var choiceArray = JSON.parse(sessionString)
    let choiceName = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    // console.log(testss)
    // let choiceName = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    // console.log(choiceName.name)

    function chooseChoice() {
        // choiceName = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        // console.log(choiceName.name);
        // return choiceName;
        window.location.reload(false);

    }

    return (
        <>
            <div className="dTop">
                <Link to="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <br />
            </div>
            <div className="dMiddle">
                <div className="containerText">
                <div className="textArea"><p className="choosingText">I choose {choiceName.name}</p></div>
                </div>
                <div className="buttonsArea">
                    <ButtonComponent onClick={chooseChoice}>Choose Again</ButtonComponent>
                    <Link to = "/selection"><ButtonComponent>Add New Choices</ButtonComponent></Link>
                </div>
            </div>
        </>
    );
}

export default decide;