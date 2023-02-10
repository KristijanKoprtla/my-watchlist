import { useState } from "react";

const ReactStates = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const [num, setNum] = useState(0);

  const [fullName, setfullName] = useState("");
  const [numberSquare, setNumberSquare] = useState(0);
  const [inputNumber, setInputNumber] = useState(0);

  //napraviti funkciju koja vraca kvadrat broja upisanog broja
      const squareNumber = (e) => {
        const value = e.target.value;
        const valueSquared = value**2

        setInputNumber(value);
        setNumberSquare(valueSquared);
      }
  return (
    <>

      <input type="text" onChange={(squareNumber)}/>
      <h2>kvadrat broja {inputNumber} je {numberSquare}</h2>

      <h1 onMouseOver={() => setNum(num + 1)}>react states</h1>
      <h2>Presao sam {num} puta</h2>

      <input
        type="text"
        onChange={(event) => setfullName(event.target.value)}
      />
      <h2>{fullName}</h2>
      <div>
        <u>{number}</u>
      </div>
      <button onClick={increment}>Plus by 1</button>
      <button onClick={() => setNumber(number + 2)}>Uvecaj za 2</button>
      <button onClick={() => setNumber(number - 1)}>Smanji za 1</button>
      <button onClick={() => setNumber(0)}>Restart button</button>

      

    </>
  );
};

export default ReactStates;
