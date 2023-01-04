import logo from "../../logo.png"
import './selection.css';
import ButtonComponent from "../../components/ButtonComponent";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";

let nextId = 0;

export const TextField = styled.textarea`
  width: 360px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid black;
  ${'' /* border: none; */}
  ${'' /* outline: none; */}
  padding: 10px 15px;
  font-size: 23px;
  font-family: "Poppins";
  box-sizing: border-box;
  font-weight: "bold";
  transition: width 1000ms ease, height 1000ms ease, font-size 750ms ease;
  resize: none;
  &:focus {
    ${'' /* box-shadow: 5px 5px 0px 2px #4930ff; */}
    height: 60px;
    width: 450px;
    ${'' /* transform: translateY(5px); */}
    font-size: 30px;
  }
`;

function refreshPage() {
    window.location.reload(false);
  }


function Selection() {

    const [name, setName] = useState('');
    const [choices, setChoices] = useState([]);

    return (
        <>
            <div className="topSelection">
                <Link to="/"><img src={logo} alt="EyeChoose" style={{ width: 275, height: 175 }} /></Link>
            </div>
            <div className="selectionArea">
                <p className="selectionText">Enter your choices one at a time below so I can choose what you should do (30 character limit)</p>
                <div className="selectionMiddle">
                    <div className="selectionTextfield"><TextField value={name} onChange={e => setName(e.target.value)} rows="1" maxLength="30" placeholder="Type Here..." style={{ overflow: "hidden" }}></TextField></div>
                    <br />
                    <div className="buttonArea">
                    <button onClick={() => {
                        if (nextId === 10)
                        {
                            alert("Limit reached");
                        }
                        else if (name === "") {
                            alert("Please enter in a choice");
                        }
                        else {
                            setName('');
                            setChoices([
                                ...choices,
                                { id: nextId++, name: name }
                            ]);
                            
                        }
                    }} className="addButton"><span>Add</span></button>
                    <button className="addButton" onClick={refreshPage}>Clear</button>
                    </div>
                </div>
                <p className="choiceArea">Choices:  {nextId}   {/*{choices.map(choices => (
                    <li className="choicestext" key={choices.id}>{choices.name} </li>
                ))}*/}</p>
            </div>
            <br /><br /><br />
            <div className="selectionBottom">
                <Link to = "/rules" state={nextId}><ButtonComponent>Submit</ButtonComponent></Link>
            </div>
        </>
    );
}

export default Selection;