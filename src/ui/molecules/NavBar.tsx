import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Route } from "next";
import { Paths } from "@/paths";

const navigationLinks = [
	{ name: "Home", href: "/", exact: true },
	{ name: "About us", href: Paths.ABOUT },
	{ name: "Contact", href: Paths.CONTACT },
	{ name: "All", href: "/products" },
	{ name: "Categories", href: "/categories" },
];

export const NavBar = () => {
	return (
		<nav className="hidden w-2/3 md:flex md:justify-center">
			<ul className="my-2 flex items-center justify-center">
				{navigationLinks.map((link) => (
					<li className="px-4" key={link.href}>
						<ActiveLink
							href={link.href as Route}
							className=""
							activeClassName="underline underline-offset-4"
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
