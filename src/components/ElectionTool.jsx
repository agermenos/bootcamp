import HeadersTool from "./HeadersTool";
import { useState, useEffect } from "react";
import ElectionTableHeader from './ElectionTableHeader';
import ElectionRow from "./ElectionRow";
import axios from 'axios';

function ElectionTool(props){
    const [error, setError] = useState("");
    const [electionsData, setElectionsData] = useState([]);
    const ELECTIONS_URL = "http://localhost:3010/electionsData";

    useEffect (
        () => 
        axios
            .get(ELECTIONS_URL)
            .then((res) => setElectionsData(res.data))
            .catch((err) => setError(err)),
        []    
    );

    const electionRows=electionsData.map(election => {
        return <ElectionRow election={election}/>
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
            {/* <ElectionForm  callBackMethod={updateElection} electionFromValue={form}/> */}
        </div>
        
    )
}

export default ElectionTool;