import RegViewRow from  './RegViewRow';
import RegEditRow from  './RegEditRow';

function RegTable ({regs, editRegId, onDelete, onEdit, onSave, onSort }) {
    let regRows = regs.map((regRow) => 
    editRegId  === regRow.id ?  (
        <RegEditRow key={regRow.id} regRow={regRow} onSave={onSave}/>
    )  :  (
        <RegViewRow key={regRow.id} regRow={regRow} onDelete={onDelete} onEdit={onEdit}/>
    ));

    function handleSort (e, sortKey) {
        console.log("RegTable.handleSort", sortKey)
        onSort(sortKey);
    }

    return  (
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th onClick={e  => handleSort (e, 'lname')}>Last Name (!)</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Birthdate</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    { regRows }
                </tbody>
         </table>
    )
}

export  default RegTable
