"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

function Header() {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setIsLogged(true);
			if (JSON.parse(user).role === "ADMIN") {
				setIsAdmin(true);
			}
		}
	}, []);

	const { logout } = useAuth();

	return (
		<header className="bg-gray-800 text-white py-4">
			<div className="container mx-auto text-center">
				<p className="text-sm">Dodo Team</p>
			</div>
			<nav>
				<Link href="/">Accueil</Link>
				{isAdmin ? (
					<>
						<Link href="/admin/categories">Categories</Link>
						<Link href="/admin/priorities">Priorities</Link>
					</>
				) : null}

				<div>
					<Link href="/register">Register</Link>
					{isLogged ? (
						<>
							<button onClick={logout}>Logout</button>
							<Link href="/services">Services</Link>
						</>
					) : (
						<Link href="/login">login</Link>
					)}
				</div>
			</nav>
		</header>
	);
}

export default Header;
