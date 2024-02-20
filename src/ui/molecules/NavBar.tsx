import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const NavBar = () => {
	return (
		<nav className="hidden w-2/3 md:flex md:justify-center">
			<ul className="my-2 flex items-center justify-center">
				<li className="px-4">
					<ActiveLink href={"/"}>Home</ActiveLink>
				</li>
				<li className="px-4">
					<ActiveLink href={"/products"}>Products</ActiveLink>
				</li>
				<li className="px-4">
					<ActiveLink href={"/about"}>About us</ActiveLink>
				</li>
				<li className="px-4">
					<ActiveLink href={"/contact"}>Contact us</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
