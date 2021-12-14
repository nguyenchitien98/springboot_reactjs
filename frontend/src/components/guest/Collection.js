import { Component } from "react";
import "../../css/collection.css"
import CateService from "../../services/guestservice/CateService";
import ProdService from "../../services/guestservice/ProdService";
import CollectionItem from "./CollectionItem";

class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cates: []
        }
    }

    componentDidMount = () => {
        this.findAll();
        this.findCates();
    }

    findCates = () => {
        CateService.findAll()
        .then(response => response.text())
        .then(result => {
            this.setState({
                cates: JSON.parse(result)
            })
        })
        .catch(error => console.log('error', error));
    }

    findAll = () => {
        ProdService.findAll()
            .then(response => response.text())
            .then(result => {
                this.setState({
                    products: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    onFilter = (event) => {
        if (event.target.value !== "-1") {
            ProdService.findByCategory(event.target.value)
                .then(response => response.text())
                .then(result => {
                    this.setState({
                        products: JSON.parse(result)
                    })
                })
                .catch(error => console.log('error', error));
        }
        else this.findAll();
    }

    render() {

        var { products, cates } = this.state;


        var prods = products
        .filter(value => {
            return value.status === 1
        })
        .map((val, ind) => {
            return <CollectionItem key={ind} prod={val} />
        })

        var options = cates.map((val, ind) => {
            return <option key={ind} value={val.id}>{val.name}</option>
        })

        return (
            <div className='row mt-5'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <span>Trang chủ/Bộ sưu tập</span>
                        </div>
                        <div className='col-md-6 text-end'>
                            <select className='selectbox' onChange={this.onFilter}>
                                <option value={-1}>Tất cả</option>
                                {options}
                            </select>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        {prods}
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        );
    }
}

export default Collection;