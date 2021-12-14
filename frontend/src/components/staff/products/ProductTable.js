import { Component } from "react";
import ProductItem from "./ProductItem";
import * as actions from "../../../actions/index"
import { connect } from "react-redux"

class ProductTable extends Component {

  next = () => {
    this.props.next();
  }

  prev = () => {
    this.props.prev();
  }

  render() {

    var { products } = this.props

    var element = products.map((val, ind) => {
      return <ProductItem key={ind} product={val} onEdit={this.props.onEdit} />
    })

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Create date</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col" colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {element}
          </tbody>
        </table>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item">
              <span className="page-link" onClick={this.prev}>Previous</span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">{this.props.page + 1}</span>
            </li>
            <li className="page-item">
              <span className="page-link" onClick={this.next}>Next</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStatusProduct: product => {
      dispatch(actions.changeStatusProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable)