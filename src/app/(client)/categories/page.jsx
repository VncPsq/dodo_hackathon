import PostCategory from "./ui/PostCategory";
import prisma from "@/lib/prisma";
async function Categories() {
	const categories = await prisma.category.findMany();

	return (
		<>
			<h1>Ajout de la categorie</h1>
			<PostCategory />
			<section>
				<h2>Toutes les categorie</h2>
				{categories && (
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Nom</th>
								<th>Gérer</th>
							</tr>
						</thead>
						<tbody>
							{categories.map((category) => (
								<tr key={category.id}>
									<td>{category.id}</td>
									<td>{category.name}</td>
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

export default Categories;
