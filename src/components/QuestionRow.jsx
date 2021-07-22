function QuestionRow({question}) {
    return (
        <tr>
            <td>{question.id}</td>
            <td>{question.description}</td>
        </tr>
    )
}

export default QuestionRow;