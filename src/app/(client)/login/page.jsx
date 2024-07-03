"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { login } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(email, password);
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
};

export default LoginPage;
