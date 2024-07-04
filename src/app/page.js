"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

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
							<div class="p-4">
								<div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
									<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
										{service.category.name}
									</h2>
									<h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
										{service.title}
									</h1>
									<p class="leading-relaxed mb-3">
										{service.content}
									</p>
									<div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
										<Link
											href={`/services`}
											className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											<CheckCircleIcon
												aria-hidden="true"
												className="-ml-0.5 h-5 w-5"
											/>
											Voir l'annonce
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
