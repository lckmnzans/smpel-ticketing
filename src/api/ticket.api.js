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
    },
    getTickets: (userId, ticketId) => {
        const url = new URL(`/api/v1/ticket/${userId}`, 'http://localhost:8080')
        const params = new URLSearchParams();
        if (ticketId) params.append('ticketId', ticketId);
        if (Array.from(params).length > 0) {
            url.search = params.toString();
        }
        
        return {
            method: 'GET',
            url: url.toString(),
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
    }
}