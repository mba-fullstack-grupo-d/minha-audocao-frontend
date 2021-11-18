import React, { useState, useEffect } from "react";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import Home from "../../pages/Home"
import { ReactComponent as HomeSvg } from '../../icons/svg/home.svg';
import { ReactComponent as AdoptSvg } from '../../icons/svg/adopt.svg';
import { ReactComponent as EventSvg } from '../../icons/svg/event.svg';
import { ReactComponent as InstitutionSvg } from '../../icons/svg/institution.svg';

import { useAuth, ProvideAuth } from "../ProvideAuth";


export default function Header() {
	return (
		<div class="bg-matheme-champagne">
			<ProvideAuth>
				<Router>
					<nav class="grid grid-cols-12 items-center justify-center p-2 bg-matheme-hotpink">
						<Link class="font-logo col-start-2 col-span-1" to="/">Minha Audoção</Link>
						<Link class="text-black hover:text-opacity-50 col-span-1" to="/">
							<div class="grid grid-cols-1 justify-items-center">
								<HomeSvg class="w-6 h-6" />
								<p class="text-xs">Inicio</p>
							</div>
						</Link>
						<Link class="text-black hover:text-opacity-50 col-span-1" to="/">
							<div class="grid grid-cols-1 justify-items-center">
								<AdoptSvg class="w-6 h-6" />
								<p class="text-xs">Adote</p>
							</div>
						</Link>
						<Link class="text-black hover:text-opacity-50 col-span-1" to="/">
							<div class="grid grid-cols-1 justify-items-center">
								<EventSvg class="w-6 h-6" />
								<p class="text-xs">Eventos</p>
							</div>
						</Link>
						<Link class="text-black hover:text-opacity-50 col-span-1" to="/">
							<div class="grid grid-cols-1 justify-items-center">
								<InstitutionSvg class="w-6 h-6" />
								<p class="text-xs">Instituições</p>
							</div>
						</Link>
						<Link class="text-black hover:text-opacity-50 col-start-10 col-span-1" to="/">
							<p class="text-lg">Entrar</p>
						</Link>
						<Link class="text-white hover:text-opacity-50 col-span-1" to="/">
							<p class="text-lg bg-matheme-pink text-center p-2">Criar Conta</p>
						</Link>
					</nav>

					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</Router>
			</ProvideAuth>
		</div>
	);
}

function PrivateMenu() {
	let auth = useAuth();
	auth.verifyLogin(() => { })
	const response = auth.authenticated ? (
		<>
			<Link to="/flow">Flow</Link>
			<Link to="/chats">Chats</Link>
		</>
	) : (
		<Link to="/login">Login</Link>
	);
	return response
}

function PrivateRoute({ children, ...rest }) {
	let auth = useAuth();
	auth.verifyLogin(() => { })
	let resp = auth.authenticated ? (
		children
	) : (<></>)

	return (
		<Route
			{...rest}
			render={({ location }) => resp}
		/>
	);
}

function PublicRoute({ children, ...rest }) {
	let auth = useAuth();
	auth.verifyLogin(() => { })
	let resp = auth.authenticated ? (
		<></>
	) : (children)

	return (
		<Route
			{...rest}
			render={({ location }) => resp}
		/>
	);
}