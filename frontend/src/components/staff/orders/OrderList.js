import React, { Component } from 'react'
import OrderItem from './OrderItem'
let base64 = require("base-64")
export default class OrderList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderList: []
        }
    }

    componentDidMount = () => {
        this.getAllOrder();
    }

    getAllOrder = () => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Cookie", "JSESSIONID=93F3A27A52519A25A145DEFBFA4CD4C2");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/staff/order/getAll", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    orderList: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    confirm = (order) => {
        this.setState({
            orderList : [...this.state.orderList].map(val => {
                return val.id === order.id ? order : val
            })
        })
    }

    render() {

        let element = this.state.orderList.map((val, ind) => {
            return <OrderItem key={ind} order={val} confirm={this.confirm}/>
        })

        return (
            <div>
                <h3>Order</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Create date</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {element}
                    </tbody>
                </table>
            </div>
        )
    }
}
