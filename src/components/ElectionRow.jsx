function ElectionRow(props) {
    const election = {...props.election};
    const callEditRow = props.callEditRow;
    return (
        <tr key={election.id}>
            <td>{election.description}</td>
            <td>
                <button onClick={() => callEditRow(election)} >Edit</button>
            </td>
        </tr>
    )
}

export default ElectionRow;