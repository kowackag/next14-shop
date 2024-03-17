import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { createPaginationLinks } from "@/utils/helpers";

export const Pagination = ({
	pages,
	path,
	productsNumberOnPage,
	params,
}: {
	pages: number;
	path: string;
	productsNumberOnPage: number;
	params?: string;
}) => {
	const paginationPagelinks = createPaginationLinks(
		Number(pages),
		path,
		productsNumberOnPage,
	);

	return (
		<nav
			className="mt-8 flex items-center justify-between border-t border-zinc-100 px-4 align-middle sm:px-0"
			aria-label="pagination"
		>
			<ul className="mx-auto hidden md:-mt-px md:flex">
				{paginationPagelinks.map((item) => (
					<li key={item.href} className="text-zinc-400">
						<ActiveLink
							href={`${item.href}${params ?? ""}` as Route}
							className="inline-flex items-center border-t-4 border-transparent px-6 py-4 text-sm  hover:border-cyan-600"
							activeClassName="text-cyan-700 font-semibold"
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
