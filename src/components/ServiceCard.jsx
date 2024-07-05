import Link from "next/link";
import { EyeIcon } from "@heroicons/react/20/solid";

function ServiceCard({ service }) {
	return (
		<div className="p-4">
			<div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
				<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
					{service.category.name}
				</h2>
				<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
					{service.title}
				</h1>
				<p className="leading-relaxed mb-3">{service.content}</p>
				<div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
					<Link
						href={`/services`}
						className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<EyeIcon
							aria-hidden="true"
							className="-ml-0.5 h-5 w-5"
						/>
						Voir l'annonce
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
