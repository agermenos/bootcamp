import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BallotViewRow  ({ballotRow, onVote }) {
    function handleVote ()
    {
        console.log("handleVote", ballotRow.description)
        // use withRouter() of react-router-dome to route to new component?
        onVote(ballotRow.id, ballotRow);
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