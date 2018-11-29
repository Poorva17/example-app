import React from "react";

class CreatePerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreated: false
        }
    }

     componentDidMount() {
         setTimeout(async () => {
             const response =  await fetch("http://localhost:9003/person", {
                 method: 'POST',
                 headers: {
                     "Access-Control-Allow-Origin": "*",
                     "Access-Control-Allow-Methods": "POST",
                     "Authorization" : `Bearer ${this.props.keycloak.token}`
                 }
             });

             this.setState({isCreated: response.ok})
         }, 1000);
    }

    render() {
        if(this.state.isCreated) {
            return <div>Person created successfully</div>
        } else {
            return <div>Person creation failed</div>
        }

    }
}

export default CreatePerson