import styled from "styled-components";

const ButtonComponent = styled.button`
  color: black;
  background-color: white;
  border: 3px solid black;;
  height: 50px;
  width: 150px;
  border-radius: 12px;
  transition: font-size 500ms ease, height 500ms ease, width 500ms ease, border 500ms ease, box-shadow 500ms ease, border-radius 500ms ease;
  ${'' /* font-family: "Poppins"; */}
  font-family: Trebuchet MS, sans-serif	;
  font-size: 30px;
  font-weight: bold;
  &:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  font-size: 34px;
  height: 55px;
  width: 155px;
  border-radius: 25px;
  border: 4px solid black;;
  }

  @media (max-width: 1220px)
  {
    height: 40px;
    width: 120px;
    font-size: 22px;
    transition: font-size 500ms ease, height 500ms ease, width 500ms ease, border 500ms ease, box-shadow 500ms ease, border-radius 500ms ease;


    &:hover 
    {
      height: 45px;
      width: 125px;
      font-size: 27px;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      border-radius: 25px;
      border: 3px solid black;;
    }

  @media (max-width: 500px)
  {
    height: 38px;
    width: 115xpx;
    font-size: 18px;
    transition: font-size 500ms ease, height 500ms ease, width 500ms ease, border 500ms ease, box-shadow 500ms ease, border-radius 500ms ease;


    &:hover 
    {
      height: 40px;
      width: 120px;
      font-size: 22px;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      border-radius: 25px;
      border: 3px solid black;;
    }

  }
`;

export default ButtonComponent; 