"use client";
import { useState } from "react";

function PostPriority({ isSubmit, setIsSubmit }) {
	const [priority, setPriority] = useState("");

	const handleChange = (event) => {
		setPriority(event.target.value);
	};

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			await fetch("/api/priorities", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ priority }),
			});

			setIsSubmit(!isSubmit);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Nom de la priorité</label>
			<input type="text" id="name" name="name" onChange={handleChange} />
			<button type="submit">Go 🏁</button>
		</form>
	);
}

export default PostPriority;
