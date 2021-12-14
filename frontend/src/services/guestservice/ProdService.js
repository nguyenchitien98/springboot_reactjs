class ProductService {

    url = "http://localhost:8080/guest/product"

    

    findAll = () => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "JSESSIONID=9FB3009B4BDB3816104D0ED9EC36A19F");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        return fetch("http://localhost:8080/guest/product", requestOptions)
    }

    findByCategory = (cateid) => {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "JSESSIONID=9FB3009B4BDB3816104D0ED9EC36A19F");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        return fetch("http://localhost:8080/guest/product/findbycate/" + cateid, requestOptions)
    }
}

export default new ProductService();