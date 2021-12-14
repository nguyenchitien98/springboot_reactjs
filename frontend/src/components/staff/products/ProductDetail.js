import React, { Component } from 'react'
import { connect } from "react-redux"
import CategoryService from '../../../services/staffservice/CategoryService';
import * as actions from "../../../actions/index"
import ProductService from '../../../services/staffservice/ProductService';
import axios from 'axios';
class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            file: null,
        }
    }

    componentDidMount = () => {
        this.getCategories();
    }

    getCategories = () => {
        CategoryService.findAll(this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    categories: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }


    validate = (product) => {
        if (product.name === "") {
            alert("name is requierd!");
            return false;
        }
        if (Number(product.price) <= 0 || product.price === "") {
            alert("price is not valid!");
            return false;
        }
        if (Number(product.categoryId) === -1) {
            alert("category is requierd!");
            return false;
        }   
        
        return true;
    }

    onchange = (event) => {
        this.props.setProductDetail({
            "id": this.props.productDetail.id,
            "name": event.target.name === "name" ? event.target.value : this.props.productDetail.name,
            "image": this.props.productDetail.image,
            "price": event.target.name === "price" && Number(event.target.value) > 0 ? event.target.value : this.props.productDetail.price,
            "createDate": this.props.productDetail.createDate,
            "status": event.target.name === "status" ? event.target.value : this.props.productDetail.status,
            "categoryId": event.target.name === "categoryId" ? event.target.value : this.props.productDetail.categoryId,
        })
    }

    addProduct = () => {
        if (this.state.file === null) {
            alert("image is requierd!");
            return false;
        }
        let { productDetail } = this.props;
        productDetail.image = this.state.file.name
        ProductService.addProduct(this.props.productDetail, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.addProduct(JSON.parse(result));
                this.upload();
                alert("Complete")
            })
            .catch(error => console.log('error', error));
    }

    updateProduct = () => {
        let { productDetail } = this.props;
        if (this.state.file !== null) {
            productDetail.image = this.state.file.name
        }
        ProductService.updateProduct(productDetail, this.props.auth)
            .then(response => response.text())
            .then(result => {
                this.props.updateProduct(JSON.parse(result))
                if(this.state.file !== null) {
                    this.upload();
                }
                alert("Complete")
            })
            .catch(error => console.log('error', error));
    }

    onChangeImage = (event) => {
        if (event.target.files[0] !== undefined) {
            if (event.target.files[0].type.includes("image")) {
                this.setState({
                    file: event.target.files[0]
                })
            }
            else {
                alert("Choose image only !");
                this.setState({
                    file: null
                })
            }
        }
        else {
            alert("Choose image only !");
            this.setState({
                file: null
            })
        }
    }

    upload = () => {
        var data = new FormData();
        data.append("files", this.state.file);

        axios.post("http://localhost:8080/file/save", data,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })
            .then(res => console.log(res))
            .catch(err => {
                alert("Serve is not response: " + err)
            })
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validate(this.props.productDetail)) {
            var { action } = this.props;
            action === 0 ? this.addProduct() : this.updateProduct();
        }
    }

    removeFile = (event) => {
        event.preventDefault();
        document.getElementById('img').value = "";
        this.setState({
            file: null
        })
    }

    render() {
        var { productDetail } = this.props
        var { categories } = this.state

        var categoriesElement = categories.map((val, ind) => {
            return <option key={ind} value={val.id}>{val.name}</option>
        })

        return (
            <form>
                <h5>{this.props.action === 0 ? "Add product" : "Update product"}</h5>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={this.onchange} value={productDetail.name} />
                </div>
                <div className="mb-2 row">
                    <div className="col">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select className="form-select" aria-label="Default select example" name="categoryId" onChange={this.onchange} value={productDetail.categoryId}>
                            <option value="-1">Choose Category</option>
                            {categoriesElement}
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input className="form-control" type="number" id="price" name="price" onChange={this.onchange} value={productDetail.price} />
                    </div>
                </div>
                <div className="mb-2 row">
                    <div className="col">
                        <label htmlFor="createdate" className="form-label">Create date</label>
                        <input className="form-control" type="text" id="createdate" readOnly value={productDetail.createDate} />
                    </div>
                    <div className="col">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-select" aria-label="Default select example" name="status" onChange={this.onchange} value={productDetail.status}>
                            <option value="1">Active</option>
                            <option value="0">Unactive</option>
                        </select>
                    </div>
                </div>
                <div className="mb-2 row">
                    <div className="col">
                        <label className="form-label">Image</label>
                        <br></br>
                        <img className='w-100' alt="i am an" src={"http://localhost:8080/file/read/" + productDetail.image} ></img>
                    </div>
                    <div className="col">
                        <label htmlFor="image" className="form-label">Choose image</label>
                        <input id="img" type="file" className="form-control" name="image" onChange={this.onChangeImage}></input>
                        <button className="btn" onClick={this.removeFile}><i className="bi bi-x-circle"></i></button>
                    </div>
                </div>
                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <button type="submit" className="btn btn-primary me-2" onClick={this.onSubmit}>Submit</button>
                <button type="submit" className="btn btn-danger" onClick={this.props.onCancel}>Cancel</button>
                
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        productDetail: state.productDetail,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductDetail: product => {
            dispatch(actions.setProductDetail(product))
        },
        addProduct: product => {
            dispatch(actions.addProduct(product))
        },
        updateProduct: product => {
            dispatch(actions.updateProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);