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
    },
    getAllTickets: () => {
        return {
            method: 'GET',
            url: `http://localhost:8080/api/v1/ticket`,
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
    },
    getTicketAttachment: (ticketId) => {
        return {
            method: 'GET',
            url: `http://localhost:8080/api/v1/ticket?ticketId=${ticketId}`,
            responseType: 'blob',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
    },
    updateTicket: (ticketId, adminId, response) => {
        return {
            method: 'PATCH',
            url: `http://localhost:8080/api/v1/ticket/${ticketId}`,
            data: {
                pengomentar: response.pembalas,
                komentar: response.balasan
            },
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
            }
        }
    },
    updateTicketWithDocAttachment: (ticketId, document) => {
        const formData = new FormData();
        formData.append('ticketId', ticketId);
        formData.append('file', document);

        return {
            method: 'POST',
            url: `http://localhost:8080/api/v1/ticket/doc`,
            data: formData,
            headers: {
                "content-type": "multipart/form-data",
                "authorization": "Bearer " + localStorage.getItem('accessToken')
            }
        }
    }
}