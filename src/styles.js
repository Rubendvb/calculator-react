import styled from "styled-components";

export const Main = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 256px;
  text-align: center;
  border: none;
  background: #2f2c3b;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #2f2c3b;
  color: #ffffff;
  font-weight: 500;
`;

export const Form = styled.form`
  input {
    height: 30px;
    width: 214px;
    background: #24202e;
    border: 0px;
    text-align: right;
    font-size: 35px;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 75px;
    margin-left: -10px;
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