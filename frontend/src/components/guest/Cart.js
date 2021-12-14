import { Component } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
class Cart extends Component {

    render() {
        var { cart } = this.props
        var subTotal = 0;
        var element = cart.map((val, ind) => {
            subTotal += val.prod.price * val.qty
            return <CartItem key={ind}
                cartItem={val}
                deleteFromCart={this.props.deleteFromCart}
                updateCart={this.props.updateCart}
            />
        })
        return (
            <div className='row m-0 mt-5'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div>
                                <h4>Giỏ hàng</h4>
                                <table>
                                    <tbody>
                                        {element}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <h4>Thông tin đơn hàng</h4>
                            <table className='w-100 mb-4'>
                                <tbody>
                                    <tr className='border border-start-0 border-end-0 border-top-1 border-bottom-1'>
                                        <td className='row pt-3'>
                                            <div className='col-6 text-start pb-3'>Thành tiền</div>
                                            <div className='col-6 text-end pb-3'>{subTotal}$</div>
                                            <div className='col-6 text-start pb-3'>Tiền ship</div>
                                            <div className='col-6 text-end pb-3'>FREE</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Tạm tính: {subTotal}$</h4>
                            <Link className="mt-3 p-0 pt-2 btn w-100 rounded-0" style={{ backgroundColor: '#ADA3A0' }} to="/sges/checkout">
                                <h5 style={{ color: 'white' }}><i className="bi bi-bag-fill pe-2"></i>Đến trang thanh toán</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);