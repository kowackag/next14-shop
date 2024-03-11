import { type Route } from "next";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

import { Paths } from "@/paths";



export const NavBar = () => {

	const navigationLinks = [
	{ name: "Home", href: Paths.HOME, exact: true },
	// { name: "About us", href: Paths.ABOUT },
	// { name: "Contact", href: Paths.CONTACT },
	{ name: "All", href: Paths.PRODUCTS },
	{ name: "Categories", href: Paths.CATEGORIES },
];
	return (
		<nav className="hidden md:flex md:justify-center">
			<ul className="flex items-center justify-center">
				{navigationLinks.map((link) => (
					<li className="px-2" key={link.href}>
						<ActiveLink
							href={link.href as Route}
							className="inline-block border-b-4 border-transparent px-2 py-6 hover:border-cyan-600"
							activeClassName="text-cyan-700 font-semibold"
							exact={link.exact ?? false}
						>
							{link.name}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
