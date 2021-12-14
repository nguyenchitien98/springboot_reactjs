import React, { Component } from 'react'
import Authority from './Authority'
let base64 = require("base-64")
export default class Authorized extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authorities: [],
            account: [],
            role: []
        }
    }

    componentDidMount = () => {
        this.getAuthorities();
        this.getAccount();
        this.getRole();
    }

    getAuthorities = () => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Cookie", "JSESSIONID=2E50729D00996EAE78D40069E5E98065");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/admin/authority", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    authorities: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }


    getAccount = () => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Cookie", "JSESSIONID=2E50729D00996EAE78D40069E5E98065");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/admin/account", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    account: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    getRole = () => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Cookie", "JSESSIONID=2E50729D00996EAE78D40069E5E98065");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/admin/role", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    role: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    addAuthor = (acc, role) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=2E50729D00996EAE78D40069E5E98065");

        var raw = JSON.stringify({
            "id": -1,
            "accountId": acc,
            "roleId": role
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/admin/authority", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    authorities: [...this.state.authorities, JSON.parse(result)]
                })
            })
            .catch(error => console.log('error', error));
    }

    removeAuthor = (id) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Cookie", "JSESSIONID=2E50729D00996EAE78D40069E5E98065");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/admin/authority/" + id, requestOptions)
            .then(response => response.text())
            .then(result => this.setState({
                authorities: [...this.state.authorities].filter(val => {
                    return val.id !== id
                })
            }))
            .catch(error => console.log('error', error));
    }


    onChange = () => {
        console.log("a")
    }

    render() {

        let bod = this.state.account.map((acc, index) => {
            return <Authority key={index}
                addAuthor={this.addAuthor}
                removeAuthor={this.removeAuthor}
                authorities={this.state.authorities} acc={acc} role={this.state.role} />
        })

        let header = this.state.role.map((val, ind) => {
            return <th key={ind}>{val.name}</th>
        })

        return (
            <div>
                <h3>Security</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {bod}
                    </tbody>
                </table>
            </div>
        )
    }
}
