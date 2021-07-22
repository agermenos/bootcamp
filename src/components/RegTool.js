import React from 'react';
import RegTable from './RegTable'
import { useState, useEffect } from 'react';

// to view, edit, delete registrations
function RegTool () {
    const [regs,  setRegs] = useState([]);
    const [error, setError] = useState("");
    const [editRegId, setEditRegId] = useState(-1);

    function checkHttpStatus(response) {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          return Promise.reject(error);
        }
      }
      
    useEffect(
        () =>
          fetch("http://localhost:3001/regsData")
            .then(checkHttpStatus)
            .then((res) => res.json())
            .then(setRegs)
            .then(() => setError(""))
            .catch((err) => setError(err.response.statusText)),
        []
      );

    function  deleteReg (id)
    {
        fetch(`http://localhost:3001/regsData/${id}`, { method: 'DELETE'})
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(() => setError(""))
                .catch((err) => setError(err.response.statusText))
    }

    function handleDelete (id) {
        //console.log("RegTool.handleDelete")
        deleteReg(id)
        setRegs(regs.filter((regObj) => regObj.id !== id));
    }

    function handleEdit (editId) {
        console.log("RegTool.handleEdit", editId, regs);
        console.log(regs.find(regObj => regObj.id === editId));
        setEditRegId(editId);
    }

    function handleSave (regObj) {
        console.log("RegTool.handleSave", regObj);
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(regObj),
        }
        fetch(`http://localhost:3001/regsData/${regObj.id}`, requestOptions)
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(() => setError(""))
                .catch((err) => setError(err.response.statusText))
    }
   
    return (
        <div>
            <p>{error && `RegTool data initialization failed: ${error}`}</p>
            <RegTable regs={regs} editRegId={editRegId}  onDelete={handleDelete} onEdit={handleEdit} onSave={handleSave}/>
        </div>
    )
}

export default RegTool;