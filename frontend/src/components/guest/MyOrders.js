import React, {Component} from "react";
import MyOrdersService from "../../services/guestservice/MyOrdersService";
import {connect} from "react-redux";
import * as actions from "../../actions/index"
import MyOrderItem from "./MyOrderItem";

class MyOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.findAll();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    findAll = () => {
        let username = this.props.auth.username;
        let password = this.props.auth.password;
        MyOrdersService.findAll(username, password)
            .then(response => response.text())
            .then(result => {
                let orders = JSON.parse(result);
                this.props.setMyOrders(orders);
            })
            .catch(error => {
                this.props.setMyOrders([]);
            });
    }

    render() {
        let {myOrders} = this.props;
        let element = myOrders.map((val, ind) => {
            return <MyOrderItem key={ind} myOrderItem={val}/>
        })
        return(
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8">
                    <h4>{this.props.auth.username} orders</h4>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>UserId</th>
                            <th>CreateDate</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {element}
                        </tbody>
                    </table>
                </div>
                <div className="col-2"></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        myOrders: state.myOrders,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMyOrders: orders => {
            dispatch(actions.setMyOrders(orders));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);