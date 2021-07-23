import BallotViewRow from  './BallotViewRow';

function BallotTable ({ballots, onVote}) {
    let ballotRows = ballots.map((ballotRow) => 
        <BallotViewRow key={ballotRow.id} ballotRow={ballotRow} onVote={onVote} />)

    return  (
        <div>
        <h1>Choose an Election to vote on: </h1>
        <table>
                <thead>
                    <tr>
                        <th>Election Id</th>
                        <th>Election Description</th>
                    </tr>
                </thead>
                <tbody>
                    { ballotRows }
                </tbody>
         </table>
         </div>
    )
}

export  default BallotTable;
