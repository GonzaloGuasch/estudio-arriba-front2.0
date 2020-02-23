import axios from 'axios';

const server = 'http://localhost:8080/';

const request = (type, path, body) => axios
    .request({ url: `${server}${path}`, method: type, data: body })
    .then(req => req.data);

export const login = body => request('post', 'usuarie/checkLogin', body);