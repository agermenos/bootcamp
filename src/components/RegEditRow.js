import { useState } from 'react';

export default function RegEditRow({ regRow, onSave  }) {
  let [regForm, setRegForm] = useState(regRow);

  function handleChange(e) {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  }

  function save(regForm) {
    onSave(regForm);
  }

  console.log(regForm);

  return (
    <tr>
        <td></td>
        <td><input type="text" name="make" value={regForm.fname} onChange={handleChange}/></td>
        <td><input type="text" name="lname" value={regForm.lname} onChange={handleChange}/></td>
        <td><input type="text" name="address" value={regForm.address} onChange={handleChange}/></td>
        <td><input type="text" name="city" value={regForm.city} onChange={handleChange}/></td>
        <td><input type="text" name="birthdate" value={regForm.birthdate} onChange={handleChange}/></td>
        <td><input type="text" name="email" value={regForm.email} onChange={handleChange}/></td>
        <td><input type="text" name="phone" value={regForm.phone} onChange={handleChange}/></td>
        <td><button type="button" onClick={() => save(regForm)}>Save</button></td>
    </tr>
  );
}