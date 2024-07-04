"use client";

import { useEffect, useState } from "react";

import ServiceCard from "@/components/ServiceCard";

export default function Home() {
	const [services, setServices] = useState([]);

	const fetchData = async () => {
		const services = await fetch("/api/services");
		const data = await services.json();

		setServices(data);
	};

	console.log(services);

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className="flex flex-col items-top justify-between p-24">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto">
					<h2 className="text-3xl text-center mb-4">
						Toutes les personnes qui ont besoin d'aide 🥰
					</h2>
					<div class="grid md:grid-cols-3 -m-4">
						{services.map((service) => (
							<ServiceCard service={service} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
