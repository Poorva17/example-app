import React from "react";

class CreatePerson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreated: false
        };
        this.sendCreateRequest = this.sendCreateRequest.bind(this)
        this.sendDeleteRequest = this.sendDeleteRequest.bind(this)
    }

    sendCreateRequest() {
        setTimeout(async () => {
            const keycloak = await this.props.keycloak;

            console.log("******token*****");
            console.log(keycloak.token);

            const response =  await fetch("http://localhost:9003/person", {
                method: 'POST',
                headers: {
                    "Authorization" : `Bearer ${keycloak.token}`
                }
            });

            this.setState({isCreated: response.ok})
        }, 2000);
    }

    sendDeleteRequest() {
        setTimeout(async () => {
            const keycloak = await this.props.keycloak;

            console.log("******token*****");
            console.log(keycloak.token);

            const response =  await fetch("http://localhost:9003/person", {
                method: 'DELETE',
                headers: {
                    "Authorization" : `Bearer ${keycloak.token}`
                }
            });

            this.setState({isCreated: response.ok})
        }, 3000);
    }

    render() {
        if(this.state.isCreated) {
             return <div>
                 <div>Person created successfully</div>
                 <button onClick={this.sendCreateRequest}>Create</button>
                 <button onClick={this.sendDeleteRequest}>Delete</button>
             </div>

        } else {
            return <div>
                <div>Person creation failed. Trying again...</div>
                <button onClick={this.sendCreateRequest}>Create</button>
                <button onClick={this.sendDeleteRequest}>Delete</button>
            </div>

        }
    }
}

export default CreatePerson