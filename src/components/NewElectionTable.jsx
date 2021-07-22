import { useState, useEffect } from "react";
import QuestionFormItem from './QuestionFormItem';

function NewElectionTable(props) {
    return (
        <div className="container">
            <label for="basic-url">Car Form</label>
            <QuestionFormItem id="txt-question" value="Question" propertyName="question" />
        </div>
    ) 
}

export default NewElectionTable;