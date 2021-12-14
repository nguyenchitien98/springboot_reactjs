import React, { Component } from 'react'

export default class CategoryItem extends Component {
    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>prod1.png</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td className="text-center ps-0 pe-0"><button className="btn btn-warning" onClick={this.props.onEdit}><i className="bi bi-pen"></i></button></td>
                <td className="text-center ps-0 pe-0"><button className="btn btn-danger"><i className="bi bi-trash"></i></button></td>
            </tr>
        )
    }
}
