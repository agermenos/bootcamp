import React from 'react';

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
            <td><button onClick={handleVote}>Vote</button></td>
        </tr>
    )
}

export default BallotViewRow;