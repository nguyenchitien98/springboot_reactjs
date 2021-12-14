class CateService {

    url = "http://localhost:8080/guest/category";

    findAll = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        return fetch(this.url, requestOptions)
    }

}

export default new CateService();