let base64 = require("base-64")

class MyOrdersService {

    findAll = (username, password) => {
        let myHeaders = new Headers();
        myHeaders.append("Cookie", "JSESSIONID=32AA9655D2E2801D58EBE81A961C4AE6");
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/guest/order?username=" + username + "&password=" + password, requestOptions)
    }

    addOrder = (username, password, order) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=32AA9655D2E2801D58EBE81A961C4AE6");
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);
        let raw = JSON.stringify(order);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/guest/order", requestOptions)
    }

    addOrderDetail = (orderDetails) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=32AA9655D2E2801D58EBE81A961C4AE6");

        let raw = JSON.stringify(orderDetails);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/guest/orderdetail", requestOptions)
    }

    removeOrder = (username, password, order) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=32AA9655D2E2801D58EBE81A961C4AE6");
        var token = localStorage.getItem('token')
        myHeaders.append("Authorization", "Bearer " + token);

        var raw = JSON.stringify(order);
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/guest/order", requestOptions)     
    }

}

export default new MyOrdersService();