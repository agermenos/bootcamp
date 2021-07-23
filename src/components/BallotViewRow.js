import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BallotViewRow  ({ballotRow }) {
    function handleVote ()
    {
        console.log("handleVote")
        //onVote(ballotRow.id);
    }
  
    return  (
        <tr>
            <td>{ballotRow.id}</td>
            <td>{ballotRow.description}</td>
            <td><button className="btn btn-primary" onClick={handleVote}>Vote</button></td>
        </tr>
    )
}

export default BallotViewRow;