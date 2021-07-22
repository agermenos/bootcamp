import {useState, useEffect} from 'react';
import QuestionRow from './QuestionRow';
import NewQuestionForm from './NewQuestionForm';

function ElectionTable(props) {
    const {isNew, electionFormValue} = props;
    const [electionForm, setElectionForm] = useState(electionFormValue);

    const addQuestion = (question) => {
        const myElectionForm = electionForm?{
            id: electionForm.id || null,
            descripion: electionForm.descripion || "test",
            questions: electionForm.questions || []
        }:{
            description:"test",
            questions:[]
        };
        myElectionForm.questions.push(question);
        setElectionForm({
            ...myElectionForm
        });
    }
    
    return(
        <div className="container">
            
            {electionForm && electionForm.description?
                <div>
                    {electionForm.description?
                        <label for="basic-url">{electionForm.description}</label>:
                        <NewQuestionForm></NewQuestionForm>
                    }
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
                            {electionForm.questions.map((question) => (
                                <QuestionRow question={question} />
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            :<null/>}
            {isNew && 
                <NewQuestionForm addQuestion={addQuestion}/>
            }
        </div>
    );
}

export default ElectionTable;