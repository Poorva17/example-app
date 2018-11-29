import {Link} from "react-router-dom";
import React from "react";

class NavComponent extends React.Component{
    render(){
        return <div>
            <Link to='/'>Open Functionality</Link> | <Link to='/secured'>Secured Functionality</Link>
        </div>
    }
}

export default NavComponent


