import HeadersTool from "./HeadersTool";
import { useState, useEffect } from "react";
import ElectionTable from './ElectionTable';
import ElectionTableHeader from './ElectionTableHeader';
import ElectionRow from "./ElectionRow";
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
        setShowElectionForm(false);
        setSelectedElection(election);
    };

    const addElection = () => {
        console.log("Adding an Election");
        setShowElectionForm(true);
    };

    const electionRows=electionsData.map(election => {
        return <ElectionRow election={election} callEditRow={() => callPeekRow (election)}/>
    });

    const voteElection=(electionForm) => {
        axios
            .post(ELECTIONS_URL, {...electionForm})
            .then((res)=>{
                const newElectionsData = [ ...electionsData, res.data];
                setElectionsData(newElectionsData);
            })
            .catch((err) => setError(err))
    }
    
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
            <button className="btn btn-primary" onClick={() => addElection()}>Add Election</button>
            {showElectionForm && 
                <div>
                    <ElectionTable isNew={showElectionForm} electionFormValue={selectedElection} storeElection={voteElection} addElection={addElection}></ElectionTable>
                </div>
            }
            {!showElectionForm && 
                <ElectionTable isNew={showElectionForm} storeElection={voteElection} electionFormValue={selectedElection}></ElectionTable>
            }    
        </div>
        
        
    )
}

export default ElectionTool;