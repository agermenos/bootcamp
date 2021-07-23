import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegViewRow  ({regRow, onDelete, onEdit }) {
    function handleDelete ()
    {
        console.log("delete")
        onDelete(regRow.id);
    }
    function handleEdit ()
    {
        console.log("edit")
        onEdit(regRow.id);
    }
    return  (
        <tr>
            <td>{regRow.id}</td>
            <td>{regRow.fname}</td>
            <td>{regRow.lname}</td>
            <td>{regRow.address}</td>
            <td>{regRow.city}</td>
            <td>{regRow.birthdate}</td>
            <td>{regRow.email}</td>
            <td>{regRow.phone}</td>
            <td><button className="btn btn-primary" onClick={handleDelete}>Delete</button></td>
            <td><button className="btn btn-primary" onClick={handleEdit}>Edit</button></td>
        </tr>
    )
}

export default RegViewRow;