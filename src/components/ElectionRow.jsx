function ElectionRow(props) {
    const election = {...props.election};
    const callPeekRow = props.callEditRow;
    return (
        <tr key={election.id}>
            <td>{election.id} </td>
            <td>{election.description}</td>
            <td>
                <button className="btn btn-info" onClick={() => callPeekRow(election)} >Peek</button>
            </td>
        </tr>
    )
}

export default ElectionRow;