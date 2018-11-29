import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Secured from "./Secured";
import NavComponent from "./../example/NavComponent"

import '../main.css'

class Master extends React.Component {
    render() {
        return <BrowserRouter>
            <div style={{"padding": "10px"}}>
                <NavComponent/>
                <Route exact path="/" component={Welcome}/>
                <Route path="/secured" component={Secured}/>
            </div>
        </BrowserRouter>
    }
}

export default Master