import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail'
import ProductTable from './ProductTable'
import * as actions from "../../../actions/index"
import ProductService from '../../../services/staffservice/ProductService';

class ProductIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: -1,
            status: 1,
            btn: 'View Recycle bin',
            page: 0
        }
    }

    componentDidMount = () => {
        ProductService.findAll(0, 1, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.setProducts(JSON.parse(result))
            })
            .catch(error => console.log('error', error));
    }

    onAdd = () => {
        this.changeAction(0);
        this.props.setProductDetail({
            "id": -1,
            "name": "",
            "image": "",
            "price": 1,
            "createDate": new Date(),
            "status": 1,
            "categoryId": -1
        })
    }

    onEdit = () => {
        this.changeAction(1)
    }

    onCancel = () => {
        this.changeAction(-1)
    }

    changeAction = (action) => {
        this.setState({
            action: action
        })
    }

    next = () => {
        ProductService.findAll(this.state.page + 1, this.state.status, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.setProducts(JSON.parse(result))
                this.setState({
                    page: this.state.page + 1,
                })
            })
            .catch(error => console.log('error', error));

    }

    prev = () => {
        if (this.state.page > 0) {
            ProductService.findAll(this.state.page - 1, this.state.status, this.props.auth)
                .then(response => response.text())
                .then(result => {
                    this.props.setProducts(JSON.parse(result))
                    this.setState({
                        page: this.state.page - 1,
                    })
                })
                .catch(error => console.log('error', error));

        }
    }


    onViewRecycle = () => {
        ProductService.findAll(0, 0, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.setProducts(JSON.parse(result))
            })
            .catch(error => console.log('error', error));
        this.setState({
            btn: "View Active Product",
            status: 0,
            page: 0
        })
    }

    onViewActive = () => {
        ProductService.findAll(0, 1, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.setProducts(JSON.parse(result))
            })
            .catch(error => console.log('error', error));
        this.setState({
            btn: "View Recycle bin",
            status: 1,
            page: 0
        })
    }

    render() {
        var { action } = this.state
        var formElement = action === -1 ? "" :
            <div className="col-md-4">
                <ProductDetail onCancel={this.onCancel} action={this.state.action} />
            </div>
        return (
            <div className="row">
                <div className={action === -1 ? "" : "col-8"}>
                    <button className="btn btn-primary mb-3" onClick={this.onAdd}>Add new product</button>
                    <button className="btn btn-primary mb-3 ms-3" onClick={this.state.status === 1 ? this.onViewRecycle : this.onViewActive}>{this.state.btn}</button>
                    <ProductTable onEdit={this.onEdit} next={this.next} prev={this.prev} page={this.state.page} />
                </div>
                {formElement}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        products: state.products,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProducts: products => {
            dispatch(actions.setProducts(products))
        },
        setProductDetail: product => {
            dispatch(actions.setProductDetail(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)