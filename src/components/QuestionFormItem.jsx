import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function QuestionFormItem(props) {
    const addQuestion = props.addQuestion;
    const [fieldText, setFieldText] = useState(props.content);    
    const updateText = (e) => {
        setFieldText(e.target.value);
    }
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">{props.value}</span>
            </div>
            <input 
                type={props.property} 
                onChange={ (e) => {updateText(e)}} 
                className="form-control" 
                id={props.id} 
                aria-describedby="basic-addon3" 
                value={fieldText}/>
            <button onClick={() => addQuestion(fieldText)}>Add Question</button>
        </div>
    )
}

export default QuestionFormItem;