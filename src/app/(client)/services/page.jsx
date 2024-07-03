import Serviceservice from "./ui/Serviceservice";
import prisma from "@/lib/prisma";
async function Services() {
	const services = await prisma.service.findMany();

	return (
		<>
			<h1>Ajout de la categorie</h1>
			<Serviceservice />
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
									<td>{service.name}</td>
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
