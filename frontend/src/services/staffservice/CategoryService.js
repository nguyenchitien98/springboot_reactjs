let base64 = require("base-64")
class CategoryService {

  findAll = (auth) => {
    var myHeaders = new Headers();
    var token = localStorage.getItem('token')
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    return fetch("http://localhost:8080/staff/category", requestOptions)

  }


  findById = (id, auth) => {
    var myHeaders = new Headers();
    var token = localStorage.getItem('token')
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    return fetch("http://localhost:8080/staff/category/" + id, requestOptions);
  }
}

export default new CategoryService();