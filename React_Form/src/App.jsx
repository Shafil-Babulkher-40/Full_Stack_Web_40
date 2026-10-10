import React from 'react'
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'

const App = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("") ;

  function saveName(e) 
  {
    setName(e.target.value);
  }

  function savePassword(e)
  {
    setPass(e.target.value);
  }

  function handleSubmit(e) 
  {
    e.preventDefault();
    if(name == "Shafil" && pass == "shafil_282")
    {
      setResult("User Loggined Successfully");
      setColor("green");
    }
    else
    {
      setResult("Incorrect User Name Or Password");
      setColor("red");
    }
  }

  return (
    <div className='container'>
      <div className='div_hadding'>
        <h1>User Login Page</h1>
      </div>
      <div className='div_form'>
        <form onSubmit={handleSubmit}>
          <div className='div_form_labels'>
            <label>Enter User Name :- </label><br></br>
            <label>Enter Password :- </label>
          </div>

          <div className='div_form_input'>
            <input type='text' value={name} onChange={saveName}/><br></br>
            <input type='password' value={pass} onChange={savePassword}/>
          </div>

          <div className='div_form_button'>
            <input type='submit' />
          </div>
        </form>
      </div>

      <div>
        <p style={ {color : color}  }> {result} </p>
      </div>
    </div>
  )
}

export default App