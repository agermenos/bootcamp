import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function RegForm ({onSave})
{
  const [regForm, setRegForm] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    birthdate: "",
    email: "",
    phone: ""
  });

  function handleChange (e)
  {
      const  { name, value } = e.target;
      setRegForm(prevState => ({
          ...prevState,
          [name]: value
      }));
     // console.log(regForm)
  };

  function handleAdd (e)
  {
    console.log("RegForm.handleAdd")
    onSave(regForm);
  }

  return (
    <div>
          <label>First Name:</label><input type="text" name="fname" value={regForm.fname} onChange={handleChange}/><br />
          <label>Last Name:</label><input type="text" name="lname" value={regForm.lname} onChange={handleChange}/><br />
          <label>Address:</label><input type="text" name="address" value={regForm.address} onChange={handleChange}/><br />
          <label>City:</label><input type="text" name="city" value={regForm.city} onChange={handleChange}/><br />
          <label>Birthdate:</label><input type="text" name="birthdate" value={regForm.birthdate} onChange={handleChange}/><br />
          <label>Email:</label><input type="text" name="email" value={regForm.email} onChange={handleChange}/><br />
          <label>Phone:</label><input type="text" name="phone" value={regForm.phone} onChange={handleChange}/><br /><br />
          <button className="btn btn-primary" onClick={handleAdd}>Complete Registration</button>
    </div>
  )
}

export default RegForm