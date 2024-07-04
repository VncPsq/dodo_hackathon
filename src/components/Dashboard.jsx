export default function Dashboard({ services, handleAccepted }) {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-8 ">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
									>
										Title
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Details
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Owner
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>
										Accepted
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{services.map((service) => (
									<tr key={service.id}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
											{service.title}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{service.content}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											{service.owner.name}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
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
					</div>
				</div>
			</div>
		</div>
	);
}
