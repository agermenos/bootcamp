import RegViewRow from  './RegViewRow';
import RegEditRow from  './RegEditRow';

function RegTable ({regs, editRegId, onDelete, onEdit }) {
    let regRows = regs.map((regRow) => 
    editRegId  === regRow.id ?  (
        <RegEditRow key={regRow.id} regRow={regRow}/>
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
