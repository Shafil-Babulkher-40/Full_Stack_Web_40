import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {

  // Function to handle addition
  const handleAdd = () => {
    let num1 = parseFloat(document.getElementById('val1').value);
    let num2 = parseFloat(document.getElementById('val2').value);
    let result = num1 + num2;
    document.getElementById('result').style.visibility = 'visible' ;
    document.getElementById('result').textContent = `result:${result}` ;
  };

  // Function to handle subtraction
  const handleSubtract = () => {
    let num1 = parseFloat(document.getElementById('val1').value);
    let num2 = parseFloat(document.getElementById('val2').value);
    let result = num1 - num2;
    document.getElementById('result').style.visibility = 'visible' ;
    document.getElementById('result').textContent = `result:${result}` ;
  };

  const handleMultiply = () => {
    let num1 = parseFloat(document.getElementById('val1').value);
    let num2 = parseFloat(document.getElementById('val2').value);
    let result = num1 * num2;
    document.getElementById('result').style.visibility = 'visible' ;
    document.getElementById('result').textContent = `result:${result}` ;
  };

  const handleDivision = () => {
    let num1 = parseFloat(document.getElementById('val1').value);
    let num2 = parseFloat(document.getElementById('val2').value);
    let result = num1 / num2;
    document.getElementById('result').style.visibility = 'visible' ;
    document.getElementById('result').textContent = `result:${result}` ;
  };

  return (
    <div className="calculator-card">
      <h2>Simple Calculator</h2>
      
      {/* Input fields for numbers */}
      <div className="input-group">
        <input type="number" placeholder="Enter first number"  id='val1' /> 
        
        <input type="number" placeholder="Enter second number" id='val2' />
      </div>

      {/* Buttons to trigger operations */}
      <div className="button-group">
        <button onClick={handleAdd} className="btn add">Add (+)</button>
        <button onClick={handleSubtract} className="btn subtract">Subtract (-)</button><br></br>
        <button onClick={handleMultiply} className="btn multiply">Multiplication (*)</button>
        <button onClick={handleDivision} className="btn division">Division (/)</button>
      </div>

      <p id='result'></p>
    </div>
  );
}

export default Calculator;