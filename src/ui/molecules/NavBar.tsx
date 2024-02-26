import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Route } from "next";
// import { Paths } from "@/paths";

const navigationLinks = [
	{ name: "Home", href: "/", exact: true },
	// { name: "About us", href: Paths.ABOUT },
	// { name: "Contact", href: Paths.CONTACT },
	{ name: "All", href: "/products" },
	{ name: "Collections", href: "/collections" },
	{ name: "Categories", href: "/categories" },
];

export const NavBar = () => {
	return (
		<nav className="hidden w-2/3 md:flex md:justify-center">
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
