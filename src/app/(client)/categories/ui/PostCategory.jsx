"use client";
import { useState } from "react";

function PostCategory() {
	const [category, setCategory] = useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("/api/categories/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ category }),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Nom de la categorie</label>
			<input type="text" id="name" name="name" onChange={handleChange} />
			<button type="submit">Go 🏁</button>
		</form>
	);
}

export default PostCategory;
