import React, { Component } from "react";
import { connect } from "react-redux"
import * as actions from "../../actions/index"
import MyOrdersService from "../../services/guestservice/MyOrdersService";
class MyOrderItem extends Component {

    removeOrder = () => {
        let confirm = window.confirm("Are you sure ?")
        if (confirm) {
            let { auth, myOrderItem } = this.props;
            myOrderItem.status = 3;
            MyOrdersService.removeOrder(auth.username, auth.password, myOrderItem)
                .then(response => response.text())
                .then(result => {
                    this.props.removeOrder(myOrderItem);
                })
                .catch(error => console.log('error', error));
        }
    }

    render() {
        let { myOrderItem } = this.props
        let status = "";
        if (myOrderItem.status === 0) {
            status = "Ordering"
        }
        else if (myOrderItem.status === 1) {
            status = "Complete"
        }
        return (
            <tr>
                <th>{myOrderItem.id}</th>
                <th>{myOrderItem.accountId}</th>
                <th>{myOrderItem.createDate}</th>
                <th>{myOrderItem.address}</th>
                <th>{status}</th>
                <td className="text-center ps-0 pe-0"><i className="bi bi-eye btnViewMore"></i></td>
                <td className="text-center ps-0 pe-0">{myOrderItem.status === 0 ? <i className="bi bi-x-circle btnCancle" onClick={this.removeOrder}></i> : ""}</td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeOrder: order => {
            dispatch(actions.removeOrder(order))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderItem);