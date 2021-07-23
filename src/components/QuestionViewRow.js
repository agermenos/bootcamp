import React from 'react';

function QuestionViewRow  ({questionRow }) {
   
    return  (
        <tr>
            <td>{questionRow.id}</td>
            <td>{questionRow.description}</td>
        </tr>
    )
}

export default QuestionViewRow;