import React, { Component } from 'react'
import CategoryDetail from './CategoryDetail'
import CategoryTable from './CategoryTable'

export default class CategoryIndex extends Component {

    constructor (props) {
        super(props);
        this.state = {
            action : -1
        }
    }

    onAdd = () => {
        this.changeAction(0)
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

    render() {
        var {action} = this.state
        var formElement = action === -1 ? "" :  
            <div className="col-md-4">
                <CategoryDetail onCancel={this.onCancel}/>
            </div>
        return (
            <div>
                <h1>We will update later</h1>
            </div>
            // <div className="row">
            //     <div className={action === -1 ? "" : "col-8"}>
            //         <button className="btn btn-success mb-3" onClick={this.onAdd}>Add new Category</button>
            //         <button className="btn btn-success mb-3 ms-3">View recycle bin</button>
            //         <CategoryTable onEdit={this.onEdit}/>
            //     </div>
            //     {formElement}
            // </div>
        )
    }
}
