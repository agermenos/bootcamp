import React from 'react';

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
            <td><button onClick={handleDelete}>Delete</button></td>
            <td><button onClick={handleEdit}>Edit</button></td>
        </tr>
    )
}

export default RegViewRow;