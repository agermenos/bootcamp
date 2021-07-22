function ElectionRow(props) {
    const election = {...props.election};
    const callPeekRow = props.callEditRow;
    return (
        <tr key={election.id}>
            <td>{election.description}</td>
            <td>
                <button onClick={() => callPeekRow(election)} >Peek</button>
            </td>
        </tr>
    )
}

export default ElectionRow;