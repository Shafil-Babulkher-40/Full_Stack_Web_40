import React from 'react';
import Calculator from './components/Calculator'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My React App</h1><br></br>
        <p>Welcome! Try out the calculator component below.</p>
      </header>
      
      {/* Calling the Calculator component */}
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;