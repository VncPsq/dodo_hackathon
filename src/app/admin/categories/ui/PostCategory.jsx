"use client";
import { useState } from "react";

function PostCategory({ isSubmit, setIsSubmit }) {
	const [category, setCategory] = useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await fetch("/api/categories", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ category }),
			});

			setIsSubmit(!isSubmit);
		} catch (error) {
			console.error(error);
		}
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
