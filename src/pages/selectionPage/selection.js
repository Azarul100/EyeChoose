import logo from "../../logo.png"
import './selection.css';
import ButtonComponent from "../../components/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
// import { Modal, Box } from '@mui/material';

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

// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "min(600px, 90%)",
//     bgcolor: "#0B0725",
//     border: "2px solid #000",
//     boxSizing: "border-box",
//     boxShadow: 15,
//     p: 5,
// };

function refreshPage() {
    window.location.reload(false);
}

function restartID()
{
    nextId = 0;
}


function Selection() {

    const [name, setName] = useState('');
    const [choices, setChoices] = useState([]);
    const navigate = useNavigate();
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);



    return (
        <>
            <div className="topSelection">
                <Link to="/"><img onClick = {restartID} src={logo} alt="EyeChoose" style={{ width: 275, height: 175 }} /></Link>
            </div>
            <div className="selectionArea">
                <p className="selectionText">Enter your choices one at a time below so I can choose what you should do (30 character limit)</p>
                <div className="selectionMiddle">
                    <div className="selectionTextfield"><TextField value={name} onChange={e => setName(e.target.value)} rows="1" maxLength="30" placeholder="Type Here..." style={{ overflow: "hidden" }}></TextField></div>
                    <br />
                    <div className="buttonArea">
                        <button onClick={() => {
                            if (nextId === 10) {
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
                        {/* {console.log(choices[nextId - 1])} */}
                    </div>
                </div>
                <p className="choiceArea">Choices:  {nextId}   {/*{choices.map(choices => (
                    <li className="choicestext" key={choices.id}>{choices.name} </li>
                ))}*/}</p>
            </div>
            <br /><br /><br />
            <div className="selectionBottom">
                {/* <Link to = "/rules" state={nextId}><ButtonComponent>Submit</ButtonComponent></Link> */}
                <ButtonComponent onClick={() => {
                    if (nextId === 0) {
                        alert("There are no choices to choose from");
                    }
                    else if (nextId === 1) {
                        alert("There is only one choice inputted. Did you make a mistake or can you seriosuly not make a decision on one choice?")
                    }
                    else {
                        // window.location = '/rules';
                        sessionStorage.setItem("theArray", JSON.stringify(choices))
                        // console.log(JSON.stringify(choices))
                        navigate('/decide');
                        refreshPage()
                    }
                }}>Submit</ButtonComponent>
            </div>
        </>
    );
}

export default Selection;