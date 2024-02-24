import { createPaginationLinks } from "@/utils";
import { ActiveLink } from "../atoms/ActiveLink";
import { type Route } from "next";

export const Pagination = ({ pages }: { pages: number }) => {
	const paginationPagelinks = createPaginationLinks(Number(pages), "products");

	return (
		<nav
			className="mt-6 flex items-center justify-between border-t border-zinc-200 px-4 align-middle sm:px-0"
			aria-label="pagination"
		>
			<ul className="mx-auto hidden md:-mt-px md:flex">
				{paginationPagelinks.map((item) => (
					<li key={item.href} className="text-zinc-400">
						<ActiveLink
							href={item.href as Route}
							className="inline-flex items-center border-t-4 border-transparent px-6 py-4 text-sm  hover:border-cyan-200"
							activeClassName="text-cyan-200 font-semibold"
							exact={true}
							aria-label={`pagination ${item.pageNumber}`}
						>
							{item.pageNumber}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
