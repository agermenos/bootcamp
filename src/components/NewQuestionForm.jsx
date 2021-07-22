import { useState, useEffect } from "react";
import QuestionFormItem from './QuestionFormItem';

function NewQuestionForm(props) {
    const {addQuestion} = props;
    return (
        <div className="container">
            <label for="basic-url">Election Form</label>
            <QuestionFormItem id="txt-question" value="Question" addQuestion={addQuestion} propertyName="question" />
        </div>
    ) 
}

export default NewQuestionForm;