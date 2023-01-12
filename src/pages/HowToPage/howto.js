import logo from "../../logo.png"
import './howto.css';
import { Link } from "react-router-dom";

function HowTo() {
    return (
        <>
            <div className="htTop">
                <Link to ="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175, margin: 0, padding: 0 }} /></Link>
                <p className = "htTopText">Clicking on the logo will always take you to the home page</p>
            </div>
            <div className="rulesList">
            <ol>
                <li className="listText">On the home page click Start to begin</li>
                <li className="listText">Enter your choices in the text field and add them one at a time</li>               
                <li className="listText">The number of choices is shown to keep track of your inputs</li> 
                <li className="listText">There is a 30 character limit per choice and a limit of 10 choices</li>  
                <li className="listText">An empty input will not be accepted as a choice</li>
                <li className="listText">Clicking the clear button or reloading the page removes all the choices and sets it to 0</li> 
                <li className="listText">After adding all of your choices click Submit so I can choose what you should do</li>    
                <li className="listText">An empty or singular choice is not allowed to be submitted </li>        
                <li className="listText">After I choose a choice, you can make me choose again by clicking the Choose Again button or just reloading the page </li>
                <li className="listText">You can enter new choices on the decision page by clicking the New Choices button</li>
            </ol>
            </div>
        </>
    );
}

export default HowTo;