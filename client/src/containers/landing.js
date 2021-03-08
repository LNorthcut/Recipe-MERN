import React, {useState} from 'react';
import Find from "./Find/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import useToken from './useToken';
import AddR from './Add';
// import { Layout } from 'antd';


const { default: TheNav } = require("../components/NavBar");

// const { Header, Footer, Sider, Content } = Layout;

// Session Storage

function setToken(userToken) {
    // This method takes a key as a first argument and a string as the second argument. That means you’ll need to convert the userToken from an object to a string using the JSON.stringify function. Call setItem with a key of token and the converted object.
    sessionStorage.setItem('token', JSON.stringify(userToken));

}

// function getToken() {
//     // This method takes a key as an argument and returns the string value. Convert the string to an object using JSON.parse, then return the value of token:
//     const tokenString = sessionStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }


function LandingLocation(props) {
    // grabbing the desired token
    const {token, setToken}= useToken();
    // const token = getToken();

    // conditional statement
    if(!token) {
        return <Login setToken={setToken} />
      }
    
  
    return (
        <div>
            {/* <TheNav/>
   <Add/> */}
            <Router>
                <>
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/find" component={Find}/>
                    <Route exact path="/add" component={AddR}/>

                </Switch>
                </>
                {/* <Footer>Footer</Footer> */}
            </Router>
        </div>
    )
}

export default LandingLocation;