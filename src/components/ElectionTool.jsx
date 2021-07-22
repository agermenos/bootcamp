import HeadersTool from "./HeadersTool";
import { useState, useEffect } from "react";
import ElectionForm from './ElectionForm';
import ElectionTableHeader from './ElectionTableHeader';
import ElectionRow from "./ElectionRow";
import axios from 'axios';

function ElectionTool(props){
    const [error, setError] = useState("");
    const [electionsData, setElectionsData] = useState([]);
    const [selectedElection, setSelectedElection] = useState({});
    const ELECTIONS_URL = "http://localhost:3010/electionsData";

    useEffect (
        () => 
        axios
            .get(ELECTIONS_URL)
            .then((res) => setElectionsData(res.data))
            .catch((err) => setError(err)),
        []    
    );

    const callEditRow = (election) => {
        console.log('Editing Election ' + election.id);
        setSelectedElection(election);
    };

    const electionRows=electionsData.map(election => {
        return <ElectionRow election={election} callEditRow={callEditRow}/>
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
            <ElectionForm electionFormValue={selectedElection}></ElectionForm>

        </div>
        
        
    )
}

export default ElectionTool;