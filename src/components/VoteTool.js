import React from 'react';
import { useState, useEffect } from 'react';
import BallotTable from './BallotTable';

function VoteTool  () {
    const [ballots,  setBallots] = useState([]);
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
      
    useEffect(
        () =>
          fetch("http://localhost:3001/electionsData")
            .then(checkHttpStatus)
            .then((res) => res.json())
            .then(setBallots)
            .then(() => setError(""))
            .catch((err) => setError(err.response.statusText)),
        []
      );

    return  (
     <div>
       <BallotTable ballots={ballots} />
     </div>
    )
}

export default VoteTool;