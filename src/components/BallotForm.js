import React from 'react';
import QuestionViewRow  from './QuestionViewRow'

function BallotForm  (ballot) {
    console.log("BallotForm: ballot is ", ballot)
    let questionRows = ballot.selectedBallot.map((questionRow) => 
        <QuestionViewRow key={questionRow.id} questionRow={questionRow}/>)

    return  (
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    { questionRows }
                </tbody>
        
            </table>
    )
}

export default BallotForm;