import QuestionFormItem from './QuestionFormItem';

function NewQuestionForm(props) {
    const {addQuestion, text} = props;
    return (
        <div className="container">
            <label htmlFor="basic-url">Election Form</label>
            <QuestionFormItem text="Add Question" id="txt-question" value="Question" content="" addQuestion={addQuestion} propertyName="question" />
        </div>
    ) 
}

export default NewQuestionForm;