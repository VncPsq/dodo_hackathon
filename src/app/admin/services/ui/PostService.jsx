"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function PostService({ isSubmit, setIsSubmit }) {
	const [categories, setCategories] = useState([]);
	const [priority, setPriority] = useState([]);
	const user = localStorage.getItem("user");
	const notify = () => toast.success("Le service est bien ajoutée !");

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
			notify();
			setIsSubmit(!isSubmit);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">J'ai une demande !</label>
			<div>
				<label htmlFor="categoryID">Catégorie</label>
				<select
					id="categoryID"
					name="categoryID"
					onChange={handleChange}
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="priorityID">Priorité</label>
				<select
					id="priorityID"
					name="priorityID"
					onChange={handleChange}
				>
					{priority.map((priority) => (
						<option key={priority.id} value={priority.id}>
							{priority.name}
						</option>
					))}
				</select>
			</div>
			<div>
				<label htmlFor="title">Titre</label>
				<input
					type="text"
					id="title"
					name="title"
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor="content">Contenu</label>
				<textarea id="content" name="content" onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="expiration">Expiration</label>
				<input
					type="date"
					id="expiration"
					name="expiration"
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Go 🏁</button>
		</form>
	);
}

export default PostService;
