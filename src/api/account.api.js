const baseUrl = window.location.origin;
export default {
    login: (user) => {
        return {
            method: 'POST',
            url: `http://localhost:8080/api/v1/account/login`,
            data: {
                'email': user.email,
                'password': user.password
            },
            headers: {
                'content-type': 'application/json'
            }
        }
    }
}