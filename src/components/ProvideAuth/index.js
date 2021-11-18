import React, { useContext, createContext, useState } from "react";
import { authenticate, isAuthenticated, logout } from "../../service/login";

const authContext = createContext();

function useProvideAuth() {
	const [authenticated, setAuthenticated] = useState(false);

	const signin = async (username, password, cb) => {
		const response = await authenticate(username, password);
		setAuthenticated(response);
		if (response) {
			cb();
		}
	};

	const signout = cb => {
		logout();
		setAuthenticated(false);
		cb();
	};

	const verifyLogin = cb => {
		if (authenticated) return;
		isAuthenticated()
			.then(
				(resp => {
					setAuthenticated(resp);
					cb();
				})
			)
			.catch(
				(err) => { console.log(err) }
			)
	};

	return {
		authenticated,
		signin,
		signout,
		verifyLogin
	};
}



export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return (
		<authContext.Provider value={auth}>
			{children}
		</authContext.Provider>
	);
}


export function useAuth() {
	return useContext(authContext);
}