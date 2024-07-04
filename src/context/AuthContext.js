"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(storedUser);
		}
	}, []);

	const login = async (email, password) => {
		try {
			const res = await fetch("/api/users?q=login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (res.ok) {
				const data = await res.json();
				console.log(data);
				setUser(data.token);
				localStorage.setItem("user", JSON.stringify(data.token));
				// window.location.replace("/");
			} else {
				throw new Error("Invalid credentials");
			}
		} catch (err) {
			throw new Error(err.message);
		}
	};

	const logout = () => {
		console.log("logout");
		setUser(null);
		localStorage.removeItem("user");
		window.location.replace("/login");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
