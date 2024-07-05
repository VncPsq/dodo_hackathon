"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import PostCategory from "./ui/PostCategory";
import TableCategories from "@/components/TableCategories";
function Categories() {
	const [categories, setCategories] = useState([]);
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
		<div className="w-10/12 m-auto mb-5">
			<h1>Ajout de la catégorie</h1>
			<PostCategory isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
			<section>
				<h2 className="text-2xl font-bold">Toutes les catégories</h2>
				<TableCategories categories={categories} />
			</section>
		</div>
	);
}

export default Categories;
