"use client";

import { useEffect, useState } from "react";
import PostCategory from "./ui/PostCategory";

function Categories() {
	const [allCategories, setAllCategories] = useState([]);
	useEffect(() => {
		fetch("/api/categories")
			.then((response) => response.json())
			.then((data) => setAllCategories(data.categories))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<h1>Ajout de la categorie</h1>
			<PostCategory />
			<section>
				<h2>Toutes les categorie</h2>
				{allCategories && (
					<ul>
						{allCategories.map((category) => (
							<li key={category.id}>{category.name}</li>
						))}
					</ul>
				)}
			</section>
		</>
	);
}

export default Categories;
