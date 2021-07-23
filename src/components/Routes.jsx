import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import FooterTool from './FooterTool';
import ElectionTool from "./ElectionTool";

const divStyle = {
    color: 'blue',
    padding: "10px",
    fontFamily: "Arial"
  };

function Routes(props){
    return(
        <Router>
            <div className="container" style={divStyle}>
                <nav>
                <ul>
                    <li>
                    <Link to="/voters">Voters</Link>
                    </li>
                    <li>
                    <Link to="/ballot">Ballot</Link>
                    </li>
                    <li>
                    <Link to="/election">Election</Link>
                    </li>
                    <li>
                    <Link to="/vote">Vote</Link>
                    </li>
                </ul>
                </nav>
                <hr />
                <Switch>
                    <Route path="/voter">/
                    </Route>
                    <Route path="/ballot">/
                    </Route>
                    <Route path="/election"><ElectionTool/></Route>
                    <Route path="/vote"></Route>
                    <Route path="/colorTool"/>/
                </Switch>
            </div>
            <FooterTool text="Voting Project"/>
        </Router>
        
    )
}
export default Routes;