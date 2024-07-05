"use client";
import { useState, useEffect } from "react";
import PostService from "./ui/PostService";
import Dashboard from "@/components/Dashboard";
function Services() {
	const [isSubmit, setIsSubmit] = useState(false);
	const [services, setServices] = useState([]);

	const fetchServices = async () => {
		try {
			const res = await fetch("/api/services");
			const data = await res.json();
			setServices(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchServices();
	}, [isSubmit]);

	console.log(services);

	const handleAccepted = async (e) => {
		const serviceId = e.target.dataset.id;
		const userId = JSON.parse(localStorage.getItem("user"))?.id;

		try {
			const res = await fetch("/api/services", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: serviceId, helperID: userId }),
			});
			const data = await res.json();
			console.log(data);
			setIsSubmit(!isSubmit);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<PostService isSubmit={isSubmit} setIsSubmit={setIsSubmit} />

			<section className="w-10/12 m-auto mb-10">
				<h2 className="text-2xl ">Toutes les catégories</h2>
				<Dashboard
					services={services}
					handleAccepted={handleAccepted}
				/>
				{/* 
				{services && (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nom</th>
								<th>Accepter</th>
							</tr>
						</thead>
						<tbody>
							{services.map((service) => (
								<tr key={service.id}>
									<td>{service.id}</td>
									<td>{service.title}</td>
									<td>
										{JSON.parse(
											localStorage.getItem("user")
										)?.id === service?.ownerID ? (
											<th>Tu es le proprio 😉</th>
										) : service?.helperID === null ? (
											<button
												data-id={service.id}
												onClick={handleAccepted}
											>
												J'accepte la mission
											</button>
										) : (
											<th>Service accepté 🎉</th>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)} */}
			</section>
		</>
	);
}

export default Services;
