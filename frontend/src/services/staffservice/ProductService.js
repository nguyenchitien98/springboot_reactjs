import { PRODUCT_API } from "../../constants/api";

let base64 = require("base-64")
class ProductService {

    findAll = (page, status, auth) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        return fetch(PRODUCT_API+"?page=" + page + "&status=" + status, requestOptions)
    }

    changeStatus = (product, auth) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        product.status = Number(!product.status)
        var raw = JSON.stringify(product);
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch(PRODUCT_API, requestOptions)
    }

    addProduct = (product, auth) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(product);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch(PRODUCT_API, requestOptions)
    }


    updateProduct = (product, auth) => {
        var myHeaders = new Headers();
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(product);
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch(PRODUCT_API, requestOptions)
    }

}

export default new ProductService();