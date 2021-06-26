import React, { useState } from "react";
import "./App.css";
import { Main, Button, Form, Keypad, ButtonHighlight } from "./styles";

function App() {
  const [result, setResult] = useState("52121");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1)); // Ou somente -1
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <Main>
        <Form>
          <input type="text" value={result} />
        </Form>

        <Keypad>
          <ButtonHighlight onClick={clear} id="clear">
            AC
          </ButtonHighlight>
          <ButtonHighlight onClick={backspace} id="backspace">
            C
          </ButtonHighlight>
          <ButtonHighlight name="/" onClick={handleClick}>
            &divide;
          </ButtonHighlight>
          <Button name="7" onClick={handleClick}>
            7
          </Button>
          <Button name="8" onClick={handleClick}>
            8
          </Button>
          <Button name="9" onClick={handleClick}>
            9
          </Button>
          <ButtonHighlight name="*" onClick={handleClick}>
            &times;
          </ButtonHighlight>
          <Button name="4" onClick={handleClick}>
            4
          </Button>
          <Button name="5" onClick={handleClick}>
            5
          </Button>
          <Button name="6" onClick={handleClick}>
            6
          </Button>
          <ButtonHighlight name="-" onClick={handleClick}>
            &ndash;
          </ButtonHighlight>
          <Button name="1" onClick={handleClick}>
            1
          </Button>
          <Button name="2" onClick={handleClick}>
            2
          </Button>
          <Button name="3" onClick={handleClick}>
            3
          </Button>
          <ButtonHighlight name="+" onClick={handleClick}>
            +
          </ButtonHighlight>
          <Button name="0" onClick={handleClick}>
            0
          </Button>
          <Button name="." onClick={handleClick}>
            .
          </Button>
          <ButtonHighlight onClick={calculate} id="result">
            =
          </ButtonHighlight>
        </Keypad>
      </Main>
    </>
  );
}

export default App;
