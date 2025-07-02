const baseUrl = window.location.origin;
export default {
    addTicket: (data, token) => {
        return {
            method: 'POST',
            url: `http://localhost:8080/api/v1/ticket/add`,
            data: data,
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + token
            }
        }
    }
}