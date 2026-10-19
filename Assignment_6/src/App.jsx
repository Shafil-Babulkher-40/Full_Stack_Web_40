import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css' ;

const App = () => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate() ;
  
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

    if(name == "shafil" && pass == "shafil_282")
    {
      navigate('/pass')  ;  
    }
    else
    {
      navigate('/fail');
    }
  }

  return (
      <div className='container-main'>

        <div className='div_hadding'>
          <h1>User Login Page</h1>
        </div>

        <div className='div_form'>

          <form onSubmit={handleSubmit}>

            <div className='form-grid'>
              <div className='div_form_labels'>
                <label>Enter User Name :- </label><br></br>
                <label>Enter Password :- </label>
              </div>

              <div className='div_form_input'>
                <input type='text' value={name} onChange={saveName}/><br></br>
                <input type='password' value={pass} onChange={savePassword}/>
              </div>

            </div>

            <div className='div_form_button'>
              <input type='submit' />
            </div>
          
          </form>
        </div>
      </div>  
  )
}

export default App