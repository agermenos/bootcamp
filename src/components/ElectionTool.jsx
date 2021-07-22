import HeadersTool from "./HeadersTool";
import { useState, useEffect } from "react";
import ElectionForm from './ElectionForm';
import ElectionTableHeader from './ElectionTableHeader';
import ElectionRow from "./ElectionRow";
import NewElectionTable from './NewElectionTable';
import axios from 'axios';

function ElectionTool(props){
    const [error, setError] = useState("");
    const [electionsData, setElectionsData] = useState([]);
    const [selectedElection, setSelectedElection] = useState({});
    const [showElectionForm, setShowElectionForm] = useState(false);
    const ELECTIONS_URL = "http://localhost:3001/electionsData";

    useEffect (
        () => 
        axios
            .get(ELECTIONS_URL)
            .then((res) => setElectionsData(res.data))
            .catch((err) => setError(err)),
        []    
    );

    const callPeekRow = (election) => {
        console.log('Peeking Into Election ' + election.id);
        setSelectedElection(election);
    };

    const addElection = () => {
        console.log("Adding an Election");
        setShowElectionForm(true);
    };

    const electionRows=electionsData.map(election => {
        return <ElectionRow election={election} callEditRow={callPeekRow}/>
    });
    
    return(
        <div>
            <HeadersTool label="Election Admin"></HeadersTool>
            <p>{error && `The app encountered an error: ${error}`}</p>
            <table className="table">
                <ElectionTableHeader></ElectionTableHeader>
                <tbody>
                    {electionRows}
                </tbody>
            </table>
            <button onClick={() => addElection()}>Add Election</button>
            {showElectionForm && 
                <NewElectionTable></NewElectionTable>
            }
            <ElectionForm electionFormValue={selectedElection}></ElectionForm>

        </div>
        
        
    )
}

export default ElectionTool;