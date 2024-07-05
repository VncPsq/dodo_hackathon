"use client";
import { useState, useEffect } from "react";

function PostService({ isSubmit, setIsSubmit }) {
	const [categories, setCategories] = useState([]);
	const [priority, setPriority] = useState([]);
	const user = localStorage.getItem("user");

	const fetchCategories = async () => {
		try {
			const res = await fetch("/api/categories");
			const data = await res.json();
			setCategories(data);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchPriority = async () => {
		try {
			const res = await fetch("/api/priorities");
			const data = await res.json();
			setPriority(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchCategories();
		fetchPriority();
	}, []);

	const [service, setService] = useState({
		title: "",
		content: "",
		expiration: "",
		categoryID: 1,
		ownerID: JSON.parse(user)?.id,
		priorityID: 1,
	});

	const handleChange = (event) => {
		setService({
			...service,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await fetch("/api/services", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(service),
			});
			setIsSubmit(!isSubmit);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-10/12 mx-auto p-4 my-5 bg-white rounded-lg shadow-md"
		>
			<h2 className="text-2xl font-semibold mb-4">J'ai une demande !</h2>
			<div className="mb-4">
				<label
					htmlFor="categoryID"
					className="block text-sm font-medium text-gray-700"
				>
					Catégorie
				</label>
				<select
					id="categoryID"
					name="categoryID"
					onChange={handleChange}
					className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>
			<div className="mb-4">
				<label
					htmlFor="priorityID"
					className="block text-sm font-medium text-gray-700"
				>
					Priorité
				</label>
				<select
					id="priorityID"
					name="priorityID"
					onChange={handleChange}
					className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				>
					{priority.map((priority) => (
						<option key={priority.id} value={priority.id}>
							{priority.name}
						</option>
					))}
				</select>
			</div>
			<div className="mb-4">
				<label
					htmlFor="title"
					className="block text-sm font-medium text-gray-700"
				>
					Titre
				</label>
				<input
					type="text"
					id="title"
					name="title"
					onChange={handleChange}
					className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="content"
					className="block text-sm font-medium text-gray-700"
				>
					Contenu
				</label>
				<textarea
					id="content"
					name="content"
					onChange={handleChange}
					className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<div className="mb-4">
				<label
					htmlFor="expiration"
					className="block text-sm font-medium text-gray-700"
				>
					Expiration
				</label>
				<input
					type="date"
					id="expiration"
					name="expiration"
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

export default PostService;
