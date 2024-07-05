export default function TableCategories({ categories }) {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
									>
										Id
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Name
									</th>
									<th
										scope="col"
										className="relative py-3.5 pl-3 pr-4 sm:pr-3"
									>
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white">
								{categories.map((category) => (
									<tr
										key={category.id}
										className="even:bg-gray-50"
									>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
											{category.id}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{category.name}
										</td>

										<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
											<a
												href="#"
												className="text-indigo-600 hover:text-indigo-900"
											>
												Edit
												<span className="sr-only">
													, {category.name}
												</span>
											</a>
											<a
												href="#"
												className="text-red-600 hover:text-red-900 ml-3"
											>
												Delete
												<span className="sr-only">
													, {category.name}
												</span>
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
