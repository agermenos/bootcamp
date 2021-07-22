import 'bootstrap/dist/css/bootstrap.min.css';

function QuestionFormItem(props) {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">{props.value}</span>
            </div>
            <input 
                type={props.property} 
                onChange={ e => {props.callBack(props.propertyName, e.target.value)}} 
                className="form-control" 
                id={props.id} 
                aria-describedby="basic-addon3" 
                value={props.content}/>
        </div>
    )
}

export default QuestionFormItem;