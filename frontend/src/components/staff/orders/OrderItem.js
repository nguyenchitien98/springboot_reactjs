import React, { Component } from 'react'

export default class OrderItem extends Component {


    confirm = () => {

        let confirm = window.confirm("Confirm this order ?")

        if (confirm) {
            var myHeaders = new Headers();
            var token = localStorage.getItem('token')
            myHeaders.append("Authorization", "Bearer " + token);
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "JSESSIONID=93F3A27A52519A25A145DEFBFA4CD4C2");

            var { order } = this.props
            order.status = 1;
            var raw = JSON.stringify(order);

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/staff/order/confirm", requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.props.confirm(JSON.parse(result))
                })
                .catch(error => console.log('error', error));
        }
    }

    render() {

        let { order } = this.props;

        let status = "";
        if (order.status === 0) {
            status = "Ordering"
        }
        else if (order.status === 1) {
            status = "Confirmed"
        }
        else if (order.status === 3) {
            status = "Cancel"
        }
        return (
            <tr>
                <td>{order.id}</td>
                <td>{order.accountId}</td>
                <td>{order.createDate}</td>
                <td>{order.address}</td>
                <td>{status}</td>
                <td>{
                    order.status === 0 ? <button className="btn btn-primary" style={{ cursor: 'pointer' }} onClick={this.confirm}>Confirm</button> : ""
                }</td>
            </tr>
        )
    }
}
