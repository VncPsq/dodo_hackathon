"use client";
import { useState, useEffect } from "react";
import PostService from "./ui/PostService";
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

	return (
		<>
			<h1>Ajout de la categorie</h1>
			<PostService isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
			<section>
				<h2>Toutes les categorie</h2>
				{services && (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nom</th>
								<th>Gérer</th>
							</tr>
						</thead>
						<tbody>
							{services.map((service) => (
								<tr key={service.id}>
									<td>{service.id}</td>
									<td>{service.title}</td>
									<td>
										<button>Editer</button>
										<button>Supprimer</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</section>
		</>
	);
}

export default Services;
