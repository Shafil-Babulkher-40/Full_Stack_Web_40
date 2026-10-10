import React from 'react'
import './Student_Cm.css'

const Students_Cm = () => {
  return (
    <div>
        <div className='hadding'>
            <h1>Student Registration </h1> 
        </div>

        <div className='std_form'>

          <div className='form-row'>
            <label className='lab'>Student Roll N0 :- </label>
            <input type='number' placeholder='Roll N0' id='st_roll_no' /> <br></br>
          </div>

          <div className='form-row'>
            <label>Student First Name :- </label>
            <input type='name' placeholder='First Name' id='fst_name' /> <br></br>
          </div>
          
          <div className='form-row'>
            <label>Student Last Name :- </label>
            <input type='name' placeholder='Last Name' id='lst_name' /> <br></br>
          </div>

          <div className='form-row'>
            <label className='lab'> Student Class :- </label>
            <input type='text' placeholder='Class' id='st_class' /> <br></br>
          </div>

          <div className='form-row'>
            <label className='lab'> Student Course :- </label>
            <input type='text' placeholder='Course' id='st_course' /> <br></br>
          </div>

          <div className='form-row'>
            <label>Student Mobile N0 :- </label>
            <input type='number' placeholder='Mobile N0' id='mob_no' /> <br></br>
          </div>
          
        </div>
    </div>
  )
}

export default Students_Cm