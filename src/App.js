import { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Button from "./Components/Button";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [finalValue, setFinalValue] = useState();

  // const increment = () => {
  //   setNum(num + 1);
  // }

  // const decrement = () => {
  //   setNum(num - 1);
  // }

  const textChangeHandler = (event) => {

    console.log(event);

    setNum1(event.target.value);
  }

  const text2ChangeHandler = (event) => {
    console.log(event);

    setNum2(event.target.value);
  }

  const powerOfNum = (e) => {
    console.log("helo");
    console.log(num1);
    console.log(num2);

    console.log(typeof num1);
    console.log(typeof num2);


    setFinalValue(num1 ** num2);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>{num}</p> */}
        {/* <Button symbol="+" functionName={increment} /> */}
        {/* <Button symbol="-" functionName={decrement} /> */}
        <input
          type="text"
          value={num1}
          onChange={textChangeHandler}
          name="num1"
        />
        <input
          type="text"
          value={num2}
          onChange={text2ChangeHandler}
          name="num2"
        />
        <Button symbol="Power" functionName={powerOfNum} />
        <p>{finalValue}</p>
      </header>
    </div>
  );
}

export default App;
