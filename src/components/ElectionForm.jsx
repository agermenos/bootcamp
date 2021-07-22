import {useState, useEffect} from 'react';
import QuestionRow from './QuestionRow';

function ElectionForm(props) {
    const {electionFormValue} = props;
    const [electionForm, setElectionForm] = useState(electionFormValue);
    
    return(
        <div className="container">
            <label for="basic-url">{electionFormValue.description}</label>
            {electionFormValue.description?
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Question</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                        </thead>
                    <tbody>
                        {electionFormValue.questions.map((question) => (
                            <QuestionRow question={question}/>
                        ))}
                    </tbody>
                </table>
            :<null/>}
        </div>
    );
}

export default ElectionForm;