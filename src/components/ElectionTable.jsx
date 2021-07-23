import {useState, useEffect} from 'react';
import QuestionRow from './QuestionRow';
import NewQuestionForm from './NewQuestionForm';

function ElectionTable(props) {
    const {isNew, electionFormValue} = props;
    const [electionForm, setElectionForm] = useState({});

    useEffect (
        () => {
            !isNew && electionFormValue?
            setElectionForm({
                id: electionFormValue.id + 0,
                description: electionFormValue.description + "",
                questions: electionFormValue.questions?[...electionFormValue.questions]:[]
            }):
            setElectionForm({
                    id: null,
                    description: null,
                    questions: []
            })
        }, [electionFormValue, isNew]
    )

    const addQuestion = (question) => {
        const myElectionForm = electionForm?{
            id: electionForm.id || null,
            descripion: electionForm.description || "test",
            questions: [...electionForm.questions] || []
        }:{
            description:"test",
            questions:[]
        };
        myElectionForm.questions.push(
            {   id: myElectionForm.questions.length + 1,
                description: question});
        setElectionForm({
            id: myElectionForm.id + 0,
            description: myElectionForm.description + "",
            questions: [...myElectionForm.questions]
        });
    }
    
    return(
        <div className="container">
            
            {electionForm && electionForm.description?
                <div>
                    {/* {electionForm.description?
                        <label for="basic-url">{electionForm.description}</label>:
                        <NewQuestionForm></NewQuestionForm>
                    } */}
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