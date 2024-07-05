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
		<form
			onSubmit={handleSubmit}
			className="w-10/12 mx-auto p-4 bg-white rounded-lg shadow-md my-10"
		>
			<h2 className="text-2xl font-semibold mb-4">
				Ajouter une Catégorie
			</h2>
			<div className="mb-4">
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700"
				>
					Nom de la catégorie
				</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={handleChange}
					className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<button
				type="submit"
				className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Go 🏁
			</button>
		</form>
	);
}

export default PostCategory;
