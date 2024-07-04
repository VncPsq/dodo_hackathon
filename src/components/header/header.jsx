"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const userConnected = localStorage.getItem("user");
			if (userConnected) {
				setIsLogged(true);
				const user = JSON.parse(userConnected);
				if (user.role === "ADMIN") {
					setIsAdmin(true);
				}
			}
		}
	}, []);

	const { logout } = useAuth();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header
			className="relative bg-cover bg-center text-white py-4 shadow-lg"
			style={{
				backgroundImage:
					"url('https://arilcambresis.com/wp-content/uploads/2022/10/devenir-aide-a-domicile-e1688538697902-667x551.jpg')",
				height: "400px",
				backgroundOrigin: "cover",
				backgroundPosition: "top",
			}}
		>
			<div className="absolute inset-0 bg-black opacity-50"></div>
			<div className="container mx-auto relative z-10 flex justify-between items-center px-4 md:px-0">
				<div className="text-xl font-bold tracking-wide">
					<h1 className="text-2xl md:text-4xl font-extrabold text-yellow-300 drop-shadow-lg font-maven">
						UniVersTous
					</h1>
				</div>
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="focus:outline-none flex items-center justify-center p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition duration-300"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>
				<nav className="hidden md:flex space-x-4">
					<Link href="/" legacyBehavior>
						<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300 font-montserrat">
							Accueil
						</a>
					</Link>
					{isAdmin && (
						<>
							<Link href="/admin/categories" legacyBehavior>
								<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Categories
								</a>
							</Link>
							<Link href="/admin/priorities" legacyBehavior>
								<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Priorities
								</a>
							</Link>
						</>
					)}

					{isLogged ? (
						<>
							<Link href="/services" legacyBehavior>
								<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Services
								</a>
							</Link>
							<button
								onClick={logout}
								className="mt-2 md:mt-0 px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 transition duration-300"
							>
								Logout
							</button>
						</>
					) : (
						<>
							<Link href="/login" legacyBehavior>
								<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Login
								</a>
							</Link>
							<Link href="/register" legacyBehavior>
								<a className="mt-2 md:mt-0 px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Register
								</a>
							</Link>
						</>
					)}
				</nav>
			</div>
			{isOpen && (
				<div className="md:hidden mt-4 px-4 flex flex-col space-y-2 relative z-20">
					<Link href="/" legacyBehavior>
						<a className="block px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
							Accueil
						</a>
					</Link>
					{isAdmin && (
						<>
							<Link href="/admin/categories" legacyBehavior>
								<a className="block px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Categories
								</a>
							</Link>
							<Link href="/admin/priorities" legacyBehavior>
								<a className="block px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
									Priorities
								</a>
							</Link>
						</>
					)}
					<Link href="/register" legacyBehavior>
						<a className="block px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
							Register
						</a>
					</Link>
					{isLogged ? (
						<button
							onClick={logout}
							className="block px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 transition duration-300"
						>
							Logout
						</button>
					) : (
						<Link href="/login" legacyBehavior>
							<a className="block px-2 py-1 rounded-md hover:bg-blue-700 transition duration-300">
								Login
							</a>
						</Link>
					)}
				</div>
			)}
		</header>
	);
}

export default Header;
