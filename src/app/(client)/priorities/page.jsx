import PostPriority from "./ui/PostPriority";
import prisma from "@/lib/prisma";
async function Priorities() {
	const priorities = await prisma.priority.findMany();

	return (
		<>
			<h1>Ajout de la priorité</h1>
			<PostPriority />
			<section>
				<h2>Toutes les priorités</h2>
				{priorities && (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nom</th>
								<th>Gérer</th>
							</tr>
						</thead>
						<tbody>
							{priorities.map((priority) => (
								<tr key={priority.id}>
									<td>{priority.id}</td>
									<td>{priority.name}</td>
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

export default Priorities;
