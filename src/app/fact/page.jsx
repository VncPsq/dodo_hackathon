"use client";
import { useEffect, useState } from "react";

export default function FactPage() {
	const [fact, setFact] = useState("");

	useEffect(() => {
		const fetchFact = async () => {
			try {
				const response = await fetch("/api/fact");
				const data = await response.json();
				setFact(data.value);
			} catch (error) {
				console.error("Error fetching the fact:", error);
			}
		};

		fetchFact();
	}, []);

	return (
		<div>
			<h1>Chuck Norris Fact</h1>
			<p>{fact}</p>
		</div>
	);
}
