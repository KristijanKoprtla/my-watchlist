import batman from "./img/batman.jpg";
import { useState } from "react";

const ClanskaIskaznica = () => {
  const styles = {
    border: "1px solid black",
    borderRadius: 8,
    width: 300,
    height: 180,
    padding: 20,
    margin: 20,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-start",
    gap: 20,
  };

  const [name, SetName] = useState("");
  const [surname, SetSurname] = useState("");
  const [age, SetAge] = useState("");

  return (
      <>
      <input type="text" onChange={(event) => SetName(event.target.value)} />
      <br />
      <input type="text" onChange={(event) => SetSurname(event.target.value)} />
      <br />
      <input type="text" onChange={(event) => SetAge(event.target.value)} />
      <br />


      <div style={styles}>
        <img src={batman} alt="" />
        <div>
          <h3 style={{ marginTop: 0 }}>
            <i>SDP</i>
          </h3>
          <div>Ime: {name}</div>
          <div>Prezime: {surname}</div>
          <div>Dob: {age}</div>
        </div>
      </div>

      <br />
    </>
  );
};

export default ClanskaIskaznica;
