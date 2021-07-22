import  React from 'react';
import { useState } from 'react';
import RegForm from  './RegForm'

// To register a voter
function  Registration ()
{

    const [error, setError] = useState("");

    function checkHttpStatus(response) {
        if (response.ok) {
          return Promise.resolve(response);
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          return Promise.reject(error);
        }
    }

    function handleSave (regForm) { 
        console.log("handleSave", regForm)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(regForm),
        }
        fetch(`http://localhost:3001/regsData`, requestOptions)
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(() => setError(""))
                .catch((err) => setError(err.response.statusText))
    }
    
    return (
        <div>
            <h1>Voter Registration:</h1>
            <RegForm  onSave={handleSave}/>
        </div>
    )
}

export  default Registration