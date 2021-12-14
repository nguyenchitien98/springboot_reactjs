import { Component } from "react";
import {
    Link
} from 'react-router-dom'
import "../../css/collectionitem.css"
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

class CollectionItem extends Component {

    setProdDetail = () => {
        this.props.setProdDetail(this.props.prod)
    }

    render() {
        var { prod } = this.props
        return (
            <div className="col-md-3 ps-2 pe-2 text-center mb-3">
                <div>
                    <div className="prod-card">
                        <img src={"http://localhost:8080/file/read/" + prod.image} alt="Avatar" className="prod-img" />
                        <div className="overlay">
                            <div className="btn-quickview w-100">
                                <Link onClick={this.setProdDetail} to='/sges/productdetail' className="btn rounded-0 bg-light w-100 p-3" style={{ opacity: '0.7' }}>
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-start">
                    <h6 className="fts-normal">{prod.name}</h6>
                    <span>$ {prod.price}</span>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProdDetail: prod => {
            dispatch(actions.setProdDetail(prod))
        }
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)