import { Suspense } from "react";

import { NavBar } from "@/ui/molecules/NavBar";
import { MobileMenuButton } from "@/ui/atoms/MobileMenuButton";
import { SearchField } from "@/ui/atoms/SearchField";
import { CartIcon } from "@/ui/atoms/CartIcon";
import { Container } from "@/ui/atoms/Container";

export const Header = () => {
	return (
		<header className="border-b border-zinc-100 px-4 ">
			<Container className="flex items-center justify-between  ">
				<p className="pb-2 text-3xl font-semibold sm:text-4xl">eminent</p>
				<NavBar />
				<div className="flex items-center justify-between">
					<Suspense>
						<SearchField />
					</Suspense>
					<MobileMenuButton />
					<CartIcon />
				</div>
			</Container>
		</header>
	);
};
