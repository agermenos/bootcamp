import BallotViewRow from  './BallotViewRow';

function BallotTable ({ballots}) {
    let ballotRows = ballots.map((ballotRow) => 
        <BallotViewRow key={ballotRow.id} ballotRow={ballotRow} />)

    // function handleSort (e, sortKey) {
    //     console.log("RegTable.handleSort", sortKey)
    //     onSort(sortKey);
    // }

    return  (
        <div>
        <h1>Ballots to vote on: </h1>
        <table>
                <thead>
                    <tr>
                        <th>Ballot Id</th>
                        <th>Ballot Description</th>
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
