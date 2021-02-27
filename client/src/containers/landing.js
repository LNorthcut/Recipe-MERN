import Add from "./Add";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/';
const { default: TheNav } = require("../components/NavBar")


function LandingLocation(props) {
    return (
        <>
            {/* <TheNav/>
   <Add/> */}
            <Router>
                <>
          
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add" component={Add}/>
                </Switch>
                </>
            </Router>
        </>
    )
}

export default LandingLocation;