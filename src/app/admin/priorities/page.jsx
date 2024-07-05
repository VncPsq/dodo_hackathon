"use client";

import PostPriority from "./ui/PostPriority";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import TablePriorities from "@/components/TablePriorities";

function Priorities() {
	const [priorities, setPriorities] = useState([]);
	const [isSubmit, setIsSubmit] = useState(false);
	const { user } = useAuth();

	if (JSON.parse(user) === null || JSON.parse(user).role !== "ADMIN") {
		window.location.href = "/";
	}

	useEffect(() => {
		const fetchCategories = async () => {
			const res = await fetch("/api/priorities", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			setPriorities(data);
		};
		fetchCategories();
	}, [isSubmit]);
	return (
		<div className="w-10/12 m-auto mb-5">
			<PostPriority isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
			<section>
				<h2 className="text-2xl font-bold">Toutes les priorités</h2>
				<TablePriorities priorities={priorities} />
			</section>
		</div>
	);
}

export default Priorities;
