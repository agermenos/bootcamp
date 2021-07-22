function ElectionRow(props) {
    const elections = {...props.election};
    const callEditRow = {...props.callEditRow};
    const callDeleteRow = {...props.callDeleteRow};
    return (
        <tr key={elections.id}>
            <td>{elections.description}</td>
            <td>
                <button onClick={callEditRow} >Edit</button>
            </td>
            <td>
                <button onClick={callDeleteRow} >Delete</button>
            </td>
        </tr>
    )
}

export default ElectionRow;