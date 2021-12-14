import React, { Component } from 'react'

export default class Authority extends Component {

    isCheck = (acc, role) => {
        let check = false;
        this.props.authorities.forEach(auth => {
            if(auth.accountId === acc && auth.roleId === role) {
                check = true;
            }
        });
        return check
    }

    addAuthor = (acc, rol) => {
        this.props.addAuthor(acc, rol)
    }

    removeAuth = (acc, rol) => {
        let i = this.findAuth(acc, rol);
        if(i === 1) {
            alert("Can't delete this authority !");
            return;
        }
        this.props.removeAuthor(i);
    }

    findAuth = (acc, role) => {
        let id = -1;
        this.props.authorities.forEach(auth => {
            if(auth.accountId === acc && auth.roleId === role) {
                id = auth.id;
            }
        });
        return id
    }

    onChange = (event, acc, rol) => {
        let {checked} = event.target;
        checked ? this.addAuthor(acc, rol) : this.removeAuth(acc, rol)
    }

    render() {

        let {acc, role} = this.props

        return <tr>
            <td>{acc.fullname}</td>
            {
                role.map((rol, index) => {
                    return <th key={index}><input onChange={(event) => {
                        this.onChange(event, acc.id, rol.id)
                    }} type="checkbox" checked={this.isCheck(acc.id, rol.id)}></input></th>
                })
            }
        </tr>
    }
}
