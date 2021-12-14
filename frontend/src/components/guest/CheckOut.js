import { Component } from "react";
import { connect } from "react-redux"
import MyOrdersService from "../../services/guestservice/MyOrdersService";

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            orderID: -1
        }
    }

    onChange = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    order = (event) => {
        event.preventDefault();
        if (this.state.address === "") {
            alert("Address is requierd")
            return false;
        }

        let order = {
            "id": -1,
            "accountId": this.props.auth.id,
            "createDate": new Date(),
            "address": this.state.address,
            "status": 0
        }

        MyOrdersService.addOrder(this.props.auth.username, this.props.auth.password,order)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                let order = JSON.parse(result);
                let {cart} = this.props;
                let orderDetailList = cart.map(val => {
                    return {
                        "id": -1,
                        "orderId": order.id,
                        "productId": val.prod.id,
                        "price": val.prod.price,
                        "size": val.size,
                        "quantity": val.qty
                    }
                })
                for (let o of orderDetailList) {
                    MyOrdersService.addOrderDetail(o)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                }
            })
            .catch(error => console.log('error', error))
            .finally(() => {
                alert("Đặt hành thành công!")
            });

        // GuestService.order({
        //     id: "",
        //     createDate: "",
        //     address: this.state.address,
        //     status: 0,
        //     userID: this.props.auth.id
        // }).then(res => {
        //     var { cart } = this.props;
        //     var orderdetails = cart.map(val => {
        //         return {
        //             id: "",
        //             price: val.prod.price,
        //             quantity: val.qty,
        //             size: val.size,
        //             orderID: res.data.id,
        //             productID: val.prod.id
        //         }
        //     })

        //     GuestService.orderdetails(orderdetails).then(res => {
        //         console.log(res.data)
        //     }).catch(err => {
        //         console.log(err)
        //     })

        //     alert("Order Complete")
        // }).catch(err => {

        // })

    }

    render() {
        var {auth} = this.props
        var { cart } = this.props
        var subTotal = 0;
        cart.map((val) => {
            subTotal += val.prod.price * val.qty
        })
        return (
            <form className='mt-5'>
                <div className="row">
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <div>
                            <h4>Order Summary</h4>
                            <table className='w-100 mb-4'>
                                <tbody>
                                    <tr className='border border-start-0 border-end-0 border-top-1 border-bottom-1'>
                                        <td className='row pt-3'>
                                            <div className='col-6 text-start pb-3'>Sale</div>
                                            <div className='col-6 text-end pb-3'>0%</div>
                                            <div className='col-6 text-start pb-3'>Shipping</div>
                                            <div className='col-6 text-end pb-3'>FREE</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Total: {subTotal}$</h4>
                            {/* <Link className="mt-3 p-0 pt-2 btn w-100 rounded-0" style={{backgroundColor:'#ADA3A0'}} to="/order">
                              <h5 style={{ color: 'white' }}><i className="bi bi-bag-fill pe-2"></i>Checkout</h5>
                            </Link> */}
                        </div>
                        <div>
                            <label>Hello: {auth.username}</label>
                            <br></br>
                            <input className="form-control border border-3 rounded-0 mt-3" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.onChange}></input>

                            <button className="mt-3 p-0 pt-2 btn w-100 rounded-0" style={{ backgroundColor: '#ADA3A0' }} onClick={this.order}>
                                <h5 style={{ color: 'white' }}><i className="bi bi-bag-fill pe-2"></i>Order</h5>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(CheckOut);