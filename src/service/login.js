import backend from './backend'

export async function authenticate(username, password) {
	try {
		var response = await backend.post('/authenticate',
			{
				"username": username,
				"password": password
			})
		if (response.status === 200) {
			localStorage.setItem('@minhaudocao/token', response.data.jwt);
			window.location.reload();
			return true;
		}
	} catch (error) {
		console.log("Erro ao se autenticar" + error);
		return false;
	}
}

export const logout = () => {
	localStorage.removeItem('@minhaudocao/token');
	window.location.reload();
}


export const isAuthenticated = async () => {
	var jwt = require('jsonwebtoken');
	const token = localStorage.getItem('@minhaudocao/token');
	if (!token) {
		return false;
	}
	var decodedToken = jwt.decode(token, { complete: true });
	var dateNow = new Date();
	if (decodedToken.exp < dateNow.getTime()) {
		return false;
	}

	var resp = await backend.post('/isvalidtoken')
	if (resp.status === 200) {
		return true;
	} else {
		return false;
	}

}