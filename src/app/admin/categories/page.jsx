"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import PostCategory from "./ui/PostCategory";
function Categories() {
	const [categories, setCategories] = useState(null);
	const [isSubmit, setIsSubmit] = useState(false);
	const { user } = useAuth();

	if (JSON.parse(user) === null || JSON.parse(user).role !== "ADMIN") {
		window.location.href = "/";
	}

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch("/api/categories", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setCategories(data);
		};
		fetchCategories();
	}, [isSubmit]);

	return (
		<>
			<h1>Ajout de la priorité</h1>
			<PostCategory isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
			<section>
				<h2>Toutes les priorités</h2>
				{categories && (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nom</th>
								<th>Gérer</th>
							</tr>
						</thead>
						<tbody>
							{categories.map((priority) => (
								<tr key={priority.id}>
									<td>{priority.id}</td>
									<td>{priority.name}</td>
									<td>
										<button>Editer</button>
										<button>Supprimer</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</section>
		</>
	);
}

export default Categories;
