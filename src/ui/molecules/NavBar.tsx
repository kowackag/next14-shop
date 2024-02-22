import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Paths } from "@/paths";

const navigationLinks = [
	{ name: "Home", href: Paths.HOME, exact: true },
	{ name: "Products", href: Paths.PRODUCTS },
	{ name: "About us", href: Paths.ABOUT },
	{ name: "Contact", href: Paths.CONTACT },
];

export const NavBar = () => {
	return (
		<nav className="hidden w-2/3 md:flex md:justify-center">
			<ul className="my-2 flex items-center justify-center">
				{navigationLinks.map((link) => (
					<li className="px-4">
						<ActiveLink
							href={link.href}
							className=""
							activeClassName="underline underline-offset-4"
							exact={link.exact || false}
						>
							{link.name}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
