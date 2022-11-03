import axios from 'axios';

const request = axios.create({
    baseURL: 'http://wpplagiarism.com/v1/',
    withCredentials : true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Content-type": "application/json",
    },
});

export default request;
