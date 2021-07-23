import React from 'react';
import { useState, useEffect } from 'react';
import BallotTable from './BallotTable';
import BallotForm from './BallotForm';

function VoteTool  () {
    const [ballots,  setBallots] = useState([]); 
    const [votes,  setVotes] = useState([]);
    const [error, setError] = useState("");
    const [showBallot, setShowBallot] = useState(false);
    const [selectedBallot,  setSelectedBalot] = useState([]);

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

      useEffect(
        () =>
          fetch("http://localhost:3001/votesData")
            .then(checkHttpStatus)
            .then((res) => res.json())
            .then(setVotes)
            .then(() => setError(""))
            .catch((err) => setError(err.response.statusText)),
        []
      );

    function saveVote (vote) {
      console.log("VoteTool.saveVote")
      setVotes([...votes, {  ...vote,  id: votes.length + 1}]);
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vote),
        }
        fetch(`http://localhost:3001/votesData`, requestOptions)
                .then(checkHttpStatus)
                .then((res) => res.json())
                .then(() => setError(""))
                .catch((err) => setError(err.response.statusText))
    }

    function onVote(ballotId, ballot) {
      console.log("VoteTool.onVote", ballotId, ballot.questions)
      setShowBallot(true)
      let data = ballot.quesstions
      setSelectedBalot(data)
    }

    return  (
      <div>
          <BallotTable ballots={ballots} onVote={onVote}/> 
          { showBallot &&
            <div>
              <BallotForm selectedBallot={selectedBallot} />
            </div>
          }
      </div>
    )
}

export default VoteTool;