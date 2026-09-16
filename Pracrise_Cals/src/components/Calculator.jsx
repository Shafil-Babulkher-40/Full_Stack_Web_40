import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  // State to store the input numbers and the result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle addition
  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  // Function to handle subtraction
  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div className="calculator-card">
      <h2>Simple Calculator</h2>
      
      {/* Input fields for numbers */}
      <div className="input-group">
        <input 
          type="number" 
          placeholder="Enter first number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Enter second number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
        />
      </div>

      {/* Buttons to trigger operations */}
      <div className="button-group">
        <button onClick={handleAdd} className="btn add">Add (+)</button>
        <button onClick={handleSubtract} className="btn subtract">Subtract (-)</button>
      </div>

      {/* Displaying the result */}
      {result !== null && (
        <div className="result-box">
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculator;