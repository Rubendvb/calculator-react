import styled from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#333",
  buttonColor: "#efefef",
};

export const darkTheme = {
  fontColor: "#ffffff",
  body: "#2f2a3a",
  buttonColor: "2f2a3a",
};

export const Main = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 259px;
  text-align: center;
  border: 10px solid #101116;
  height: 600px;
  border-radius: 5px;
  background: ${(props) => props.theme.body};
`;

export const Button = styled.button`
  margin: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.fontColor};
  font-weight: 500;
`;

export const Form = styled.form`
  input {
    height: 30px;
    width: 214px;
    border: 0px;
    text-align: right;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 75px;
    margin-left: -10px;
    color: ${(props) => props.theme.fontColor};
    background: ${(props) => props.theme.body};
  }

  input + input {
    font-size: 10px;
    color: #7d5dff;
    height: 15px;
    margin-bottom: 25px;
    margin-top: 0px;
  }
`;

export const Keypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
`;

export const ClearButton = styled.button`
  font-size: 20px;
  grid-column: 1/3;
  grid-row: 1;
  color: #7d5dff;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => props.theme.body};
`;

export const EqualButton = styled.button`
  grid-column: 4/5;
  grid-row: 5;
  color: #7d5dff;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => props.theme.buttonColor};
`;

export const BackspaceButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  margin: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => props.theme.buttonColor};
`;

export const ButtonFun = styled(Button)`
  background: #efefef;
  color: #000;
`;
