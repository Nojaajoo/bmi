import React, {useState} from "react";
import './App.css';

export default function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const bodyMassIndex = (weight / (height * height)).toFixed(2);
   
    setBmi(bodyMassIndex);
  }

  return (
    <form class="bmi" onSubmit={handleSubmit}>
      <h2>Calculating Body Mass Index</h2>
      <div>
        <label>Height</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div>
      <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <output>{bmi}</output>
      </div>
      <button>Calculate</button>
    </form>
  )
}