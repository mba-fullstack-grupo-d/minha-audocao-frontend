import axios from 'axios';

const instance =  axios.create({
	baseURL: 'http://localhost:8080/api/'
});


const token = localStorage.getItem('@minhaudocao/token');
if (token) {
	instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
} else {
	instance.defaults.headers.common['Authorization'] = null;
}


export default instance