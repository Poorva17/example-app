import React from "react";

class CreatePerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreated: false
        };
        this.sendRequest = this.sendRequest.bind(this)
    }

    sendRequest() {
        setTimeout(async () => {
            const keycloak = await this.props.keycloak;

            if(keycloak.isTokenExpired()) {
                keycloak.logout();
            }

            const response =  await fetch("http://localhost:9003/person", {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST",
                    "Authorization" : `Bearer ${keycloak.token}`
                }
            });

            this.setState({isCreated: response.ok})
        }, 70000);
    }

    componentWillMount() {
        this.sendRequest();
    }

    render() {
        if(this.state.isCreated) {
            return <div>Person created successfully</div>
        } else {
            this.sendRequest();
            return <div>Person creation failed. Trying again...</div>

        }
    }
}

export default CreatePerson