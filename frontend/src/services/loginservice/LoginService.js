class LoginService {

    login = (username, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "JSESSIONID=394C400E2B0A4ACEFA363F2A5C6D50DC");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch("http://localhost:8080/login?username="+username+"&password="+password, requestOptions)
    }

    getRole = (auth) => {

    }

}

export default new LoginService();