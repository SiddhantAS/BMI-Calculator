import { useState } from "react";
import "./Cal.css";

export default function Calculator() {
  const [bmi, Setbmi] = useState("");
  const [Weight, Setweight] = useState("");
  const [height, Setheight] = useState("");
  const reload = () => {
    Setweight("");
    Setheight("");
    Setbmi("");
  };

  const calculate = () => {
    let cal = Weight / height;
    Setbmi(cal);
  };

  return (
    <div className="container">
      <div className="innercontainer">
        <h1>BMI Calculator</h1>
        <label>Weight (Kg)</label>
        <br />
        <input
          type="number"
          value={Weight}
          placeholder="Enter Weight value"
          onChange={(e) => Setweight(e.target.value)}
        />
        <br />
        <label>Height (In)</label>
        <br />
        <input
          type="number"
          value={height}
          placeholder="Enter Height value"
          onChange={(e) => Setheight(e.target.value)}
        />
        <br />
        <button className="btn1" onClick={calculate}>
          Submit
        </button>
        <br />
        <button className="btn2" onClick={reload}>
          Reload
        </button>
        <br />
        <h2>Your BMI is: {bmi}</h2>
      </div>
    </div>
  );
}
