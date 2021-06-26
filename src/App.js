import React, { useState } from "react";
import {
  Main,
  Button,
  Form,
  Keypad,
  ClearButton,
  BackspaceButton,
  EqualButton,
  lightTheme,
  darkTheme,
  ButtonFun,
} from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = (e) => {
    // setResult(result.concat(e.target.name));
    setOperation(operation.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
    setOperation("");
  };

  const backspace = () => {
    // setResult(result.slice(0, result.length - 1)); // Ou somente -1
    setOperation(operation.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Main>
        <Form>
          <input type="text" value={result} />
          <input type="text" value={operation} />
        </Form>

        <Keypad>
          <ClearButton onClick={clear} id>
            AC
          </ClearButton>
          <BackspaceButton onClick={backspace} id="backspace">
            C
          </BackspaceButton>
          <ButtonFun name="/" onClick={handleClick}>
            &divide;
          </ButtonFun>
          <Button name="7" onClick={handleClick}>
            7
          </Button>
          <Button name="8" onClick={handleClick}>
            8
          </Button>
          <ButtonFun name="9" onClick={handleClick}>
            9
          </ButtonFun>
          <ButtonFun name="*" onClick={handleClick}>
            &times;
          </ButtonFun>
          <Button name="4" onClick={handleClick}>
            4
          </Button>
          <Button name="5" onClick={handleClick}>
            5
          </Button>
          <Button name="6" onClick={handleClick}>
            6
          </Button>
          <ButtonFun name="-" onClick={handleClick}>
            &ndash;
          </ButtonFun>
          <Button name="1" onClick={handleClick}>
            1
          </Button>
          <Button name="2" onClick={handleClick}>
            2
          </Button>
          <Button name="3" onClick={handleClick}>
            3
          </Button>
          <ButtonFun name="+" onClick={handleClick}>
            +
          </ButtonFun>
          <Button name="0" onClick={handleClick}>
            0
          </Button>
          <Button name="." onClick={handleClick}>
            .
          </Button>
          <Button onClick={themeToggler}></Button>
          <EqualButton onClick={calculate} id="result">
            =
          </EqualButton>
        </Keypad>
      </Main>
    </ThemeProvider>
  );
}

export default App;
