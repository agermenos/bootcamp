import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import HeadersTool from './HeadersTool';
import FooterTool from './FooterTool';

const divStyle = {
    color: 'blue',
    padding: "10px",
    fontFamily: "Arial"
  };

function Routes(props){
    return(
        <Router>
            <HeadersTool text="Voting Project"/>
            <div className="container" style={divStyle}>
                <nav>
                <ul>
                    <li>
                    <Link to="/voter">Voters</Link>
                    </li>
                    <li>
                    <Link to="/ballot">Ballot</Link>
                    </li>
                    <li>
                    <Link to="/election">Election</Link>
                    </li>
                    <li>
                    <Link to="/admin">Admin</Link>
                    </li>
                </ul>
                </nav>
                <Switch>
                    <Route path="/voter">/
                    </Route>
                    <Route path="/ballot">/
                    </Route>
                    <Route path="/election"/>
                        
                    <Route path="/colorTool"/>/
                </Switch>
            </div>
            <FooterTool text="Voting Project"/>
        </Router>
        
    )
}
export default Routes;