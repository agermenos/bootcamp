import RegViewRow from  './RegViewRow';
import RegEditRow from  './RegEditRow';

function RegTable ({regs, editRegId, onDelete, onEdit, onSave }) {
    let regRows = regs.map((regRow) => 
    editRegId  === regRow.id ?  (
        <RegEditRow key={regRow.id} regRow={regRow} onSave={onSave}/>
    )  :  (
        <RegViewRow key={regRow.id} regRow={regRow} onDelete={onDelete} onEdit={onEdit}/>
    ));

    return  (
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
